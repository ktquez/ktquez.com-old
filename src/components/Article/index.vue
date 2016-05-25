<template>
  <main class="box-center5" role="main">  
    <section class="fullX">   
      <article role="article">
        <h1 class="title -post fullX tac top-page margin-section">Build components with Vue.js and Webpack</h1>
        <separate></separate>     
        <post class="post fullX" :post="post"></post>
        <aside role="complementary" class="fullX info-post">
          <div class="c-m12 c-t8 cpl">
            <div class="fl author">
              <author></author>              
            </div>
          </div>
          <div class="c-m12 c-t4 cpl">
            <tags v-for="tag in tags" :item="tag"></tags>            
          </div>
        </aside>
        <section class="comments">
          <disqus :shortname="shotname_disqus"></disqus>
        </section>
      </article>
    </section> 
  </main>
</template>

<script>
  import Separate from '../Common/Separate'
  import Post from './Post'
  import Tags from '../Common/Tags'
  import Author from './Author'
  import Disqus from './Disqus'
  export default {
    data () {
      return {
        post: '',
        shotname_disqus: 'ktquez',
        tags: ['php', 'vue', 'laravel', 'html', 'css3']
      }
    },
    components: {
      Separate,
      Post,
      Tags,
      Author,
      Disqus
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

<style lang="postcss" scoped>
  :root {
    --border-color: #e8e8e8;
    @custom-media --small-viewport (max-width: 480px);     
  }
  .title.-post { font-size: 45px; }
  
  .info-post {
    padding: 30px 0;
    margin: 30px 0;
    border-bottom: 1px solid var(--border-color);
    border-top: 1px solid var(--border-color);
  }

  .author {
    margin-right: 20px;
    width: calc(100% - 20px);
    border-right: 1px solid var(--border-color);    
  }
  
  @media (--small-viewport) {
    .author {
      margin-bottom: 30px;
      margin-right: 0;
      padding-bottom: 30px;      
      width: 100%;      
      border-right: none;
      border-bottom: 1px solid var(--border-color);      
    }
  }
  
</style>