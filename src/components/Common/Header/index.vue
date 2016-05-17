<template>
  <div class="full">      
    <Logo></Logo>
    <Menu></Menu>
  </div>   
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

<style>
  .full {
    width: 100%;
    float: left;
    position: relative;
  }
</style>