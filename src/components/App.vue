<template>    
    <div class="fullX">      
      <top></top>
      <menu-mobile></menu-mobile>
      <social></social>
      <router-view
        transition="fade"
        transition-mode="out-in"></router-view>
      <foo></foo>
    </div>
    <scroll-top></scroll-top>
    <overlay zindex="9" position="absolute"></overlay>
</template>

<script>
  import Top from './Common/Header/index'
  import MenuMobile from './Common/NavMobile'
  import Social from './Common/Social'
  import Overlay from './Common/Overlay'
  import Foo from './Common/Footer/index'
  import ScrollTop from './Common/ScrollTop'

  export default {
    components: {
      Top,
      MenuMobile,
      Social,
      Foo,
      ScrollTop,
      Overlay
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/noDoubt.css";
  @import "../assets/css/fonts.css";
  
  :root {
    --bg-body: #f2f2f2;
    --font: Raleway, Calibri, 'trebuchet MS';
    --font-code: Cousine, Arial, 'trebuchet MS';
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
    font-family: var(--font-code);
    color: #666;
    background: #fff;
    border-radius: 5px;
  }

  .fade-transition {
    transition: opacity .5s ease;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
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
