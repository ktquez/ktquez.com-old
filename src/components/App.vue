<template>    
  <div>
    <div class="fullX">      
      <top></top>
      <social></social>
      <router-view transition="load" transition-mode="out-in"></router-view>
      <div class="loading"></div>
      <foo></foo>
    </div>
    <scroll-top></scroll-top>
    <hamburger></hamburger>
    <menu-mobile></menu-mobile>   
  </div>
</template>

<script>
  import Top from './Common/Header/index'
  import Social from './Common/Social'
  import MenuMobile from './Common/NavMobile'
  import Foo from './Common/Footer/index'
  import Hamburger from './Common/Hamburger'
  import ScrollTop from './Common/ScrollTop'
  import store from '../vuex/store'

  export default {
    components: {
      Top,
      Hamburger,
      Social,
      Foo,
      ScrollTop,
      MenuMobile
    },
    store
  }
</script>

<style lang="postcss">
  @import "../assets/css/noDoubt.css";
  @import "../assets/css/fonts.css";
  
  :root {
    --bg-body: #f2f2f2;
    --font: Raleway, Calibri, 'trebuchet MS';
    --font-title: 'Varela Round', Calibri, Arial;
    --link: #4ac6b7;
  }

  body {
    font-family: var(--font);
    background-color: var(--bg-body);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  code {
    color: #777;
    background: #fdfdfd;
    border-radius: 4px;
  }

  .load-transition {
    transition: opacity .5s;    
    opacity: 1;
  }

  .load-transition.load-leave {
    transition-delay: .2s;
  }

  .loading {
    opacity: 0;
    position: fixed;
    top: 70px;
    left: 0;
    background: #eaeaea;
    height: 10px;
    width: 100%;
    z-index: 12;
  }

  .load-leave + .loading {
    width: 100%;
    animation: loading .8s linear;
  }

  @keyframes loading {
    50% { 
      top: 70px;
      height: 100%;
      opacity: 1;      
    }
    to {
      height: 10px;
      top: 100%;      
    }
  }

  .load-enter, .load-leave {
    opacity: 0;
    visibility: hidden;
  }

  .link {
    color: var(--link);
  }

  .lspacing {
    letter-spacing: .5px;    
  }

  .article {
    font-family: var(--font);
  }

  .title { 
    font-family: var(--font-title);
    font-weight: bold; 
  }

  .description {
    font-weight: 300;
    font-size: 14px;
    color: #999;
  }

  .top-page {
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 20px;
    & > .description {
      font-family: var(--font-article);
    }
  }

  .content-page{
    margin-top: 50px;

    & .title {
      color: #444;
      font-size: 22px;
    }
  }

  .content-page .txt, 
  .article .txt {
    margin-top: 20px;
    line-height: 1.5em;
    font-size: 17px;
    letter-spacing: .5px;    
    color: #777;
    float: left;
  }

  .margin-section {
    margin-top: 50px;
  }

</style>
