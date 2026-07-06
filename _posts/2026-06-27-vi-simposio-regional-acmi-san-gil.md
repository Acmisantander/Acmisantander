---
layout: default
title: "San Gil fue sede del VI Simposio Regional ACMI Santander 2026"
date: 2026-06-27
author: "Sergio Gómez. Residente de medicina interna"
categories: magazine
subcategory: noticias
excerpt: "ACMI Santander realizó el VI Simposio Regional ACMI San Gil Santander 2026, un espacio de educación médica continua, integración académica y homenaje institucional."
---

<style>

:root{
  --sg-azul:#143f7d;
  --sg-verde:#2a9c52;
  --sg-dorado:#c89b3c;
  --sg-fondo:#f5f7fb;
  --sg-texto:#243244;
  --sg-suave:#5b6d82;
  --sg-borde:rgba(20,63,125,.12);
  --sg-sombra:0 24px 64px rgba(8,40,79,.14);
}

.sg-news-page{
  min-height:100vh;
  padding:72px 22px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.10), transparent 32%),
    radial-gradient(circle at top right, rgba(20,63,125,.12), transparent 34%),
    linear-gradient(180deg, #f5f7fb, #ffffff);
}

.sg-news-page *{
  box-sizing:border-box;
}

.sg-news-card{
  width:100%;
  max-width:960px;
  margin:0 auto;
  background:#ffffff;
  border:1px solid var(--sg-borde);
  border-radius:32px;
  box-shadow:var(--sg-sombra);
  overflow:hidden;
  position:relative;
  animation:sgNewsIn .8s ease both;
}

@keyframes sgNewsIn{
  from{
    opacity:0;
    transform:translateY(18px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

.sg-news-card::before{
  content:"";
  position:absolute;
  inset:0 0 auto 0;
  height:8px;
  background:linear-gradient(90deg, var(--sg-verde), var(--sg-azul), var(--sg-dorado));
}

.sg-news-header{
  padding:46px 46px 30px;
  text-align:center;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.10), transparent 36%),
    radial-gradient(circle at bottom right, rgba(20,63,125,.08), transparent 36%),
    #ffffff;
  border-bottom:1px solid rgba(20,63,125,.08);
}

.sg-news-badge{
  display:inline-flex;
  padding:9px 16px;
  border-radius:999px;
  background:#eef4fb;
  color:var(--sg-azul);
  border:1px solid #dbe7f5;
  font-family:'Montserrat', sans-serif;
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.06em;
  margin-bottom:18px;
}

.sg-news-header h1{
  font-family:'Montserrat', sans-serif;
  color:var(--sg-azul);
  font-size:clamp(32px,4vw,52px);
  line-height:1.06;
  font-weight:900;
  letter-spacing:-.055em;
  margin:0 0 16px;
}

.sg-news-subtitle{
  max-width:760px;
  margin:0 auto 18px;
  color:var(--sg-suave);
  font-size:18px;
  line-height:1.75;
}

.sg-news-meta{
  color:#64748b;
  font-family:'Montserrat', sans-serif;
  font-size:13px;
  font-weight:800;
  line-height:1.6;
}

.sg-news-body{
  padding:40px 46px 46px;
}

.sg-news-lead{
  margin:0 0 30px;
  padding:22px 24px;
  border-radius:24px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.10), transparent 34%),
    #f8fafc;
  border:1px solid rgba(20,63,125,.08);
  color:#334155;
  font-family:Georgia, 'Times New Roman', serif;
  font-size:20px;
  line-height:1.85;
}

.sg-news-text{
  color:var(--sg-texto);
  font-family:Georgia, 'Times New Roman', serif;
  font-size:20px;
  line-height:1.95;
  text-align:justify;
}

.sg-news-text p{
  margin:0 0 24px;
}

.sg-news-text p:first-of-type::first-letter{
  float:left;
  font-family:'Montserrat', sans-serif;
  font-size:5rem;
  line-height:.82;
  font-weight:900;
  color:var(--sg-azul);
  padding:10px 12px 0 0;
}

.sg-news-text strong{
  color:var(--sg-azul);
  font-weight:900;
}

.sg-news-highlight{
  margin:32px 0;
  padding:28px 30px;
  border-radius:26px;
  background:
    radial-gradient(circle at top left, rgba(42,156,82,.14), transparent 34%),
    linear-gradient(135deg, rgba(8,40,79,.98), rgba(20,63,125,.92));
  color:white;
  box-shadow:0 18px 44px rgba(8,40,79,.18);
}

.sg-news-highlight strong{
  display:block;
  color:white;
  font-family:'Montserrat', sans-serif;
  font-size:23px;
  line-height:1.3;
  margin-bottom:8px;
}

.sg-news-highlight span{
  display:block;
  color:#eaf3ff;
  font-family:'Lato', sans-serif;
  font-size:16px;
  line-height:1.75;
}

.sg-news-actions{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  margin-top:34px;
  padding-top:28px;
  border-top:1px solid rgba(20,63,125,.10);
}

.sg-news-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  padding:13px 22px;
  border-radius:14px;
  border:0;
  text-decoration:none;
  font-family:'Montserrat', sans-serif;
  font-weight:900;
  cursor:pointer;
  transition:.25s ease;
  box-shadow:0 10px 22px rgba(8,40,79,.10);
}

.sg-news-btn-primary{
  background:linear-gradient(135deg, var(--sg-verde), #35b862);
  color:white;
}

.sg-news-btn-primary:hover{
  color:white;
  transform:translateY(-3px);
  box-shadow:0 18px 34px rgba(42,156,82,.22);
}

.sg-news-btn-light{
  background:#eef4fb;
  color:var(--sg-azul);
}

.sg-news-btn-light:hover{
  background:#dbe7f5;
  color:var(--sg-azul);
  transform:translateY(-3px);
}

.sg-news-footer{
  margin-top:30px;
  padding-top:22px;
  border-top:1px solid rgba(20,63,125,.10);
  display:flex;
  justify-content:space-between;
  gap:16px;
  flex-wrap:wrap;
  color:var(--sg-suave);
  font-family:'Montserrat', sans-serif;
  font-size:13px;
  font-weight:800;
}

.sg-news-footer span:first-child{
  color:var(--sg-azul);
}

.sg-news-footer span:last-child{
  color:var(--sg-verde);
}


.sg-forum-section{
  margin-top:34px;
  padding-top:28px;
  border-top:1px solid rgba(20,63,125,.10);
}

.sg-forum-card{
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

.sg-forum-card::before{
  content:"";
  position:absolute;
  inset:0 0 auto 0;
  height:7px;
  background:linear-gradient(90deg, var(--sg-verde), var(--sg-azul), var(--sg-dorado));
}

.sg-forum-kicker{
  display:inline-flex;
  padding:9px 15px;
  border-radius:999px;
  background:#eef4fb;
  color:var(--sg-azul);
  border:1px solid #dbe7f5;
  font-family:'Montserrat', sans-serif;
  font-weight:900;
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:.06em;
  margin-bottom:14px;
}

.sg-forum-card h3{
  font-family:'Montserrat', sans-serif;
  color:var(--sg-azul);
  font-size:clamp(26px,3vw,36px);
  line-height:1.12;
  font-weight:900;
  letter-spacing:-.04em;
  margin:0 0 14px;
}

.sg-forum-card p{
  color:var(--sg-suave);
  font-size:17px;
  line-height:1.8;
  margin:0 0 24px;
}

.sg-forum-card .commentbox{
  width:100%;
}

@media(max-width:760px){

  .sg-news-page{
    padding:42px 16px;
  }

  .sg-news-card{
    border-radius:24px;
  }

  .sg-news-header,
  .sg-news-body{
    padding-left:24px;
    padding-right:24px;
  }

  .sg-news-text{
    font-size:18px;
    line-height:1.9;
    text-align:left;
  }

  .sg-news-text p:first-of-type::first-letter{
    font-size:4.1rem;
  }

  .sg-news-actions{
    flex-direction:column;
  }

  .sg-news-btn{
    width:100%;
  }

}

</style>

<div class="sg-news-page">

  <main class="sg-news-card">

    <header class="sg-news-header">

      <span class="sg-news-badge">
        Noticia institucional
      </span>

      <h1>
        San Gil fue sede del VI Simposio Regional ACMI Santander 2026
      </h1>

      <p class="sg-news-subtitle">
        La jornada académica reunió a médicos, residentes, docentes y profesionales de la salud en torno a la educación médica continua y al fortalecimiento de la medicina interna regional.
      </p>

      <div class="sg-news-meta">
        Sergio Gómez. Residente de medicina interna · 27 de junio de 2026 · Magazine ACMI Santander
      </div>

    </header>

    <section class="sg-news-body">

      <p class="sg-news-lead">
        ACMI Santander desarrolló el <strong>VI Simposio Regional ACMI San Gil Santander 2026</strong>, un espacio académico orientado a la actualización médica, la integración profesional y el reconocimiento institucional en el corazón de Santander.
      </p>

      <div class="sg-news-text">

        <p>Los días <strong>26 y 27 de junio de 2026</strong>, el <strong>Hotel Mundo Guarigua de San Gil, Santander</strong>, fue escenario del VI Simposio Regional ACMI, evento que convocó a médicos internistas, residentes, docentes, profesionales de la salud y participantes interesados en fortalecer la educación médica continua en la región.</p>

        <p>El encuentro se consolidó como un espacio de intercambio académico y de integración entre generaciones de médicos, con actividades orientadas a la actualización clínica, la discusión científica y la construcción de comunidad alrededor de la medicina interna.</p>

        <div class="sg-news-highlight">
          <strong>
            San Gil fue punto de encuentro para la medicina interna regional.
          </strong>
          <span>
            El simposio integró formación académica, participación institucional y memoria del capítulo Santander, en un escenario de alto valor científico y humano.
          </span>
        </div>

        <p>Además de su componente académico, el evento tuvo un sentido institucional especial al incluir un <strong>homenaje al Dr. Franklin Quiroz</strong>, resaltando su legado y aporte a la medicina interna y al desarrollo académico de la región.</p>

        <p>El repositorio del evento reúne el material gráfico oficial, afiches, fotografías, videos y recursos académicos asociados al simposio. La galería fotográfica y audiovisual permite conservar la memoria visual de las actividades, los encuentros médicos y los momentos destacados vividos durante esta jornada.</p>

        <p>Con esta actividad, ACMI Santander reafirma su compromiso con la educación médica continua, la formación de talento humano en salud y la consolidación de espacios académicos que fortalecen la práctica clínica y el vínculo entre los profesionales de la medicina interna en el nororiente colombiano.</p>

      </div>

      <div class="sg-news-actions">

        <a class="sg-news-btn sg-news-btn-primary" href="{{ site.baseurl }}/repositorio-eventos/#afiches">
          Ver repositorio del evento
        </a>

        <a class="sg-news-btn sg-news-btn-light" href="{{ site.baseurl }}/repositorio-eventos/fotos-y-videos.html">
          Ver fotos y videos
        </a>

        <a class="sg-news-btn sg-news-btn-light" href="{{ site.baseurl }}/magazine/">
          Volver al Magazine
        </a>

      </div>


      <section class="sg-forum-section">

        <div class="sg-forum-card">

          <span class="sg-forum-kicker">
            Comunidad académica
          </span>

          <h3>
            Discusión académica de la noticia
          </h3>

          <p>
            Comparta comentarios, preguntas o aportes relacionados con esta noticia del Magazine ACMI Santander.
          </p>

          <div class="commentbox"></div>

        </div>

      </section>

      <div class="sg-news-footer">
        <span>Magazine ACMI Santander</span>
        <span>Noticia · VI Simposio Regional ACMI</span>
      </div>

    </section>

  </main>

</div>


<script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
<script>
  commentBox('5704224843235328-proj');
</script>

