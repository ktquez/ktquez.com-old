<template>
  <small class="info fullX tac">
    &copy; {{ year }} - Build with 
    <span class="heart">&hearts;</span>
    <a class="link" href="https://vuejs.org/" title="Vue.js - Reactive Components for Modern Web Interfaces">
      Vue.js
    </a>, API RESTful by 
    <a class="link" href="http://jexia.com/" title="Jexia - Build RESTful APIs without writing a single line of code">
      Jexia
    </a>
    and deployed on
    <a class="link" href="https://surge.sh/" title="Surge - Static web publishing for Front-End Developers">
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

<style lang="postcss">
  .info {
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 10px;

    & > .heart {
      color: red;
    }

    & > .link {
      color: #4ac6b7;
    }
  }
</style>