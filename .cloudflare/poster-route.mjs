import { receivePoster } from './poster-intake.mjs';

const STR = {
  manual:'https://acmisantander.com.co/magazine/manual-publicacion/#publicar-poster',
  path:'/publicar-poster',
};
function e(input) {
  return String(input).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
}
function html(content,status=200) {
  return new Response(`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Publicar póster en Magazine ACMI</title>
<style>body{margin:0;padding:1.25rem;background:#f3f7fb;color:#153454;font:1rem/1.55 system-ui,sans-serif}main{background:white;border:1px solid #d2e0ee;border-radius:1rem;padding:clamp(1.25rem,4vw,2.5rem);max-width:45rem;margin:2rem auto}h1{line-height:1.15}label,legend{font-weight:650}input[type=file]{display:block;width:100%;margin:.4rem 0 1rem;font:inherit}fieldset{border:1px solid #d2e0ee;margin:1rem 0}button{border:0;border-radius:.6rem;background:#14664c;color:white;font:inherit;font-weight:700;padding:.65rem 1rem;cursor:pointer}a{color:#143f7d}</style></head>
<body><main><a href="${STR.manual}">Volver al manual de publicación</a><h1>Publicar póster en Magazine ACMI</h1>${content}</main></body></html>`,{
    status, headers:{
      'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store',
      'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer','X-Frame-Options':'DENY',
      'Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; script-src https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    },
  });
}
export async function posterRoute(request, env) {
  if (new URL(request.url).pathname !== STR.path) return null;
  if (env.POSTER_INTAKE_ENABLED !== '1' || !env.POSTER_PRIVATE_BUCKET || !env.POSTER_TURNSTILE_SECRET
      || !env.POSTER_TURNSTILE_SITEKEY || new URL(request.url).origin !== env.POSTER_FORM_ORIGIN) {
    return html('<p>La recepción de pósteres aún no está habilitada.</p>',503);
  }
  if (request.method === 'GET') return html(`<p>Adjunta tus documentos en PDF. Cada archivo puede pesar hasta 5 MiB. El envío queda sujeto a revisión editorial. No incluyas datos que permitan identificar a pacientes.</p>
${env.POSTER_CONSENT_ENABLED !== '1' ? '<p>Por ahora solo se reciben trabajos que no requieran adjuntar consentimiento informado.</p>' : ''}
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
<form method="post" action="${STR.path}" enctype="multipart/form-data">
<label for="poster">Póster sin datos identificables de pacientes</label><input type="file" name="poster" id="poster" accept="application/pdf,.pdf" required>
<label for="manuscrito">Manuscrito con bibliografía</label><input type="file" name="manuscrito" id="manuscrito" accept="application/pdf,.pdf" required>
<label for="firmas">Documento firmado por todos los autores y coautores</label><input type="file" name="firmas" id="firmas" accept="application/pdf,.pdf" required>
<fieldset><legend>¿Corresponde adjuntar consentimiento para publicación?</legend>
<label><input type="radio" name="requiere_consentimiento" value="si" ${env.POSTER_CONSENT_ENABLED === '1' ? 'required' : 'disabled'}> Sí</label>
<label><input type="radio" name="requiere_consentimiento" value="no" required> No</label></fieldset>
<label for="consentimiento">Consentimiento informado para publicación, cuando corresponda</label><input type="file" name="consentimiento" id="consentimiento" accept="application/pdf,.pdf" ${env.POSTER_CONSENT_ENABLED === '1' ? '' : 'disabled'}>
<p>El consentimiento y las firmas se reservan para revisión editorial y no se publican.</p>
<div class="cf-turnstile" data-sitekey="${e(env.POSTER_TURNSTILE_SITEKEY)}" data-action="acmi_poster"></div>
<button type="submit">Enviar a revisión editorial</button></form>`);
  const result=await receivePoster(request,env);
  const status=result.status;
  const data=await result.json();
  return status===201 ? html(`<p>Recibimos tus documentos. Guarda el número de recibido: <strong>${e(data.recibo)}</strong>.</p>`,201)
    : html(`<p>${e(data.error)}</p><p><a href="${STR.path}">Volver al formulario</a></p>`,status);
}
