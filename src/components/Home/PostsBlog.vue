<template>
  <section class="box-center5">
    <main class="fullX">
      <item-post v-for="post in posts" :post="post"></item-post>                        
    </main>    
  </section>
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