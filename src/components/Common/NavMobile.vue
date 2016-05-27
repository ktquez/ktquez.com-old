<template>
  <div class="overlay" :class="{'-open': getStateNavMobile}">
    <nav class="box-center5 tac">
      <ul class="nav-mobile">
        <li>
          <span class="subinfo">ARTIGOS E DICAS</span>
          <a class="title fade-fast" v-link="{name: 'blog'}" @click="setStateNavMobile">
            BLOG
          </a>
        </li>
        <li>
          <span class="subinfo">JOBS E EXPERIÊNCIAS</span>
          <a class="title fade-fast" v-link="{name: 'projects'}" @click="setStateNavMobile">
            PROJETOS
          </a>
        </li>
        <li>
          <span class="subinfo">SERÁ UM PRAZER</span>
          <a class="title fade-fast" v-link="{name: 'contact'}" @click="setStateNavMobile">
            CONTATO
          </a>
        </li>
        <li>
          <span class="subinfo">BIO</span>
          <a class="title fade-fast" v-link="{name: 'bio'}" @click="setStateNavMobile">
            SOBRE
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import { setStateNavMobile } from '../../vuex/actions'
  import { getStateNavMobile } from '../../vuex/getters'
  export default {
    ready () {
      let el = document.createElement('span')
      if (el.style.animationName === undefined) {
        document.querySelector('.nav-mobile').style.opacity = 1
      }
    },
    vuex: {
      getters: {
        getStateNavMobile
      },
      actions: {
        setStateNavMobile
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .overlay {
    background-color: color(white alpha(90%));      
    height: 100vh;
    opacity: 0;
    position: fixed;
    right: 0;
    visibility: hidden;      
    top: 0;
    width: 100%;
    z-index: 8;
    
    & .nav-mobile {
      list-style: none;
      margin-top: 10%;
      margin-top: 12vh;
      opacity: .3;
      top: 0;
      
      & .subinfo {
        float: left;
        width: 100%;
        font-size: 14px;
        color: #999;
        margin-top: 30px;
      }

      & .title {
        color: #666;
        font-size: 50px;

        &:hover {
          color: #4ac6b7;
        }
      }
    }

    &.-open {
      visibility: visible;
      opacity: 1;

      & .nav-mobile {
        animation: animenu .7s forwards ease-in-out;
        animation-direction: alternate;
      }
    }

    &.-no-animation .nav-mobile {
      opacity: 1;
    }
  }

  @keyframes animenu {
    from { transform: scale(0, 0); }
    40% { transform: scale(1.3, 1.3); }
    80% { transform: scale(.8, .8); }
    to { 
      transform: scale(1, 1); 
      opacity: 1;
    }
  }
</style>