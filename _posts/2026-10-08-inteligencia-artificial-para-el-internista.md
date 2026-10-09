---
layout: default
title: "¿Qué inteligencia artificial puede usar hoy un internista, y para qué?"
date: 2026-10-08
author: "Dr. Juan Sebastián Therán León"
affiliation: "Médico familiar, Magíster en Inteligencia Artificial en Salud"
categories: magazine
subcategory: articulo-academico
permalink: /magazine/inteligencia-artificial-internista/
excerpt: "Guía práctica de herramientas de inteligencia artificial disponibles en Colombia, con su evidencia, costo y límites para la práctica clínica."
---

<style>

/* 
  CORRECCIÓN DEFINITIVA:
  layout: default evita que _layouts/post.html agregue el foro antiguo.
  Este archivo deja visible únicamente el foro nuevo incluido al final.
*/

.emotional-book{
  position:relative;
  animation:emotionalBookFadeIn .9s ease both;
}

@keyframes emotionalBookFadeIn{
  from{
    opacity:0;
    transform:translateY(18px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.emotional-book::before{
  content:"";
  display:block;
  width:128px;
  height:7px;
  border-radius:999px;
  margin:0 auto 28px;
  background:linear-gradient(90deg, #2a9c52, #143f7d, #c89b3c);
}

.emotional-label{
  display:flex;
  justify-content:center;
  margin-bottom:22px;
}

.emotional-label span{
  display:inline-flex;
  padding:9px 16px;
  border-radius:999px;
  background:#eef4fb;
  color:#143f7d;
  border:1px solid #dbe7f5;
  font-family:'Montserrat', sans-serif;
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.06em;
}

.emotional-paper{
  position:relative;
  max-width:900px;
  margin:0 auto;
  padding:58px 66px;
  border-radius:18px;
  background:
    linear-gradient(90deg, rgba(20,63,125,.035) 0 1px, transparent 1px 100%),
    linear-gradient(180deg, #fffdf8, #ffffff 26%, #fffdf8);
  background-size:32px 100%, 100% 100%;
  border:1px solid rgba(20,63,125,.12);
  box-shadow:
    0 24px 60px rgba(8,40,79,.15),
    inset 0 0 0 1px rgba(255,255,255,.72);
  overflow:hidden;
}

.emotional-paper::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:9px;
  height:100%;
  background:linear-gradient(180deg, #2a9c52, #143f7d, #c89b3c);
}

.emotional-paper::after{
  content:"";
  position:absolute;
  right:-90px;
  bottom:-100px;
  width:230px;
  height:230px;
  border-radius:50%;
  background:rgba(42,156,82,.07);
  pointer-events:none;
}

.emotional-title{
  font-family:'Montserrat', sans-serif;
  color:#143f7d;
  font-size:clamp(30px,3.6vw,46px);
  line-height:1.1;
  font-weight:900;
  letter-spacing:-.045em;
  text-align:center;
  margin:0 0 14px;
}

.emotional-subtitle{
  max-width:720px;
  margin:0 auto 18px;
  text-align:center;
  color:#334155;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:21px;
  line-height:1.65;
  font-style:italic;
}

.emotional-author{
  text-align:center;
  color:#5b6d82;
  font-family:'Montserrat', sans-serif;
  font-size:14px;
  font-weight:800;
  margin:0 0 34px;
}

.emotional-separator{
  width:90px;
  height:4px;
  border-radius:999px;
  margin:0 auto 38px;
  background:linear-gradient(90deg, #2a9c52, #c89b3c);
}

.emotional-text{
  position:relative;
  z-index:2;
  color:#263447;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:20.5px;
  line-height:2.02;
  text-align:justify;
  hyphens:auto;
}

.emotional-text p{
  margin:0 0 24px;
}

.emotional-text p:first-of-type::first-letter{
  float:left;
  font-family:'Montserrat', sans-serif;
  font-size:5.3rem;
  line-height:.82;
  font-weight:900;
  color:#143f7d;
  padding:10px 12px 0 0;
}

.emotional-text strong{
  color:#143f7d;
  font-weight:900;
}

.emotional-pullquote{
  margin:36px 0;
  padding:28px 32px;
  border-radius:28px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.14), transparent 34%),
    linear-gradient(135deg, rgba(8,40,79,.98), rgba(20,63,125,.92));
  color:white;
  box-shadow:0 18px 44px rgba(8,40,79,.18);
  position:relative;
  overflow:hidden;
}

.emotional-pullquote::after{
  content:"";
  position:absolute;
  right:-70px;
  bottom:-90px;
  width:190px;
  height:190px;
  border-radius:50%;
  background:rgba(255,255,255,.10);
}

.emotional-pullquote strong{
  position:relative;
  z-index:2;
  display:block;
  color:white;
  font-family:'Montserrat', sans-serif;
  font-size:24px;
  line-height:1.28;
  margin-bottom:8px;
}

.emotional-pullquote span{
  position:relative;
  z-index:2;
  display:block;
  color:#eaf3ff;
  font-family:'Lato', sans-serif;
  font-size:16px;
  line-height:1.75;
}

.emotional-section{
  position:relative;
  z-index:2;
  margin-top:38px;
  padding:30px;
  border-radius:26px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.08), transparent 34%),
    #f8fafc;
  border:1px solid rgba(20,63,125,.10);
  box-shadow:0 12px 28px rgba(8,40,79,.08);
}

.emotional-section h4{
  font-family:'Montserrat', sans-serif;
  color:#143f7d;
  font-size:24px;
  line-height:1.2;
  font-weight:900;
  letter-spacing:-.035em;
  margin:0 0 16px;
}

.emotional-section h4::after{
  content:"";
  display:block;
  width:72px;
  height:4px;
  border-radius:999px;
  margin-top:12px;
  background:linear-gradient(90deg, #2a9c52, #c89b3c);
}

.emotional-section p{
  color:#334155;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:18px;
  line-height:1.85;
  margin:0 0 14px;
}

.emotional-section p:last-child{
  margin-bottom:0;
}

.academic-table-wrap{
  width:100%;
  margin:24px 0 10px;
  overflow-x:auto;
  border-radius:18px;
  border:1px solid rgba(20,63,125,.12);
  background:white;
  box-shadow:0 10px 24px rgba(8,40,79,.07);
}

.academic-table{
  width:100%;
  min-width:720px;
  border-collapse:collapse;
  font-family:'Lato', Arial, sans-serif;
  font-size:14px;
  line-height:1.55;
}

.academic-table th{
  padding:15px 14px;
  text-align:left;
  vertical-align:top;
  color:white;
  background:linear-gradient(135deg,#0f3569,#143f7d);
  border-right:1px solid rgba(255,255,255,.16);
}

.academic-table td{
  padding:14px;
  vertical-align:top;
  color:#334155;
  border-right:1px solid #e5edf6;
  border-bottom:1px solid #e5edf6;
}

.academic-table tbody tr:nth-child(even){
  background:#f7fafc;
}

.academic-table th:last-child,
.academic-table td:last-child{
  border-right:0;
}

.academic-table tbody tr:last-child td{
  border-bottom:0;
}

.academic-table-caption{
  margin:0 0 14px !important;
  color:#143f7d !important;
  font-family:'Montserrat',sans-serif !important;
  font-size:15px !important;
  font-weight:900;
  line-height:1.5 !important;
}

.academic-note{
  margin-top:14px !important;
  color:#5b6d82 !important;
  font-size:14px !important;
  line-height:1.65 !important;
}

.academic-references p{
  padding-left:28px;
  text-indent:-28px;
  font-size:15px;
  line-height:1.7;
}

.emotional-footer-note{
  position:relative;
  z-index:2;
  margin-top:40px;
  padding-top:24px;
  border-top:1px solid rgba(20,63,125,.14);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  color:#5b6d82;
  font-family:'Montserrat', sans-serif;
  font-size:13px;
  font-weight:800;
}

.emotional-footer-note span:first-child{
  color:#143f7d;
}

.emotional-footer-note span:last-child{
  color:#2a9c52;
}



/* ASEGURAR VISIBILIDAD DEL FORO NUEVO */
.emotional-forum-section,
.emotional-forum-card,
.emotional-forum-card .commentbox{
  display:block !important;
}


/* FORO NUEVO ÚNICO */
.emotional-forum-section,
.emotional-forum-card,
.emotional-forum-card .commentbox{
  display:block !important;
}

/* FORO NUEVO */

.emotional-forum-section{
  max-width:900px;
  margin:34px auto 0;
  position:relative;
  animation:emotionalBookFadeIn .9s ease both;
}

.emotional-forum-card{
  position:relative;
  padding:34px;
  border-radius:28px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.10), transparent 34%),
    radial-gradient(circle at bottom right, rgba(20,63,125,.10), transparent 34%),
    #f8fafc;
  border:1px solid rgba(20,63,125,.10);
  box-shadow:0 16px 38px rgba(8,40,79,.10);
  overflow:hidden;
}

.emotional-forum-card::before{
  content:"";
  position:absolute;
  inset:0 0 auto 0;
  height:7px;
  background:linear-gradient(90deg, #2a9c52, #143f7d, #c89b3c);
}

.emotional-forum-kicker{
  display:inline-flex;
  padding:9px 15px;
  border-radius:999px;
  background:#eef4fb;
  color:#143f7d;
  border:1px solid #dbe7f5;
  font-family:'Montserrat', sans-serif;
  font-weight:900;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.06em;
  margin-bottom:14px;
}

.emotional-forum-card h3{
  font-family:'Montserrat', sans-serif;
  color:#143f7d;
  font-size:clamp(26px,3vw,36px);
  line-height:1.12;
  font-weight:900;
  letter-spacing:-.04em;
  margin:0 0 14px;
}

.emotional-forum-card p{
  color:#5b6d82;
  font-size:17px;
  line-height:1.8;
  margin:0 0 24px;
}

.emotional-forum-card .commentbox{
  width:100%;
}


@media(max-width:760px){

  .emotional-paper{
    padding:42px 28px;
    border-radius:16px;
  }

  .emotional-text{
    font-size:18px;
    line-height:1.9;
    text-align:left;
  }

  .emotional-text p:first-of-type::first-letter{
    font-size:4.2rem;
  }

  .emotional-section{
    padding:24px;
  }

  .emotional-footer-note{
    flex-direction:column;
    align-items:flex-start;
  }

  .emotional-forum-section{
    margin-top:28px;
  }

  .emotional-forum-card{
    padding:26px;
    border-radius:24px;
  }

}

</style>

<div class="emotional-book">
<div class="emotional-label">
    <span>Artículo académico</span>
  </div>
<article class="emotional-paper">
    <h2 class="emotional-title">
      ¿Qué inteligencia artificial puede usar hoy un internista, y para qué?
    </h2>
    <p class="emotional-subtitle">
      Guía práctica de herramientas disponibles en Colombia, con su evidencia, su costo y sus límites
    </p>

    <p class="emotional-author">
      Dr. Juan Sebastián Therán León · Médico familiar · Magíster en Inteligencia Artificial en Salud · Magazine ACMI Santander · 09/10/2026
    </p>

    <div class="emotional-separator"></div>

    <div class="emotional-text">

      <section class="emotional-section">
        <h4>Introducción</h4>
        <p>La pregunta que más escucho en un congreso no es si la inteligencia artificial (IA) sirve, sino cuál usar mañana en la consulta. Responderla exige separar lo que existe, lo validado y lo accesible desde Colombia: tres conjuntos que se superponen menos de lo esperado. De 1357 dispositivos con IA autorizados por la Food and Drug Administration hasta diciembre de 2025, solo 34 estaban vinculados a un ensayo prospectivo registrado y apenas tres se evaluaron en desenlaces centrados en el paciente (1). Este artículo los ordena por función clínica, con su evidencia, su costo y sus límites.</p>
      </section>

      <section class="emotional-section">
        <h4>Fuentes</h4>
        <p>Se revisaron, hasta septiembre de 2026, ensayos aleatorizados, validaciones externas, revisiones sistemáticas y guías metodológicas localizadas en PubMed. La información de acceso y costo proviene de los sitios oficiales de cada proveedor, con su fecha de consulta. No se recibió financiación ni acceso preferencial.</p>
      </section>

      <section class="emotional-section">
        <h4>Cómo decidir qué usar</h4>
        <p>Antes del catálogo, el criterio. Cinco preguntas resumen los marcos vigentes —PROBAST+AI (2) y CONSORT-AI (3)— y clasifican cualquier oferta en minutos: ¿hubo validación externa independiente?; ¿se reporta calibración y no solo discriminación?; ¿la población de desarrollo se parece a la mía?; ¿mejoró desenlaces o solo métricas de exactitud?; ¿se evaluó la interacción con el clínico? Su utilidad se ve en el modelo comercial de sepsis más difundido: en validación externa mostró un área bajo la curva de 0,63, con dos de cada tres casos no detectados y alertas en el 18% de los hospitalizados (4). En el extremo opuesto, el tamizaje mamográfico asistido superó tres etapas —seguridad, detección y cáncer de intervalo— antes de recomendarse (5).</p>

        <p class="academic-table-caption">Tabla 1. Cinco preguntas para evaluar una herramienta de inteligencia artificial</p>

        <div class="academic-table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Pregunta</th>
                <th>Por qué importa</th>
                <th>Si la respuesta falta</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>¿Hubo validación externa independiente?</td><td>El desempeño en los datos de desarrollo sobrestima el real (2).</td><td>No usar para decidir; solo como hipótesis.</td></tr>
              <tr><td>¿Se reporta la calibración, y no solo la discriminación?</td><td>Un buen índice de discriminación mal calibrado entrega riesgos absolutos erróneos (2).</td><td>Desconfiar de cualquier probabilidad que muestre.</td></tr>
              <tr><td>¿La población de desarrollo se parece a la mía?</td><td>Los sesgos del sistema de origen se heredan.</td><td>Exigir validación local antes de implementar.</td></tr>
              <tr><td>¿Mejoró desenlaces, o solo métricas de exactitud?</td><td>Detectar más no equivale a mejorar (5).</td><td>Tratarla como herramienta de proceso, no de decisión.</td></tr>
              <tr><td>¿Se evaluó la interacción con el clínico?</td><td>El error suele nacer en la interfaz, no en el algoritmo (3).</td><td>Prever supervisión explícita y registro del uso.</td></tr>
            </tbody>
          </table>
        </div>

        <p>La exigencia debe ser proporcional al riesgo: para tareas administrativas basta una evaluación temprana con revisión humana; para decisiones diagnósticas o terapéuticas se requieren ensayos con desenlaces. En una revisión de 86 ensayos aleatorizados de IA, el 81% reportaba un resultado primario positivo, con predominio de estudios unicéntricos y probable sesgo de publicación (6); un metaanálisis de 31 ensayos cardiovasculares encontró que solo el 23% tenía bajo riesgo de sesgo y que el efecto del electrocardiograma con IA para insuficiencia cardiaca dejaba de ser significativo al agrupar los estudios (7).</p>
      </section>

      <div class="emotional-pullquote">
        <strong>
          La IA debe ampliar el criterio clínico, no reemplazarlo.
        </strong>
        <span>
          Validación externa, calibración, aplicabilidad local, desenlaces clínicos e interacción con el profesional son los cinco filtros esenciales.
        </span>
      </div>

      <section class="emotional-section">
        <h4>Herramientas por función clínica</h4>

        <p><strong>Documentación.</strong> Es hoy el uso con mejor relación entre beneficio y riesgo, y el único con ensayos aleatorizados favorables en el ámbito ambulatorio. Los escribas ambientales, que transcriben la consulta y redactan un borrador de la nota, redujeron el tiempo de documentación en 0,36 horas diarias y el agotamiento en un ensayo escalonado con 66 profesionales, sin deterioro de la calidad documental (8). En un segundo ensayo, con 238 médicos, uno de dos productos redujo el tiempo en notas un 9,5% y el otro no mostró efecto; los usuarios de ambos reportaron imprecisiones clínicamente relevantes ocasionales (9). Los estudios sin grupo control muestran efectos mayores (10): cautela con el material promocional. Al menos una plataforma ofrece nivel gratuito e interfaz en español (11).</p>

        <p><strong>Consulta de evidencia.</strong> Las herramientas que aplican modelos de lenguaje sobre contenido editorial curado son las más útiles en el punto de atención, pero su acceso es desigual: según el fabricante, el plan individual de UpToDate que incluye Expert AI está disponible solo en Estados Unidos y Canadá, y en otros mercados el acceso depende de convenios institucionales (12). La alternativa gratuita más difundida, OpenEvidence, condiciona el registro a la verificación de credenciales profesionales y durante años exigió un identificador de proveedor estadounidense (13); hoy es utilizable desde Colombia, y en septiembre de 2026 se anunció acceso gratuito en cerca de un centenar de países de ingresos bajos y medios, sin lista pública (14). Conviene verificar la disponibilidad al registrarse y preguntar en la biblioteca qué suscripciones ya existen. Las calculadoras de escalas validadas siguen siendo el recurso gratuito más confiable, aunque no sean IA generativa.</p>

        <p><strong>Sin suscripción institucional.</strong> Es la situación más frecuente y no deja al clínico sin salida: PubMed con filtros por tipo de estudio, las guías de sociedades publicadas en abierto y las plataformas gratuitas de consulta con cita cubren la mayoría de las preguntas, siempre abriendo la fuente referida. Y conviene solicitar la suscripción por escrito a la biblioteca o al comité de educación, con dos argumentos: consultas mensuales previstas y costo por consulta.</p>

        <p><strong>Redacción, educación al paciente y docencia.</strong> Los modelos de lenguaje de propósito general son útiles para redactar material informativo, resumir o preparar clases, y no requieren licencia clínica. No son dispositivos médicos ni han demostrado mejorar decisiones: en un ensayo aleatorizado con 50 médicos, el acceso a un modelo de lenguaje no mejoró el razonamiento diagnóstico (76% frente a 74%), aunque el modelo actuando solo superaba al grupo control en 16 puntos (15). El riesgo dominante no son las alucinaciones, sino la adopción acrítica: en atención primaria de Kenia, un sistema de este tipo generó recomendaciones dañinas en el 7,8% de las consultas y los clínicos no modificaron la nota en el 62% de los encuentros (16).</p>

        <p><strong>Instrucciones seguras.</strong> Tres plantillas ilustran el uso razonable de los modelos de lenguaje, sin datos identificables. Para material educativo: «redacta una hoja informativa para un adulto con [condición], en español sencillo, máximo 250 palabras, sin indicar dosis». Para razonamiento clínico: «paciente de [edad] con [hallazgos]; enumera diagnósticos diferenciales por probabilidad y, para cada uno, la prueba que lo confirmaría o descartaría; no supongas datos que no te di». Para una guía: «resume en diez puntos las recomendaciones de [guía y año] sobre [tema] e indica la sección de origen», abriendo después el documento original. La primera admite una revisión de estilo; las otras dos exigen verificación clínica de cada línea.</p>

        <p><strong>Revisión de literatura.</strong> Las plataformas de síntesis bibliográfica asistida aceleran la búsqueda y el cribado, pero no son apoyo a la decisión y exigen verificar cada referencia: su lugar es la investigación y la docencia.</p>

        <p class="academic-table-caption">Tabla 2. Herramientas de IA utilizables desde Colombia, por función clínica (consulta: septiembre de 2026)</p>

        <div class="academic-table-wrap">
          <table class="academic-table">
            <thead>
              <tr><th>Función</th><th>Herramienta y enlace</th><th>Costo y acceso</th><th>Evidencia</th><th>Advertencia</th></tr>
            </thead>
            <tbody>
              <tr><td>Documentación</td><td>Heidi Health<br>heidihealth.com</td><td>Nivel gratuito para notas; plan de pago (11)</td><td>Categoría con dos ensayos aleatorizados favorables (8,9); este producto no fue el evaluado</td><td>Consentimiento del paciente y lectura completa de la nota</td></tr>
              <tr><td>Documentación</td><td>Abridge · Nabla · Microsoft Dragon Copilot</td><td>Contratación institucional</td><td>Productos de esta categoría evaluados en ensayos aleatorizados, con efecto dependiente del producto (8,9)</td><td>Requiere acuerdo institucional de tratamiento de datos</td></tr>
              <tr><td>Consulta de evidencia</td><td>OpenEvidence<br>openevidence.com</td><td>Gratuita, con verificación de credenciales; utilizable desde Colombia (13,14)</td><td>Respuestas con cita a literatura revisada por pares; sin evaluación independiente de desenlaces</td><td>Financiada con publicidad de la industria; verificar la fuente citada</td></tr>
              <tr><td>Consulta de evidencia</td><td>UpToDate con Expert AI<br>uptodate.com</td><td>Pago; Expert AI según mercado o convenio institucional (12)</td><td>Contenido editorial curado; sin evaluación independiente de desenlaces</td><td>Consultar antes si la institución ya tiene la suscripción</td></tr>
              <tr><td>Consulta de evidencia</td><td>AMBOSS · ClinicalKey AI · DynaMedex</td><td>Pago o institucional</td><td>Contenido curado; sin evaluación independiente de desenlaces</td><td>Precio y disponibilidad varían por país e institución</td></tr>
              <tr><td>Cálculo clínico</td><td>MDCalc<br>mdcalc.com</td><td>Gratuita</td><td>Implementa escalas validadas por terceros</td><td>No es IA generativa; verificar la escala de origen</td></tr>
              <tr><td>Redacción, educación al paciente y docencia</td><td>ChatGPT · Claude · Gemini</td><td>Gratuito con planes de pago</td><td>Sin mejora del razonamiento diagnóstico en ensayo (15); riesgo de adopción acrítica (16)</td><td>No ingresar datos identificables; verificar toda salida</td></tr>
              <tr><td>Revisión de literatura</td><td>Elicit · Consensus · Scite · NotebookLM</td><td>Gratuito con planes de pago</td><td>No evaluadas como apoyo a la decisión clínica</td><td>Verificar cada referencia por su identificador digital</td></tr>
              <tr><td>Tamizaje asistido</td><td>Sistemas autónomos regulados, por ejemplo para retinopatía diabética</td><td>Institucional, como dispositivo médico</td><td>Ensayo pivotal y ensayo aleatorizado con desenlaces de proceso (17)</td><td>Exige ruta de remisión definida; poco disponible en consultorio</td></tr>
            </tbody>
          </table>
        </div>

        <p class="academic-note">Enlaces consultados el 24 de septiembre de 2026. La inclusión no implica recomendación; los precios y la disponibilidad cambian con frecuencia y dependen del país.</p>
      </section>

      <section class="emotional-section">
        <h4>Datos del paciente, responsabilidad y normativa</h4>
        <p>Ninguna de estas herramientas se ha validado en población latinoamericana, lo que obliga a tratar toda salida como hipótesis. Y hay una restricción anterior a la evidencia: en Colombia no existe aún una ley de IA, pero sí obligaciones de protección de datos. La Ley 1581 de 2012 clasifica los datos de salud como sensibles y exige autorización previa, expresa e informada del titular (18): grabar una consulta o ingresar información identificable en herramientas de consumo traslada al médico un riesgo que el proveedor no asume. La decisión, la verificación y la firma siguen siendo del clínico. El panorama regional es desigual: la Unión Europea clasifica como de alto riesgo la IA incorporada en dispositivos médicos y exigirá supervisión humana, aunque esas obligaciones se aplazaron hasta agosto de 2028 (19,20); Perú ya reglamentó su ley de IA, con transparencia algorítmica exigible en salud desde septiembre de 2026 (21).</p>
      </section>

      <section class="emotional-section">
        <h4>Conclusión</h4>
        <p>El catálogo útil hoy es más estrecho de lo que sugiere el mercado: documentación asistida con supervisión, consulta de evidencia sobre fuentes curadas, y redacción o docencia con verificación completa. Fuera de ese perímetro, la IA no está lista para decidir por nosotros. Las cinco preguntas de la Tabla 1 separan, en dos minutos, la herramienta que ayuda de la que solo se vende bien. Y si la institución evalúa adquirir un sistema, conviene exigir por escrito la población de validación, la calibración, las alertas esperadas por turno, el plan de vigilancia del desempeño y quién responde ante un error. Ninguna de esas respuestas es un secreto industrial legítimo.</p>
      </section>

    </div>

    <section class="emotional-section">

      <h4>
        Declaraciones
      </h4>

      <p><strong>Uso de inteligencia artificial:</strong> la búsqueda bibliográfica y la edición del texto se apoyaron en herramientas asistidas por IA. El autor verificó cada cifra frente a las publicaciones originales y asume la responsabilidad del contenido.</p>

      <p><strong>Conflictos de interés:</strong> el autor no tiene vínculos con los proveedores comerciales mencionados. Se desempeña como subinvestigador en SERVIMED Centro de Investigación Clínica, sin relación con los productos citados. Es desarrollador de herramientas digitales educativas no mencionadas en este texto.</p>

    </section>

    <section class="emotional-section academic-references">

      <h4>
        Referencias
      </h4>

      <p>1. Abulibdeh R, Cajas Ordóñez SA, Celi LA, Gorijavolu R, Izath N, Markussen Lunde T. 1,357 AI medical devices cleared, 3 actually tested on patient outcomes. PLOS Digit Health. 2026;5(8):e0001597. doi:10.1371/journal.pdig.0001597</p>
      <p>2. Moons KGM, Damen JAA, Kaul T, Hooft L, Andaur Navarro C, Dhiman P, et al. PROBAST+AI: an updated quality, risk of bias, and applicability assessment tool for prediction models using regression or artificial intelligence methods. BMJ. 2025;388:e082505. doi:10.1136/bmj-2024-082505</p>
      <p>3. Liu X, Cruz Rivera S, Moher D, Calvert MJ, Denniston AK; SPIRIT-AI and CONSORT-AI Working Group. Reporting guidelines for clinical trial reports for interventions involving artificial intelligence: the CONSORT-AI extension. Nat Med. 2020;26(9):1364-74. doi:10.1038/s41591-020-1034-x</p>
      <p>4. Wong A, Otles E, Donnelly JP, Krumm A, McCullough J, DeTroyer-Cooley O, et al. External validation of a widely implemented proprietary sepsis prediction model in hospitalized patients. JAMA Intern Med. 2021;181(8):1065-70. doi:10.1001/jamainternmed.2021.2626</p>
      <p>5. Gommers J, Hernström V, Josefsson V, Sartor H, Schmidt D, Hjelmgren A, et al. Interval cancer, sensitivity, and specificity comparing AI-supported mammography screening with standard double reading without AI in the MASAI study. Lancet. 2026;407(10527):505-14. doi:10.1016/S0140-6736(25)02464-X</p>
      <p>6. Han R, Acosta JN, Shakeri Z, Ioannidis JPA, Topol EJ, Rajpurkar P. Randomised controlled trials evaluating artificial intelligence in clinical practice: a scoping review. Lancet Digit Health. 2024;6(5):e367-73. doi:10.1016/S2589-7500(24)00047-5</p>
      <p>7. Ong AQC, Ang CS, Bojic I, Johnson CL, Aggour H, Ng FS, et al. Artificial intelligence in cardiovascular care: a systematic review and meta-analysis of randomised controlled trials. EClinicalMedicine. 2026;98:104123. doi:10.1016/j.eclinm.2026.104123</p>
      <p>8. Afshar M, Baumann MR, Resnik F, Hintzke J, Sullivan AG, Wills G, et al. A pragmatic randomized controlled trial of ambient artificial intelligence to improve health practitioner well-being. NEJM AI. 2025;2(12). doi:10.1056/aioa2500945</p>
      <p>9. Lukac PJ, Turner W, Vangala S, Chin AT, Khalili J, Shih YT, et al. Ambient AI scribes in clinical practice: a randomized trial. NEJM AI. 2025;2(12). doi:10.1056/aioa2501000</p>
      <p>10. Olson KD, Meeker D, Troup M, Barker TD, Nguyen VH, Manders JB, et al. Use of ambient AI scribes to reduce administrative burden and professional burnout. JAMA Netw Open. 2025;8(10):e2534976. doi:10.1001/jamanetworkopen.2025.34976</p>
      <p>11. Heidi Health. Planes de precios, coste y características de Heidi [Internet]. [Consultado 21 sep 2026]. Disponible en: https://support.heidihealth.com/es/articles/8885030-planes-de-precios-coste-y-caracteristicas-de-heidi</p>
      <p>12. Wolters Kluwer. UpToDate Expert AI: evidence-based clinical support for physicians [Internet]. 2026 [consultado 21 sep 2026]. Disponible en: https://www.wolterskluwer.com/en/solutions/uptodate/roles/physicians</p>
      <p>13. OpenEvidence. OpenEvidence: clinical decision support [aplicación móvil]. App Store; 2026 [consultado 21 sep 2026]. Disponible en: https://apps.apple.com/app/id6612007783</p>
      <p>14. OpenEvidence llegará gratis a profesionales de la salud en cerca de 100 países de ingresos bajos y medios [Internet]. Yahoo Noticias; 23 de septiembre de 2026 [consultado 24 sep 2026]. Disponible en: https://es-us.noticias.yahoo.com/openevidence-llegar%C3%A1-gratis-100-pa%C3%ADses-093909897.html</p>
      <p>15. Goh E, Gallo R, Hom J, Strong E, Weng Y, Kerman H, et al. Large language model influence on diagnostic reasoning: a randomized clinical trial. JAMA Netw Open. 2024;7(10):e2440969. doi:10.1001/jamanetworkopen.2024.40969</p>
      <p>16. Agweyu A, Mwaniki P, Musau W, Korom R, Isaaka L, Wanyama C, et al. Safety of a large language model-based clinical decision support system in African primary healthcare. Nat Health. 2026;1(6):607-18. doi:10.1038/s44360-026-00082-5</p>
      <p>17. Wolf RM, Channa R, Liu TYA, Zehra A, Bromberger L, Patel D, et al. Autonomous artificial intelligence increases screening and follow-up for diabetic retinopathy in youth: the ACCESS randomized control trial. Nat Commun. 2024;15(1):421. doi:10.1038/s41467-023-44676-z</p>
      <p>18. Congreso de la República de Colombia. Ley Estatutaria 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial n.º 48.587; 18 de octubre de 2012.</p>
      <p>19. Parlamento Europeo y Consejo de la Unión Europea. Reglamento (UE) 2024/1689, de 13 de junio de 2024, por el que se establecen normas armonizadas en materia de inteligencia artificial. Diario Oficial de la Unión Europea, serie L, 12 de julio de 2024.</p>
      <p>20. Parlamento Europeo y Consejo de la Unión Europea. Reglamento (UE) 2026/1744 (Ómnibus digital sobre inteligencia artificial), por el que se modifica el Reglamento (UE) 2024/1689. Diario Oficial de la Unión Europea, 24 de julio de 2026.</p>
      <p>21. Presidencia del Consejo de Ministros del Perú. Decreto Supremo N.º 115-2025-PCM, que aprueba el Reglamento de la Ley N.º 31814. Diario Oficial El Peruano; 9 de septiembre de 2025.</p>

    </section>

    <section class="emotional-section">
      <h4>Sobre el autor</h4>
      <p><strong>Juan Sebastián Therán León.</strong> Médico familiar y Magíster en Inteligencia Artificial en Salud. Afiliado a la Universidad de Santander (UDES), Campus Lagos del Cacique, y a SERVIMED Centro de Investigación Clínica, Bucaramanga, Colombia. ORCID: 0000-0002-4742-0403.</p>
    </section>

    <div class="emotional-footer-note">
      <span>Magazine ACMI Santander</span>
      <span>Artículo académico · Inteligencia artificial en salud</span>
    </div>

</article>
<section class="emotional-forum-section">
    <div class="emotional-forum-card">
      <span class="emotional-forum-kicker">
        Comunidad académica
      </span>

      <h3>
        Discusión académica del artículo
      </h3>

      <p>
        Comparta comentarios, preguntas o aportes relacionados con este artículo académico del Magazine ACMI Santander.
      </p>

      <div class="commentbox"></div>

    </div>

</section>
</div>
<script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
<script>
  commentBox('5704224843235328-proj');
</script>
