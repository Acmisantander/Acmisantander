import { receivePoster } from './poster-intake.mjs';

const STR = {
  manual:'https://acmisantander.com.co/magazine/manual-publicacion/#publicar-poster',
  path:'/publicar-poster',
};
function e(input) {
  return String(input).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
}
function html(content,status=200,embedded=false) {
  const site='https://acmisantander.com.co';
  const nonce=crypto.randomUUID();
  const resize=embedded ? `<script nonce="${nonce}">const main=document.querySelector('main'); const sync=()=>parent.postMessage({type:'acmi-poster-height',height:Math.ceil(main.getBoundingClientRect().height)+4},'${site}'); new ResizeObserver(sync).observe(main);sync();</script>` : '';
  return new Response(`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Publicar póster en Magazine ACMI</title>
<style>
[hidden]{display:none!important}*{box-sizing:border-box}body{margin:0;padding:1rem;background:#f5f7fb;color:#243244;font:1rem/1.55 system-ui,sans-serif}main{background:#fff;border:1px solid #dbe7f5;border-radius:24px;padding:clamp(16px,4vw,38px);max-width:55rem;margin:2rem auto}h1{color:#143f7d;line-height:1.15}a{color:#143f7d;overflow-wrap:anywhere}
.poster-intro{margin:0 0 18px;color:#52667e}.poster-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.poster-field{display:grid;align-content:space-between;gap:8px;min-width:0}label{color:#143f7d;font-weight:800;font-size:.95rem}
input[type=file]{display:block;width:100%;min-width:0;padding:8px;border:1px dashed #9fb5cc;border-radius:14px;background:#fbfdff;color:#243244;font:inherit;font-size:.875rem}input::file-selector-button{border:0;border-radius:9px;background:#eaf1fa;color:#143f7d;font:inherit;font-weight:750;min-height:36px;padding:6px 10px;margin-inline-end:8px;cursor:pointer}input::file-selector-button:hover{background:#dbe7f5}
.poster-note{margin:20px 0 16px;padding:14px 16px;background:#f8fafc;border:1px solid #dbe7f5;border-radius:16px;color:#334155;font-size:.92rem}.poster-help{margin:16px 0 0;color:#52667e;font-size:.92rem}
button{border:0;border-radius:14px;background:linear-gradient(135deg,#146847,#1b784d);box-shadow:0 8px 18px #08284f1a;color:#fff;font:inherit;font-weight:800;min-height:46px;padding:10px 20px;cursor:pointer}button:hover{background:#11573b}:focus-visible{outline:2px solid #143f7d;outline-offset:2px}.cf-turnstile{max-width:100%}
@media(max-width:620px){.poster-fields{grid-template-columns:1fr;gap:14px}button{width:100%}}
${embedded ? 'body{padding:0;background:#fff}main{margin:0;padding:4px;max-width:none;border:0;border-radius:0;display:flow-root}' : ''}
</style></head>
<body><main>${embedded ? '' : `<a href="${STR.manual}">Volver al manual de publicación</a><h1>Publicar póster en Magazine ACMI</h1>`}${content}</main><script nonce="${nonce}">(()=>{const t=document.querySelector('#tipo'),m=document.querySelector('#modalidad');if(!t||!m)return;const ev=document.getElementById('evento');let previousName='';function sync(){const participa=['concurso','ambas'].includes(m.value);ev.parentElement.hidden=!participa;ev.disabled=!participa;ev.required=participa;if(!participa)ev.value='';const ready=!!(t.value&&m.value),clinical=['caso','serie'].includes(t.value),online=['magazine','ambas'].includes(m.value);const editorial=document.getElementById('consentimiento-editorial');const name=clinical?'consentimiento':'carta';if(previousName!==name)editorial.value='';previousName=name;editorial.name=name;document.querySelector('label[for=consentimiento-editorial]').textContent=!ready?'Consentimiento Magazine para exhibición en línea':clinical?'Consentimiento para casos clínicos':['sist','alc','nar'].includes(t.value)?'Consentimiento para revisión de la literatura':'Consentimiento para investigación original';for(const [f,on] of [[editorial,ready&&online],[document.getElementById('consentimiento_institucional'),ready&&clinical]]){f.parentElement.hidden=f===editorial?!!(t.value&&m.value&&!online):!!(t.value&&!clinical);f.disabled=!on;f.required=on;if(!on)f.value='';document.getElementById(f.id+'-estado').textContent=on?'Obligatorio':ready?'No aplica a este envío':'Selecciona la modalidad y el tipo de trabajo';}}t.onchange=m.onchange=sync;sync();})();</script>${resize}</body></html>`,{
    status, headers:{
      'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store',
      'X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer',...(embedded ? {} : {'X-Frame-Options':'DENY'}),
      'Content-Security-Policy':`default-src 'none'; style-src 'unsafe-inline'; script-src https://challenges.cloudflare.com 'nonce-${nonce}'; frame-src https://challenges.cloudflare.com; form-action 'self'; base-uri 'none'; frame-ancestors ${embedded ? site : "'none'"}`,
    },
  });
}
export async function posterRoute(request, env) {
  const url=new URL(request.url);
  if (url.pathname !== STR.path) return null;
  const embedded=url.searchParams.get('embed')==='1';
  const action=STR.path+(embedded ? '?embed=1' : '');
  const page=(content,status)=>html(content,status,embedded);
  if (env.POSTER_INTAKE_ENABLED !== '1' || !env.POSTER_PRIVATE_BUCKET || !env.POSTER_TURNSTILE_SECRET
      || !env.POSTER_TURNSTILE_SITEKEY || new URL(request.url).origin !== env.POSTER_FORM_ORIGIN) {
    return page('<p>La recepción de pósteres aún no está habilitada.</p>',503);
  }
  if (request.method === 'GET') return page(`<p class="poster-intro">Adjunta tus documentos en PDF. El envío queda sujeto a revisión editorial.</p>
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script>
<form method="post" action="${action}" enctype="multipart/form-data">
<p><label for="modalidad">Modalidad del envío</label><br><select id="modalidad" name="modalidad" required><option value="">Selecciona una modalidad</option><option value="magazine">Solo exhibición en línea</option><option value="concurso">Solo concurso de pósteres en un evento académico organizado por ACMI Santander</option><option value="ambas">Ambas: concurso de pósteres y exhibición en línea</option></select></p>
<p hidden><label for="evento">Evento del concurso</label><br><select id="evento" name="evento" disabled><option value="">Selecciona el evento</option><option value="congreso-nacional-acmi-bucaramanga-2027">Congreso Nacional ACMI Bucaramanga 2027</option></select></p>
<p><label for="tipo">Tipo de trabajo y diseño</label><br><select id="tipo" name="tipo" required><option value="">Selecciona una opción</option><optgroup label="Presentación de casos clínicos"><option value="caso">Reporte de caso</option><option value="serie">Serie de casos clínicos</option></optgroup><optgroup label="Investigación original"><option value="cohorte">Estudio de cohortes</option><option value="cc">Estudio de casos y controles</option><option value="trans">Estudio transversal</option><option value="eco">Estudio ecológico</option><option value="ensayo">Ensayo aleatorizado</option><option value="cuasi">Estudio cuasiexperimental</option><option value="cual">Estudio cualitativo</option><option value="mixto">Estudio de métodos mixtos</option><option value="original">Otro diseño de investigación original</option></optgroup><optgroup label="Revisión de la literatura"><option value="sist">Revisión sistemática (con o sin metaanálisis)</option><option value="alc">Revisión de alcance</option><option value="nar">Revisión narrativa</option></optgroup></select></p>
<p><label for="tesis">¿Este trabajo es una tesis de grado?</label><br><select id="tesis" name="tesis" required><option value="">Selecciona una opción</option><option value="si">Sí</option><option value="no">No</option></select></p>
<div class="poster-fields">
<div class="poster-field"><label for="poster">Póster</label><input type="file" name="poster" id="poster" accept="application/pdf,.pdf" required></div>
<div class="poster-field"><label for="manuscrito">Manuscrito con bibliografía</label><input type="file" name="manuscrito" id="manuscrito" accept="application/pdf,.pdf" required></div>
<div class="poster-field"><label for="firmas">Documento firmado por todos los autores y coautores</label><input type="file" name="firmas" id="firmas" accept="application/pdf,.pdf" required></div>
<div class="poster-field"><label for="consentimiento-editorial">Consentimiento Magazine para exhibición en línea</label><small id="consentimiento-editorial-estado" aria-live="polite">Selecciona la modalidad y el tipo de trabajo</small><input type="file" id="consentimiento-editorial" name="consentimiento" accept="application/pdf,.pdf" aria-describedby="consentimiento-editorial-estado" disabled></div>
<div class="poster-field"><label for="consentimiento_institucional">Consentimiento de la universidad o IPS de origen</label><small id="consentimiento_institucional-estado" aria-live="polite">Selecciona la modalidad y el tipo de trabajo</small><input type="file" name="consentimiento_institucional" id="consentimiento_institucional" accept="application/pdf,.pdf" aria-describedby="consentimiento_institucional-estado" disabled></div>
</div>
<p class="poster-note">ACMI Santander usa estos documentos para evaluar el envío. Los consentimientos y las firmas se reservan para revisión editorial privada y no se publican.</p>
<div class="cf-turnstile" data-sitekey="${e(env.POSTER_TURNSTILE_SITEKEY)}" data-action="acmi_poster" data-appearance="interaction-only" data-size="flexible"></div>
<button type="submit">Enviar a revisión editorial</button></form>
<p class="poster-help">Si un archivo no carga, escribe a <a href="mailto:santanderacmi@gmail.com">santanderacmi@gmail.com</a> para coordinar el envío.</p>`);
  const result=await receivePoster(request,env);
  const status=result.status;
  const data=await result.json();
  return status===201 ? page(`<p>Recibimos tus documentos para revisión editorial.</p>`,201)
    : page(`<p>${e(data.error)}</p><p>Si el archivo no carga, escribe a santanderacmi@gmail.com para coordinar el envío por un canal privado.</p><p><a href="${action}">Volver al formulario</a></p>`,status);
}
