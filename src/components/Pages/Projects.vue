<template>
  <main class="fullX" role="main">
    <section class="fullX top-page">
      <top-page class="box-center5" :title="info.title" :description="info.description"></top-page>    
    </section>    
    <separate></separate>
    <section class="box-center5">
      <div class="fullX content-page">
        <div class="fullX margin-section">          
          <h2 class="fullX title">OPEN SOURCE</h2>
          <ul class="fullX txt list">
            <li class="item">
              <a class="link" title="Form validation in Javascript Vanilla, without dependencies and multiple languages" target="_blank" href="http://ktquez.github.io/Inspect/">
                <b>Inspect form</b>
              </a>
              <p class="description">
                Form validation in Javascript Vanilla, without dependencies and multiple languages. &lt; 3kb gzipped
              </p>
            </li>
            <li class="item">
              <a class="link" title="Cool and powerful effect to select fields. Javascript vanilla" target="_blank" href="http://ktquez.github.io/pickout/">
                <b>Pickout</b>
              </a>
              <p class="description">
                Cool and powerful effect to select fields. Javascript vanilla and ~2kb gzipped
              </p>
            </li>
             <li class="item">
              <a class="link" title="Manager the meta information of the head tag, a simple and easy way" target="_blank" href="https://github.com/ktquez/vue-head">
                <b>Vue-head</b>
              </a>
              <p class="description">
                Manager the meta information of the head tag, a simple and easy way
              </p>
            </li>
            <li class="item">
              <a class="link" title="Tema Wordpress Ktquez" target="_blank" href="https://github.com/ktquez/wp-theme-ktquez">
                <b>wp-theme-ktquez</b>
              </a>
              <p class="description">
                Tema Wordpress Ktquez
              </p>
            </li>
            <li class="item">
              <a class="link" title="Uma quase vídeo documentação em PT-BR da linguagem web mais usada no mundo (PHP)" target="_blank" href="https://github.com/video-php">
                <b>videophp.net (coming soon)</b>
              </a>
              <p class="description">
                Plataforma de séries em vídeos sobre a linguagem de programação mais utilizada na web
              </p>
            </li>
          </ul>
        </div>
        <div class="fullX margin-section">
          <h2 class="fullX title">WEBSITES E APLICAÇÕES</h2>  
          <ul class="fullX txt list">
            <li class="item">
              <a class="link" title="Não sou especialista na área, mas faço uns layouts legais" target="_blank" href="https://www.behance.net/alanktquez">
                <b>Behance (Portifólio)</b>
              </a>
              <p class="description">
                Layouts e desenvolvimento que faço para alguns projetos.
              </p>
            </li>
          </ul>        
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import TopPage from './TopPages'
  import Separate from '../Common/Separate'
  export default {
    data () {
      return {
        info: {
          title: 'PROJETOS',
          description: 'Desenvolvendo e participando de projetos abertos, passando conhecimento, aprendendo e contribuindo para a web ser ainda mais impressionante',
          image: require('../../assets/avatar.png')
        }
      }
    },
    head: {
      title: {
        inner: 'Contribuição, sempre'
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
      Separate
    }
  }
</script>

<style lang="postcss" scoped>

  :root {
    --color-default: #4ac6b7;
  }

  .list > .item{
    padding: 20px 0;
    width: 100%;
  }

  .list > .item:not(:last-child){
    border-bottom: var(--border-default);
  }

  .margin-section {
    margin-bottom: 80px;
  }
</style>