<template>
  <header class="fullX header" role="banner">  
    <div class="c-m12 c-t2 c-gg3 cpl">
      <logo></logo>      
    </div> 
    <div class="c-t10 c-gg6 cpl dnone-m view-t">
      <menu :class="['navbar-header']"></menu>
    </div>   
  </header>   
</template>

<script>
  import Logo from './Logo'
  import Menu from '../NavBar'
  export default {
    components: {
      Logo,
      Menu
    }
  }
</script>

<style lang="postcss" scoped>
  
  :root {
    @custom-media --medium-viewport (max-width: 1024px);     
  }

  .header{
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ededed;
  }

  .navbar-header {
    margin-top: 14px;
  }

  @media (--medium-viewport) {
    .navbar-header{
      float: right;
      margin-right: 20px;
    }
  }
</style>