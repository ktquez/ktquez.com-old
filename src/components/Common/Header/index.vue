<template>
  <header class="fullX header" role="banner">  
    <div class="c-m12 c-t2 c-gg3 cpl">
      <a v-link="{name: 'blog'}" class="logo" >
        <logo></logo>      
      </a>
    </div> 
    <div class="c-t10 c-gg6 cpl dnone-m view-t">
      <menu :class="['navbar-header']"></menu>
    </div>   
    <button role="button" class="icon search" @click="setSearch">&#xe90c;</button>    
  </header>   
</template>

<script>
  import Logo from './Logo'
  import Menu from '../NavBar'
  import { setSearch } from '../../../vuex/actions'
  export default {
    components: {
      Logo,
      Menu
    },
    vuex: {
      actions: {
        setSearch
      }
    }
  }
</script>

<style lang="postcss" scoped>
  
  :root {
    --bg-header: #ededed;
    --color-default: #4ac6b7;
    @custom-media --medium-viewport (min-width: 640px) and (max-width: 1024px);  
  }

  .header{
    height: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: var(--bg-header);
  }

  .navbar-header {
    margin-top: 14px;
  }

  .icon.search {
    float: right;
    color: #999;
    font-size: 18px;
    right: 0;
    top: 7px;
    position: absolute;
    padding: 20px;

    &:hover {
      color: var(--color-default);
    }
  }

  @media (--medium-viewport) {
    .icon.search {
      left: 150px;
    }

    .navbar-header{
      float: right;
      margin-right: 20px;
    }
  }
</style>