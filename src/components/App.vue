<template>    
    <Top></Top>
    <!-- menu mobile | absolute -->
    <!-- social media | absolute -->
    <router-view></router-view>
</template>

<script>
  import Top from './Common/Header/index'

  export default {
    components: { Top }
  }
</script>

<style></style>
