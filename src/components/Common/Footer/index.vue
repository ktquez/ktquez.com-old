<template>
  <footer class="footer fullX" role="contentinfo">
    <div class="box-center6 center">
      <menu :class="['navbar-footer']"></menu>         
      <page-info :class="['info']"></page-info>               
    </div>
  </footer>
</template>

<script>
  import Menu from '../NavBar'
  import PageInfo from './PageInfo'
  export default {
    components: {
      Menu,
      PageInfo
    }
  }
</script>

<style lang="postcss">

  :root {
    @custom-media --small-viewport (max-width: 480px);     
  }

  .footer {
    margin-top: 20px;
    padding-bottom: 20px;
    padding-top: 10px;

    & > .center { border-top: 1px solid #e8e8e8; }

  }

  .navbar-footer { margin-top: 22px; }

   @media (--small-viewport) {
    .navbar-footer .item {
      background: #efefef;
      float: left;
      margin-bottom: 2px;
      padding: 20px 0;
      text-align:center;
      width: 100%;

      &:hover {
        color: #4ac6b7;
      }
    }
  }
</style>