<template>
    <div class="menu-mobile abs">
      <div class="inner"></div>
      <hamburger></hamburger>
    </div>   
</template>

<script>
  // utilizar o vuex para saber quando o click no hamburger foi disparado
  import Hamburger from './Hamburger'
  export default {
    components: { Hamburger }
  }
</script>

<style lang="postcss">
    .menu-mobile {
      left: -235px;
      top: 0;
      z-index: 6;
      height: 100vh;
      width: 290px;

      &.-show {
        left: 0;
      }

      & > .inner {
        width: 235px;
        float: left;
        height: 100%;
        position: relative;
        background-color: #fafafa;
        box-shadow: 20px -1px 20px -20px color(black alpha(10%));
        visibility: hidden;
      }

      &.-show > .inner {
        visibility: visible;
      }
    }

</style>