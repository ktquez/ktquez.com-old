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
              <a class="link" title="Tema Wordpress Ktquez" target="_blank" href="https://github.com/ktquez/wp-theme-ktquez">
                <b>wp-theme-ktquez</b>
              </a>
              <p class="description">
                Tema Wordpress Ktquez
              </p>
            </li>
            <li class="item">
              <a class="link" title="Uma quase vídeo documentação em PT-BR da linguagem web mais usada no mundo (PHP)" target="_blank" href="https://github.com/ktquez/videophp.net">
                <b>videophp.net (coming soon)</b>
              </a>
              <p class="description">
                Uma quase vídeo documentação em PT-BR da linguagem web mais usada no mundo (PHP)
              </p>
            </li>
          </ul>
        </div>
        <div class="fullX margin-section">
          <h2 class="fullX title">WEBSITES E APLICAÇÕES</h2>  
          <ul class="fullX txt list">
            <li class="item">
              <p class="description">
                EM BREVE
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
  import { head } from '../../plugins/head'
  export default {
    extends: head,
    data () {
      return {
        info: {
          title: 'PROJETOS',
          description: 'Onde desenvolvo e participo'
        }
      }
    },
    head: {
      title: {
        inner: 'Contribuição, sempre'
      },
      meta () {
        return {
          name: {
            description: 'Desenvolvendo e participando de projetos abertos, passando conhecimento, aprendendo e contribuindo para a web ser ainda mais impressionante'
          }
        }
      },
      link () {
        return {
          canonical: {
            href: this.$el.baseURI + '/'
          }
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
  .list > .item{
    padding: 20px 0;
    width: 100%;
  }

  .list > .item:not(:last-child){
    border-bottom: 1px solid #ddd;
  }

  .margin-section {
    margin-bottom: 80px;
  }
</style>