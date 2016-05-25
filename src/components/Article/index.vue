<template>
  <main class="box-center5" role="main">  
    <section class="fullX">   
      <article role="article">
        <h1 class="title -post fullX tac top-page margin-section">Build components with Vue.js and Webpack</h1>
        <separate></separate>     
        <post class="post fullX" :post="post"></post>
        <aside role="complementary" class="info-post">
          
        </aside>
      </article>
    </section> 
  </main>
</template>

<script>
  import Separate from '../Common/Separate'
  import Post from './Post'
  export default {
    data () {
      return {
        post: ''
      }
    },
    components: {
      Separate,
      Post
    },
    route: {
      data (transition) {
        let slug = transition.to.params.slug
        this.$http.get('static/articles/' + slug + '.md').then((response) => {
          transition.next({
            post: response.data
          })
        }).catch((response) => {
          transition.redirect('/404')
        })
      }
    }
  }
</script>

<style scoped>
  .title.-post {
    font-size: 45px;
  }
</style>