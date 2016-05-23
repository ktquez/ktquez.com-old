<template>
  <div class="fullX">
    <section class="fullX top-page">
      <top-page class="box-center5" :title="info.title" :description="info.description"></top-page>    
    </section>    
    <separate></separate>
    <section class="box-center5">
      <div class="fullX content-page">
        <img src="../../assets/about.png" class="fullX img-about" alt="Alan Albuquerque - ktquez">
        <div class="fullX content-bio">
          <h2 class="fullX title">OLÁ, EU SOU ALAN</h2>
          
          <p class="txt">
            Entrei no mundo da internet a aproximadamente 6 anos, cursando um profissionalizante de Administrador de redes e servidores pela instituição SENAC, foi um conhecimento primordial para amar a web, onde obtive intimidade com linha de comando e protocolos como o essencial HTTP.
          </p>
          
          <p class="txt">          
            Após finalizar o curso, comecei a estudar por conta própria desenvolvimento web, suas ferramentas e tecnologias.
          </p>
          
          <p class="txt">          
            Com mais ênfase como Web Developer, me aventurei no boom das compras coletivas lançando um aplicação desenvolvida por mim, com checkout, envio email marketing, gerenciamento de leed, mídias sociais e etc. O Site ficou no ar durante um ano e meio, aprendi bastante nesse período, principalmente na lógica de negócio e na resolução de problemas críticos. =)
          </p>
          
          <p class="txt">
            De lá para cá, me dedico somente à comunidade web e trabalhos Freelancer/Remoto, sou bastante compromissado, principalmente por já ter passado pelo período de adaptação e ter desenvolvido uma disciplina no trabalho home Office, dando ainda mais produtividade.
          </p>
          
          <p class="txt">          
            Atualmente (com 28 anos) me encontro disponível para trabalho remoto utilizando as tecnologias PHP e Javascript, onde meu foco está virado com carinho nesse momento, aprendendo muito e passando o máximo possível de conhecimento para a comunidade.
          </p>            

          <h2 class="fullX title">NO QUE ESTOU FOCADO</h2>
          <ul class="fullX txt">
            <li>
              Trabalho Remoto
            </li>
            <li>
              Vue.js Projects e comunidade
            </li>
            <li>
              Laravel Projects e comunidade
            </li>
            <li>
              Javascript Vanilla
            </li>
            <li>
              Preparação para PHP ZCE
            </li>
            <li>
              Desenvolvimento de libs e plugins open no Github
            </li>
            <li>
              Criação de Screencasts e tutoriais em desenvolvimento web
            </li>
          </ul>

          <h2 class="fullX title">MINHAS HABILIDADES SÃO</h2>
          <ul class="fullX txt">
            <li>
              <a href="">PHP</a>
            </li>
            <li>
              <a href="">Laravel / Lumen</a>
            </li>            
            <li>
              <a href="">API RESTful</a>
            </li>
            <li>
              <a href="">Javascript Vanilla</a>
            </li>
            <li>
              <a href="">Vue.js</a>
            </li>
            <li>
              <a href="">Webpack e Gulp</a>
            </li>
            <li>
              <a href="">PostCSS / NextCSS</a>
            </li>  
            <li>
              <a href="">GIT</a>
            </li>
            <li>
              <a href="">Web performance</a>
            </li> 
          </ul>

          <h2 class="fullX title">CONHECIMENTO BÁSICO EM</h2>
          <ul class="fullX txt">
            <li>
              <a href="">ElasticSearch</a>
            </li>
            <li>
              <a href="">Docker</a>
            </li>
            <li>
              <a href="">NGINX</a>
            </li>
            <li>
              <a href="">MongoDB / moongose</a>
            </li>  
            <li>
              <a href="">Express / Node.js</a>
            </li>           
            <li>
              <a href="">React</a>
            </li>
            <li>
              <a href="">SEO</a>
            </li>
            <li>
              <a href="">UX / UI</a>
            </li> 
          </ul>
          

          <h2 class="fullX title">CONTATO</h2>          
          <p class="txt">
          Sou capaz de ajudá-lo nessas tecnologias, caso queira entrar em contato para batermos um papo, tirar alguma dúvida ou disposição para me contratar
          <br> Me siga no <b>Twitter:</b> <a class="link" href="https://twitter.com/ktquez" target="_blank">@ktquez</a>, no <b>Github:</b> <a class="link" href="https://github.com/ktquez" target="_blank">@ktquez</a> e/ou através do <a class="link" href="mailto:ktquez@gmail.com">ktquez@gmail.com</a>
          </p>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import TopPage from './TopPages'
  import Separate from '../Common/Separate'
  export default {
    data () {
      return {
        info: {
          title: 'BIO',
          description: 'Seja bem vindo! Saiba um pouco mais sobre'
        }
      }
    },
    components: {
      TopPage,
      Separate
    }
  }
</script>

<style lang="postcss" scoped>
  
  .content-page .title {
    margin-top: 40px;
  }
</style>