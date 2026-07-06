---
layout: post
title: "Medicina Interna. Desde los orígenes a los desafíos de futuro"
date: 2026-04-24
author: Reynaldo Badillo A. Médico Internista-Reumatólogo. Profesor de Medicina UIS.
categories: magazine
subcategory: opinion
cover: /img/Sir William Osler.png
---

<style>

/* OCULTAR FORO ANTIGUO DEL LAYOUT POST */
.post-discussion,
.post-forum,
.post-comments,
.old-forum,
#old-forum{
  display:none !important;
}


.mi-book-article{
  position:relative;
  animation:miBookFadeIn .9s ease both;
}

@keyframes miBookFadeIn{
  from{
    opacity:0;
    transform:translateY(18px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.mi-book-article::before{
  content:"";
  display:block;
  width:128px;
  height:7px;
  border-radius:999px;
  margin:0 auto 28px;
  background:linear-gradient(90deg, #2a9c52, #143f7d, #c89b3c);
}

.mi-book-label{
  display:flex;
  justify-content:center;
  margin-bottom:22px;
}

.mi-book-label span{
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

.mi-book-paper{
  position:relative;
  max-width:920px;
  margin:0 auto;
  padding:58px 66px;
  border-radius:18px;
  background:
    linear-gradient(90deg, rgba(20,63,125,.035) 0 1px, transparent 1px 100%),
    linear-gradient(180deg, #fffdf8, #ffffff 25%, #fffdf8);
  background-size:32px 100%, 100% 100%;
  border:1px solid rgba(20,63,125,.12);
  box-shadow:
    0 24px 60px rgba(8,40,79,.15),
    inset 0 0 0 1px rgba(255,255,255,.72);
  overflow:hidden;
}

.mi-book-paper::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:9px;
  height:100%;
  background:linear-gradient(180deg, #2a9c52, #143f7d, #c89b3c);
}

.mi-book-paper::after{
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

.mi-book-title{
  font-family:'Montserrat', sans-serif;
  color:#143f7d;
  font-size:clamp(30px,3.6vw,46px);
  line-height:1.1;
  font-weight:900;
  letter-spacing:-.045em;
  text-align:center;
  margin:0 0 14px;
}

.mi-book-author{
  text-align:center;
  color:#5b6d82;
  font-family:'Montserrat', sans-serif;
  font-size:14px;
  font-weight:800;
  margin:0 0 34px;
}

.mi-book-separator{
  width:90px;
  height:4px;
  border-radius:999px;
  margin:0 auto 38px;
  background:linear-gradient(90deg, #2a9c52, #c89b3c);
}

.mi-book-text{
  position:relative;
  z-index:2;
  color:#263447;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:20.5px;
  line-height:2.02;
  text-align:justify;
  hyphens:auto;
}

.mi-book-text p{
  margin:0 0 24px;
}

.mi-book-text p:first-of-type::first-letter{
  float:left;
  font-family:'Montserrat', sans-serif;
  font-size:5.3rem;
  line-height:.82;
  font-weight:900;
  color:#143f7d;
  padding:10px 12px 0 0;
}

.mi-osler-frame{
  float:right;
  width:255px;
  margin:8px 0 20px 28px;
  padding:12px;
  border-radius:22px;
  background:white;
  border:1px solid rgba(20,63,125,.12);
  box-shadow:0 18px 42px rgba(8,40,79,.14);
}

.mi-osler-frame img{
  width:100%;
  border-radius:16px;
  display:block;
}

.mi-osler-caption{
  display:block;
  margin-top:10px;
  color:#5b6d82;
  font-family:'Montserrat', sans-serif;
  font-size:12px;
  font-weight:800;
  line-height:1.45;
  text-align:center;
}

.mi-quote-band{
  margin:36px 0;
  padding:26px 30px;
  border-radius:26px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.14), transparent 34%),
    linear-gradient(135deg, rgba(8,40,79,.98), rgba(20,63,125,.92));
  color:white;
  box-shadow:0 18px 44px rgba(8,40,79,.18);
  position:relative;
  overflow:hidden;
}

.mi-quote-band::after{
  content:"";
  position:absolute;
  right:-70px;
  bottom:-90px;
  width:190px;
  height:190px;
  border-radius:50%;
  background:rgba(255,255,255,.10);
}

.mi-quote-band strong{
  position:relative;
  z-index:2;
  display:block;
  color:white;
  font-family:'Montserrat', sans-serif;
  font-size:23px;
  line-height:1.28;
  margin-bottom:8px;
}

.mi-quote-band span{
  position:relative;
  z-index:2;
  display:block;
  color:#eaf3ff;
  font-family:'Lato', sans-serif;
  font-size:16px;
  line-height:1.75;
}

.mi-retos-frame{
  position:relative;
  z-index:2;
  margin:42px auto 0;
  max-width:600px;
  padding:14px;
  border-radius:24px;
  background:white;
  border:1px solid rgba(20,63,125,.12);
  box-shadow:0 18px 44px rgba(8,40,79,.14);
}

.mi-retos-frame img{
  width:100%;
  border-radius:16px;
  display:block;
}

.mi-retos-caption{
  display:block;
  margin-top:12px;
  color:#5b6d82;
  font-family:'Montserrat', sans-serif;
  font-size:13px;
  font-weight:800;
  line-height:1.45;
  text-align:center;
}

.mi-book-footer-note{
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

.mi-book-footer-note span:first-child{
  color:#143f7d;
}

.mi-book-footer-note span:last-child{
  color:#2a9c52;
}


/* FORO */

.mi-forum-section{
  max-width:920px;
  margin:34px auto 0;
  position:relative;
  animation:miBookFadeIn .9s ease both;
}

.mi-forum-card{
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

.mi-forum-card::before{
  content:"";
  position:absolute;
  inset:0 0 auto 0;
  height:7px;
  background:linear-gradient(90deg, #2a9c52, #143f7d, #c89b3c);
}

.mi-forum-kicker{
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

.mi-forum-card h3{
  font-family:'Montserrat', sans-serif;
  color:#143f7d;
  font-size:clamp(26px,3vw,36px);
  line-height:1.12;
  font-weight:900;
  letter-spacing:-.04em;
  margin:0 0 14px;
}

.mi-forum-card p{
  color:#5b6d82;
  font-size:17px;
  line-height:1.8;
  margin:0 0 24px;
}

.mi-forum-card .commentbox{
  width:100%;
}


@media(max-width:760px){

  .mi-book-paper{
    padding:42px 28px;
    border-radius:16px;
  }

  .mi-book-text{
    font-size:18px;
    line-height:1.9;
    text-align:left;
  }

  .mi-book-text p:first-of-type::first-letter{
    font-size:4.2rem;
  }

  .mi-osler-frame{
    float:none;
    width:100%;
    max-width:300px;
    margin:24px auto;
  }

  .mi-book-footer-note{
    flex-direction:column;
    align-items:flex-start;
  }

  .mi-forum-section{
    margin-top:28px;
  }

  .mi-forum-card{
    padding:26px;
    border-radius:24px;
  }

}

</style>

<div class="mi-book-article">

  <div class="mi-book-label">
    <span>Opinión médica</span>
  </div>

  <article class="mi-book-paper">

    <h2 class="mi-book-title">
      Medicina Interna. Desde los orígenes a los desafíos de futuro
    </h2>

    <p class="mi-book-author">
      Reynaldo Badillo A. Médico Internista-Reumatólogo. Profesor de Medicina UIS. · Magazine ACMI Santander · 24/04/2026
    </p>

    <div class="mi-book-separator"></div>

    <div class="mi-book-text">

      <p>La Medicina Interna es una especialidad médica dedicada a la atención integral del adulto enfermo; con principios humanísticos y éticos; conociendo en profundidad los procesos intrínsecos de las enfermedades; orientada al diagnóstico y tratamiento no quirúrgico de los padecimientos que afectan preferentemente a los órganos internos; también, a la promoción de la salud y prevención de la enfermedad.</p>

      <p>Pasaron milenios desde la época de Hipócrates y Galeno, considerados pioneros en el enfoque holístico del paciente y el uso de la observación clínica; hasta la acumulación gradual durante siglos, de numerosos conocimientos en anatomía, fisiología, patología, histología, bioquímica, farmacología, bacteriología, técnicas de laboratorio e imágenes, etc., para la formalización de la Medicina Interna como especialidad.</p>

      <p>Durante los siglos XVIII y XIX. se desarrolla la medicina moderna; siendo la medicina francesa la más importante de Europa de esta época, con significativos desarrollos de la doctrina anatomo-clínica, mas observacional que experimental. Esta entró en decadencia, relacionada con el hecho de que no investigaba las causas de las enfermedades.</p>

      <p>La corriente principal del desarrollo de la moderna medicina se fue trasladando gradualmente a Alemania, donde la mirada se centró en desentrañar los misterios de las enfermedades, dependiendo de los avances en las ciencias médicas y biológicas. El razonamiento clínico fundamentado en los mecanismos intrínsecos de las enfermedades, fue perfilando una nueva orientación en la medicina, la Medicina Interna.</p>

      <p>El término de “Medicina Interna” tuvo su origen en Alemania alrededor de 1880, cuando se desarrolló el 1er. Congreso de Medicina Interna en Wiesbaden, se publicaron diversos textos y revistas sobre esta especialización y se conformó la Sociedad Alemana de Medicina Interna en 1882; que definía al internista de la época, como: “Investigador, conocedor de estudios de laboratorio; de bacteriología, fisiología y patología; dedicados a la asistencia médica, al estudio de la enfermedad y de la persona, caracterizados por sus destrezas diagnósticas”.</p>

      <div class="mi-osler-frame">
        <img src="{{ site.baseurl }}/img/Sir%20William%20Osler.png" alt="Sir William Osler">
        <span class="mi-osler-caption">
          Sir William Osler
        </span>
      </div>

      <p>La figura que llevó al máximo esplendor esta concepción en Norteamérica, enfatizando predominantemente el perfil clínico del médico al lado de la cama del paciente, fue Sir William Osler. En 1897 dictó una conferencia titulada "Medicina interna como una vocación", en la que planteó que esta especialidad comprendía un vasto campo diferente de la cirugía, la obstetricia y la ginecología, y cuyos cultores serían denominados médicos clínicos. Por su contribución al desarrollo de la especialidad y creador del primer programa formal de residencia, es considerado el padre de la Medicina Interna moderna.</p>

      <div class="mi-quote-band">
        <strong>
          Medicina Interna como eje integrador
        </strong>
        <span>
          Una especialidad centrada en la comprensión profunda de la enfermedad, el razonamiento clínico y la atención integral del adulto.
        </span>
      </div>

      <p>En el siglo XXI, la Medicina Interna se ha consolidado como una especialidad médica esencial centrada en la atención multidisciplinaria de adultos en todo el espectro de la salud, desde la prevención de enfermedad y promoción de la salud, hasta el manejo de pacientes con múltiples patologías de órganos y sistemas, muchas de ellas complejas; en cualquier situación de gravedad, complejidad o nivel de atención; ambulatoria, hospitalaria, UCI y urgencias; además actúan como médicos guía de estos pacientes; también son asesores y referentes de médicos generales y otros especialistas.</p>

      <p>Destacan los internistas en su evolución permanente por la formación continua y la adaptación a nuevos paradigmas médicos; por la capacidad para integrar oportunamente los avances tecno-científicos como la inteligencia artificial, la genómica y la medicina personalizada; en conocer las mejores herramientas de diagnóstico y de tratamiento; en comprender el envejecimiento de la población y la cronicidad de las enfermedades; en advertir los cambios en los perfiles de morbilidad y el aumento de las enfermedades crónicas no transmisibles e infecciones.</p>

    </div>

    <div class="mi-retos-frame">
      <img src="{{ site.baseurl }}/img/Retos%20y%20desafios%20de%20la%20medicina%20interna%20.png" alt="Retos y desafíos de la medicina interna">
      <span class="mi-retos-caption">
        Retos y desafíos de la medicina interna
      </span>
    </div>

    <div class="mi-book-footer-note">
      <span>Magazine ACMI Santander</span>
      <span>Opinión · Medicina Interna</span>
    </div>

  </article>

  <section class="mi-forum-section">

    <div class="mi-forum-card">

      <span class="mi-forum-kicker">
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
