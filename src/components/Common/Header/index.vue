<template>
  <header class="fullX header">  
    <div class="c-m12 c-t2 c-g3 cpl">
      <logo></logo>      
    </div> 
    <div class="c-m6 c-t9 c-g6 cpl dnone-m view-t">
      <menu></menu>      
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

<style>
  .header{
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ededed;
  }
</style>