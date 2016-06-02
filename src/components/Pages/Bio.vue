<template>
  <main class="fullX" role="main">
    <section class="fullX top-page">
      <top-page class="box-center5" :title="info.title" :description="info.description"></top-page>    
    </section>    
    <separate></separate>
    <section class="box-center5">
      <div class="fullX content-page">
        <figure>
          <img src="../../assets/about.png" class="fullX img-about" alt="Alan Albuquerque - ktquez">
          <figcaption class="fullX caption tac">Eu, ela, uma filha e dois cachorros</figcaption>          
        </figure>
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
          <ul class="fullX txt list-focused">
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
            <tag v-for="skill in skills" :item="skill"></tag> 
          </ul>

          <h2 class="fullX title">CONHECIMENTO BÁSICO EM</h2>
          <ul class="fullX txt">
            <tag v-for="skill in moreSkills" :item="skill"></tag>
          </ul>
          

          <h2 class="fullX title">CONTATO</h2>          
          <p class="txt">
          Sou capaz de ajudá-lo nessas tecnologias, caso queira entrar em contato para batermos um papo, tirar alguma dúvida ou disposição para me contratar
          <br> Me siga no <b>Twitter:</b> <a class="link" href="https://twitter.com/ktquez" target="_blank">@ktquez</a>, no <b>Github:</b> <a class="link" href="https://github.com/ktquez" target="_blank">@ktquez</a> e/ou através do <a class="link" href="mailto:ktquez@gmail.com">ktquez@gmail.com</a>
          </p>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import TopPage from './TopPages'
  import Separate from '../Common/Separate'
  import Tag from '../Common/Tags'
  import { head } from '../../plugins/head'
  export default {
    extends: head,
    data () {
      return {
        info: {
          title: 'BIO',
          description: 'Seja bem vindo! Saiba um pouco mais sobre'
        },
        skills: [
          'PHP',
          'Laravel / Lumen',
          'Redis',
          'API RESTful',
          'Javascript Vanilla',
          'Vue.js',
          'Webpack e Gulp',
          'PostCSS / NextCSS',
          'GIT',
          'Web performance',
          'Clean code'
        ],
        moreSkills: [
          'ElasticSearch',
          'Docker',
          'NGINX',
          'SVG',
          'AngularJS',
          'React',
          'SEO',
          'UX / UI'
        ]
      }
    },
    head: {
      title: 'Sobre mim',
      meta () {
        return {
          name: {
            description: 'Conheça um pouco mais sobre mim, sou FullStack Web Developer, focado em PHP e Javascript ...'
          }
        }
      },
      link () {
        return {
          canonical: {
            href: this.$http.options.root + this.$route.path + '/'
          }
        }
      }
    },
    components: {
      TopPage,
      Separate,
      Tag
    }
  }
</script>

<style lang="postcss" scoped>
  
  .content-page .title {
    margin-top: 40px;
  }

  .caption {
    color: #999;
    font-size: 12px;
    margin-top: 10px;
  }

  .list-focused {
    margin-left: 20px;
  }

</style>