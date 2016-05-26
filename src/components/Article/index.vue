<template>
  <main class="box-center5" role="main">  
    <section class="fullX">   
      <article role="article">
        <h1 class="title -post fullX tac top-page margin-section">{{ post.info.title }}</h1>
        <separate></separate>     
        <post class="post fullX" :post="post.body"></post>
        <aside role="complementary" class="fullX info-post">
          <div class="c-m12 c-t8 cpl">
            <div class="fl author">
              <author></author>              
            </div>
          </div>
          <div class="c-m12 c-t4 cpl">
            <tag v-for="tag in getTags(post.info.tags)" :item="tag"></tag>
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
  import Tag from '../Common/Tags'
  import Author from './Author'
  import Disqus from './Disqus'
  import { getPosts } from '../../vuex/getters'
  import { setPosts } from '../../vuex/actions'
  export default {
    data () {
      return {
        post: {
          info: {},
          body: ''
        },
        shotname_disqus: 'ktquez'
      }
    },
    components: {
      Separate,
      Post,
      Tag,
      Author,
      Disqus
    },
    methods: {
      getTags (tags) {
        return (tags) ? tags.split(' ') : []
      }
    },
    vuex: {
      getters: {
        getPosts
      },
      actions: {
        setPosts
      }
    },
    route: {
      activate (transition) {
        let slug = transition.to.params.slug
        const setCurrent = (posts) => {
          let current = posts.filter((item) => {
            return item.slug === slug
          })
          this.$set('post.info', current[0])
        }
        if (this.getPosts.length) {
          setCurrent(this.getPosts)
          transition.next()
          return
        }
        this.$http.get('static/articles/_data.json').then((response) => {
          this.setPosts(response.data)
          setCurrent(this.getPosts)
          transition.next()
        })
      },
      data (transition) {
        let slug = transition.to.params.slug
        this.$http.get('static/articles/' + slug + '.md').then((response) => {
          this.$set('post.body', response.data)
          transition.next()
        }).catch((response) => {
          transition.redirect('/404')
        })
      },
      waitForData: true
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