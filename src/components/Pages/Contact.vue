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
  import { head } from '../../plugins/head'
  export default {
    extends: head,
    head: {
      title: {
        inner: 'Será um prazer'
      },
      link () {
        return {
          canonical: {
            href: this.$el.baseURI + '/'
          }
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  
  @import '../../assets/css/settings';

  .bg-recife {
    background-image: var(--bg-contact);
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