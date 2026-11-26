// Dedicated POST intake; no read/list route and no public object links.
const FIELDS = [
  ['poster', 'poster.pdf'],
  ['manuscrito', 'manuscrito.pdf'],
  ['firmas', 'firmas.pdf'],
  ['consentimiento', 'consentimiento.pdf'],
];
const MAX_FILE = 5 * 1024 * 1024;
const MAX_REQUEST = 4 * MAX_FILE + 64 * 1024;
const ACTION = 'acmi_poster';

function response(data, status) {
  return Response.json(data, {status, headers: {
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer',
  }});
}

export async function receivePoster(request, env, verify = fetch) {
  if (!env.POSTER_INTAKE_ENABLED || env.POSTER_INTAKE_ENABLED !== '1'
      || !env.POSTER_PRIVATE_BUCKET || !env.POSTER_TURNSTILE_SECRET || !env.POSTER_FORM_ORIGIN) {
    return response({error:'La recepción de pósteres no está habilitada.'},503);
  }
  if (request.method !== 'POST') return response({error:'Método no permitido.'},405);
  if (request.headers.get('Origin') !== env.POSTER_FORM_ORIGIN) {
    return response({error:'Origen no permitido.'},403);
  }
  // Same-origin form and endpoint. No CORS relaxation for clinical documents.
  if (!request.headers.get('Content-Type')?.startsWith('multipart/form-data;')) {
    return response({error:'Envíe el formulario con los documentos adjuntos.'},415);
  }
  const length = Number(request.headers.get('Content-Length'));
  if (!Number.isSafeInteger(length) || length <= 0 || length > MAX_REQUEST) {
    return response({error:'El envío supera el tamaño permitido o no se pudo verificar su tamaño.'},413);
  }
  let form;
  try { form = await request.formData(); }
  catch { return response({error:'No se pudo leer el formulario.'},400); }

  for (const key of ['cf-turnstile-response',...FIELDS.map(([field])=>field)]) {
    if (form.getAll(key).length > 1) return response({error:'El formulario contiene campos repetidos.'},400);
  }
  const files = [];
  for (const [field,name] of FIELDS) {
    const file = form.get(field);
    if (!file || typeof file === 'string' || file.size < 5 || file.size > MAX_FILE
        || file.type !== 'application/pdf' || await file.slice(0,5).text() !== '%PDF-') {
      return response({error:'Adjunta los cuatro PDF obligatorios, de hasta 5 MiB cada uno.'},400);
    }
    files.push({name,file});
  }
  const token = form.get('cf-turnstile-response');
  if (typeof token !== 'string' || !token || token.length > 2048) {
    return response({error:'Complete la verificación del formulario.'},400);
  }
  try {
    const result = await verify('https://challenges.cloudflare.com/turnstile/v0/siteverify',{
      method:'POST',
      body:new URLSearchParams({secret:env.POSTER_TURNSTILE_SECRET,response:token}),
    });
    const check = result.ok ? await result.json() : null;
    if (!check?.success || check.action !== ACTION || check.hostname !== new URL(env.POSTER_FORM_ORIGIN).hostname) {
      return response({error:'No se pudo verificar el formulario. Inténtelo de nuevo.'},403);
    }
  } catch {
    return response({error:'La verificación no está disponible. Inténtelo más tarde.'},503);
  }
  const receipt = crypto.randomUUID();
  const prefix = 'recepcion/' + receipt + '/';
  const stored = [];
  try {
    for (const {name,file} of files) {
      const key = prefix + name;
      stored.push(key);
      await env.POSTER_PRIVATE_BUCKET.put(key,file.stream(),{httpMetadata:{contentType:'application/pdf'}});
    }
    await env.POSTER_PRIVATE_BUCKET.put(prefix+'recibido.json',JSON.stringify({
      recibo:receipt, fecha:new Date().toISOString(), documentos:files.map(({name})=>name),
    }),{httpMetadata:{contentType:'application/json'}});
    return response({recibido:true, recibo:receipt},201);
  } catch {
    try { await env.POSTER_PRIVATE_BUCKET.delete([...stored,prefix+'recibido.json']); } catch { /* no success reported */ }
    return response({error:'El envío no se completó. Inténtelo más tarde.'},503);
  }
}
