<template>    
    <div class="fullX">      
      <top></top>
      <menu-mobile></menu-mobile>
      <social></social>
      <router-view></router-view>
    </div>
    <overlay zindex="9" position="absolute"></overlay>
</template>

<script>
  import Top from './Common/Header/index'
  import MenuMobile from './Common/NavMobile'
  import Social from './Common/Social'
  import Overlay from './Common/Overlay'

  export default {
    components: {
      Top,
      MenuMobile,
      Social,
      Overlay
    }
  }
</script>

<style lang="postcss">
  @import "../assets/css/noDoubt.css";
  @import "../assets/css/fonts.css";
  
  :root {
    --bg-body: #f2f2f2;
    --font: Roboto, Calibri, Arial;
    --font-title: 'Varela Round', Calibri, Arial;
    --font-article: Merriweather, Calibri, Arial;
  }

  body {
    font-family: var(--font);
    background-color: var(--bg-body);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .lspacing {
    letter-spacing: .5px;    
  }

  .article {
    font-family: var(--font-article);
  }

  .title { 
    font-family: var(--font-title);
    font-weight: bold; 
  }

</style>
