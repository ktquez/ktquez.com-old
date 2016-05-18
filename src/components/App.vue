<template>    
    <div class="fullX">      
      <top></top>
      <menu-mobile></menu-mobile>
      <social></social>
      <router-view></router-view>
    </div>
</template>

<script>
  import Top from './Common/Header/index'
  import MenuMobile from './Common/NavMobile'
  import Social from './Common/Social'

  export default {
    components: {
      Top,
      MenuMobile,
      Social
    }
  }
</script>

<style lang="postcss">
  @import "../assets/noDoubt.min.css";
  @import "../assets/fonts.css";
  
  :root {
    --bg-body: #f2f2f2;
  }

  body {
    font-family: Merriweather, Calibri, Arial;
    background-color: var(--bg-body);
  }

  h1, h2, h3 {
    font-family: Varela Round, Calibri, Arial;
  }

</style>
