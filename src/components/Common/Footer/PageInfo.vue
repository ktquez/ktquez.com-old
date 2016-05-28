<template>
  <small class="fullX tac">
    &copy; {{ year }} - Build with 
    <span class="icon heart">&#xe905;</span>
    <a class="link fade-half" target="blank" href="https://vuejs.org/" title="Vue.js - Reactive Components for Modern Web Interfaces">
      Vue.js 
    </a>
    and deployed on
    <a class="link fade-half" target="blank" href="https://surge.sh/" title="Surge - Static web publishing for Front-End Developers">
      Surge
    </a>
    </small>    
</template>

<script>
  export default {
    data () {
      return {
        year: '2016'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .info {
    font-size: 12px;
    margin-top: 24px;
    margin-bottom: 10px;
    color: #999;

    & > .heart {
      color: red;
      float: none;
      font-size: 12px;
    }

    & > .link {
      color: #333;
      font-weight: bold;
    }

    & > .link:hover {
      color: #4ac6b7;
    }
  }
</style>