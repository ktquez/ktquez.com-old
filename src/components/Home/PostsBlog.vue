<template>
  <main class="fullX" role="main">
    <item-post v-for="post in posts" :post="post"></item-post>                        
  </main>    
</template>

<script>
  import ItemPost from './ItemPost'
  export default {
    props: {
      posts: {
        type: Array,
        required: true
      }
    },
    components: {
      ItemPost
    }
  }
</script>

<style lang="postcss" scoped>
  
</style>