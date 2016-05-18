<template>
  <header class="fullX header">      
    <logo></logo>
    <menu></menu>
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

<style>
  .header{
    height: 50px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
</style>