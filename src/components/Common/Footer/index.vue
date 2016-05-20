<template>
  <footer class="footer fullX">
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

    & > .center {
      border-top: 1px solid #e8e8e8;
    }

  }

  .navbar-footer {
    margin-top: 22px;
  }

   @media (--small-viewport) {
    .navbar-footer .item {
      float: left;
      width: 100%;
      text-align:center;
      padding: 20px 0;
      background: #efefef;
      margin-bottom: 2px;

      &:hover {
        color: #4ac6b7;
      }
    }
  }

  .info {
    margin-top: 24px;
    margin-bottom: 10px;
  }

</style>