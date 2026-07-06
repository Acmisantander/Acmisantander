---
layout: default
title: "La carga emocional: el diagnóstico que no aparece en la historia clínica"
date: 2026-05-05
author: "Dr. Jaime Alberto Gómez Ayala, Md FACP, Msc, Internista"
affiliation: "Md FACP, Msc, Internista"
categories: magazine
subcategory: opinion
excerpt: "La carga emocional y su impacto clínico en pacientes sin hallazgos orgánicos claros."
---

<style>

/* 
  Este post usa layout: default para evitar que _layouts/post.html
  inserte el foro antiguo. Se deja únicamente el foro nuevo.
*/
.post-discussion,
.post-forum,
.post-comments,
.old-forum,
#old-forum,
.article-discussion,
.magazine-discussion{
  display:none !important;
}


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
    <span>Columna de opinión</span>
  </div>

  <article class="emotional-paper">

    <h2 class="emotional-title">
      La carga emocional: el diagnóstico que no aparece en la historia clínica
    </h2>

    <p class="emotional-subtitle">
      La carga emocional y su impacto clínico en pacientes sin hallazgos orgánicos claros.
    </p>

    <p class="emotional-author">
      Dr. Jaime Alberto Gómez Ayala, Md FACP, Msc, Internista · Magazine ACMI Santander · 05/05/2026
    </p>

    <div class="emotional-separator"></div>

    <div class="emotional-text">

      <p>No era su primera consulta. Hombre de 45 años, sin antecedentes de relevancia, con múltiples estudios recientes: laboratorio completo, perfil tiroideo, estudios de imagen. Todo dentro de rangos normales. Sin embargo, persistía un cuadro de fatiga, insomnio, dificultad para concentrarse y sensación constante de agotamiento.</p>

      <p>“Doctor, algo no está bien”, insistía.</p>

      <p>En la práctica de la medicina interna, este tipo de paciente es más frecuente de lo que reconocemos abiertamente. No encaja en un diagnóstico orgánico claro, pero tampoco puede considerarse sano. Se mueve en una zona gris entre la normalidad bioquímica y el malestar clínico persistente.</p>

      <p>En muchos de estos casos, el factor subyacente es la carga emocional.</p>

      <p>El estrés crónico, la ansiedad, la sobrecarga laboral y las tensiones psicosociales tienen una expresión fisiológica bien documentada. La activación sostenida del eje hipotálamo-hipófisis-adrenal, la disfunción autonómica y los cambios inflamatorios subclínicos contribuyen a la aparición de síntomas somáticos reales: fatiga, dolor, trastornos del sueño y alteraciones cognitivas.</p>

      <p>Lejos de ser una explicación “blanda”, se trata de un fenómeno biológicamente plausible y clínicamente relevante.</p>

      <p>Sin embargo, nuestro modelo de atención continúa privilegiando lo objetivable. Aquello que no se mide ni se codifica tiende a invisibilizarse. Esto genera dos respuestas igualmente problemáticas: la sobreutilización de estudios diagnósticos en busca de una causa orgánica o la minimización del síntoma cuando los resultados son normales.</p>

      <p>Ambas aproximaciones fallan en abordar el problema central.</p>

      <div class="emotional-pullquote">
        <strong>
          No todo lo clínicamente relevante aparece en el laboratorio.
        </strong>
        <span>
          La carga emocional puede expresarse como síntoma físico, modificar la percepción de salud y condicionar la evolución clínica.
        </span>
      </div>

      <p>La evidencia muestra que los factores psicosociales influyen significativamente en la evolución de enfermedades crónicas, en la adherencia terapéutica y en la utilización de servicios de salud. Pacientes con alta carga emocional presentan mayor riesgo de consultas repetidas, hospitalizaciones y peor percepción de su estado de salud.</p>

      <p>A pesar de ello, el tiempo destinado a explorar estas dimensiones en consulta es limitado. La formación médica tradicional, centrada en el modelo biomédico, tampoco siempre proporciona herramientas suficientes para su abordaje.</p>

      <p>Reconocer la carga emocional implica ampliar el alcance del acto clínico. No se trata de reemplazar el enfoque biológico, sino de integrarlo con una comprensión más completa del paciente.</p>

      <p>Esto requiere habilidades específicas: escucha activa, formulación de preguntas abiertas, validación del malestar y capacidad de establecer conexiones entre síntomas físicos y factores emocionales sin invalidar la experiencia del paciente.</p>

      <p>Además, abre la puerta a intervenciones no farmacológicas con evidencia creciente: terapia cognitivo-conductual, técnicas de manejo del estrés, intervenciones en estilo de vida y, en casos seleccionados, apoyo farmacológico dirigido.</p>

      <p>Nombrar el problema puede ser, en sí mismo, terapéutico.</p>

      <p>En el caso descrito, la exploración dirigida permitió identificar un contexto de sobrecarga laboral sostenida, alteraciones del sueño y síntomas ansiosos no reconocidos previamente. La intervención no consistió en añadir un nuevo medicamento, sino en estructurar un plan de manejo integral que incluyó educación, estrategias conductuales y apoyo psicológico.</p>

      <p>El resultado no fue inmediato, pero fue significativo.</p>

      <p>En una medicina cada vez más orientada a la tecnología, la carga emocional sigue siendo uno de los determinantes más influyentes —y menos documentados— del proceso salud-enfermedad.</p>

      <p>No todo lo que afecta al paciente se refleja en un examen de laboratorio.</p>

      <p>Y, sin embargo, pocas cosas son tan reales en la práctica clínica como aquello que no aparece en la historia</p>

    </div>

    <section class="emotional-section">

      <h4>
        Referencias
      </h4>

      <p>George Engel. The need for a new medical model: a challenge for biomedicine. Science. 1977.</p>

      <p>Bruce McEwen. Protective and damaging effects of stress mediators. New England Journal of Medicine. 1998.</p>

    </section>

    <section class="emotional-section">

      <h4>
        Sobre el autor
      </h4>

      <p>Jaime Alberto Gómez Ayala, Md FACP, , Msc, Internista, Docente Unab, Expresidente ACMI Santander 2016-2020, Socio Fundador Fundación Clínica, miembro Junta directiva ACMI Santander 2026.</p>

    </section>

    <div class="emotional-footer-note">
      <span>Magazine ACMI Santander</span>
      <span>Opinión · Medicina Interna</span>
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
        Comparta comentarios, preguntas o aportes relacionados con esta columna de opinión del Magazine ACMI Santander.
      </p>

      <div class="commentbox"></div>

    </div>

  </section>

</div>

<script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
<script>
  commentBox('5704224843235328-proj');
</script>
