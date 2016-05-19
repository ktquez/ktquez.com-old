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
  }

  body {
    font-family: Varela Round, Calibri, Arial;
    background-color: var(--bg-body);
  }

</style>
