<template>
  <main class="fullX main" role="main">
    <div class="fullX bg-recife">
      <div class="info-bg abs centerX">
        <span class="icon">&#xe909;</span>
        <span class="txt title">RECIFE</span>
      </div>
    </div>
    <div class="box-center5">
      <div class="fullX content-page">
        <h2 class="fullX title tac">CONTATO</h2>          
        <p class="txt tac">
        Caso queira entrar em contato para batermos um papo, tirar alguma dúvida ou disposição para me contratar. Me siga no <b>Twitter:</b> <a rel="me" class="link" href="https://twitter.com/ktquez" target="_blank">@ktquez</a>, no <b>Github:</b> <a rel="me" class="link" href="https://github.com/ktquez" target="_blank">@ktquez</a> ou me envie um email através do <a rel="contact" class="link" href="mailto:ktquez@gmail.com">ktquez@gmail.com</a>
        </p>
      </div>
    </div>    
  </main>
</template>

<script>
  export default {
    data () {
      return {
        txt: 'Hello',
        info: {
          description: 'Freelancer web developer PHP e Javascript, autodidata, tentando escrever coisas relevantes e criando screencasts interessantes',
          image: require('../../assets/recife-ktquez1.png')
        }
      }
    },
    head: {
      title: {
        inner: 'Será um prazer'
      },
      meta () {
        return [
          { n: 'description', c: this.info.description, id: 'description' },
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
    }
  }
</script>

<style lang="postcss" scoped>
  
  .bg-recife {
    background-image: url('../../assets/recife-ktquez1.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
  }

  .info-bg {
    color: #fff;
    left: 49%;
    bottom: 15px;
    
    & > .icon {
      color: #fff;
      left: 8px;
      position: relative;
    }

    & > .txt {
      float:left;
      margin-top: 3px;
      margin-left: 18px;
    }
  }

  .content-page {
    margin-bottom: 100px;
  }

</style>