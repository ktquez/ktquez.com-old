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
          <figcaption class="fullX caption tac">♫♫ Eu, ela, uma filha e dois cachorros...</figcaption>          
        </figure>
        <div class="fullX content-bio">
          <h2 class="fullX title">OLÁ, EU SOU ALAN</h2>
          
          <p class="txt">
            Sou um autodidata de carteirinha, buscava conhecimento desde a época da internet discada (onde só podíamos usar na madrugada). A aproximadamente 10 anos iniciei como suporte de redes e servidores, foi um conhecimento primordial para me levar a conhecer a web e me apaixonar por ela. (I love HTTP).
          </p>
          
          <p class="txt">          
            A facilidade em ser autodidata é puder ter a liberdade e a facilidade de aprender rapidamente uma nova tecnologia, me dando a oportunidade de criar incríveis sites e aplicações web.
          </p>
          
          <p class="txt">          
            Desenvolvo para web a 6 anos, já empreendi em sites de compra coletiva, classificados no ramo de festas e até mesmo em redes sociais para um público com um estilo de vida Paleo.
          </p>
          
          <p class="txt">          
            Venho trabalhando remotamente a 2 anos em diversos projetos como Freelancer, utilizando com maior habilidade PHP (Laravel/Lumen) e javascript (Vue.js e Vanilla), contribuindo ativamente na comunidade 
            <a class="link" href="https://www.facebook.com/groups/vuejsbr/" target="_blank" title="Vue.js Brasil">Vue Brasil</a> e 
            <a class="link" href="https://vue-europe.org/" target="_blank" title="Vue.js Europe">Vue Europe</a>, também disponibilizando projetos no 
            <a class="link" href="https://github.com/ktquez" title="Minhas contribuíções no github" target="_blank">Github</a> e no início de um projeto pessoal de passar conhecimento através de cursos em vídeo, treinamentos e palestras através do 
            <a class="link" href="https://www.youtube.com/ktquez" title="Meu canal no Youtube" target="_blank">meu canal</a>.
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
          Caso queira entrar em contato para batermos um papo, tomar um café, tirar alguma dúvida ou convite para algum projeto incrível.
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
  export default {
    data () {
      return {
        info: {
          title: 'BIO',
          description: 'Conheça um pouco mais sobre mim, sou FullStack Web Developer, focado em PHP e Javascript ...',
          image: require('../../assets/about.png')
        },
        skills: [
          'PHP',
          'Laravel / Lumen',
          'Redis',
          'API RESTful',
          'Javascript Vanilla',
          'Vue.js',
          'Webpack',
          'PostCSS',
          'GIT',
          'SEO',
          'Web performance',
          'Clean code',
          'Docker',
          'NGINX'
        ],
        moreSkills: [
          'SVG',
          'Angular JS',
          'Web prototyping',
          'Mobile development',
          'Adobe XD',
          'UX / UI'
        ]
      }
    },
    head: {
      title () {
        return {
          inner: this.info.title
        }
      },
      meta () {
        return [
          { n: 'description', id: 'description', c: this.info.description },
          // Facebook
          { p: 'og:type', c: 'website' },
          { p: 'og:title', c: document.title },
          { p: 'og:description', c: this.info.description },
          { p: 'og:image', c: this.info.image },
          { p: 'og:site_name', c: 'Alan Albuquerque - Fullstack Web Developer' },
          { p: 'og:locale', c: 'pt_BR' },
          // Twitter
          { n: 'twitter:site', c: '@ktquez' },
          { n: 'twitter:creator', c: '@ktquez' },
          { n: 'twitter:title', c: document.title },
          { n: 'twitter:description', c: this.info.description },
          { p: 'twitter:image', c: this.info.image },
          // Google
          { ip: 'name', c: document.title },
          { ip: 'description', c: this.info.description },
          { ip: 'image', c: this.info.image }
        ]
      },
      link () {
        return [
          { r: 'canonical', h: this.$el.baseURI + '/', id: 'canonical' }
        ]
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

  :root {
    --color-text-light: #999;
  }

  .content-page .title {
    margin-top: 40px;
  }

  .caption {
    color: var(--color-text-light);
    font-size: 12px;
    margin-top: 10px;
  }

  .list-focused {
    margin-left: 20px;
  }

</style>