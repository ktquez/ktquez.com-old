<template>
  <main class="box-center5" role="main">  
    <section class="fullX">   
      <article role="article">
        <h1 class="title -post fullX tac top-page margin-section">{{ currentPost.title }}</h1>
        <separate></separate>     
        <figure class="fullX picture" v-if="currentPost.picture.show">
          <img class="fullX" :src="'/static/img/posts/' + currentPost.picture.img" alt="{{ currentPost.title }}">
          <figcaption class="fullX tac" v-show="currentPost.picture.caption">{{ currentPost.picture.caption }}</figcaption>
        </figure>
        <post class="post fullX" :post="post"></post>
        <aside role="complementary" class="fullX info-post">
          <div class="c-m12 cpl box-share">
            <share></share>
          </div>
          <div class="c-m12 c-t8 cpl">
            <div class="fl author">
              <div class="c-m12 c-t3 c-g2 cpl box-avatar">
                <img src="../../assets/avatar.png" alt="Alan Albuquerque (ktquez)" class="avatar img-circle -medium">      
              </div>
              <div class="c-m12 c-t9 c-g10 cpl box-info-author">
                <a rel="author" href="https://plus.google.com/+ktquez?rel=author" class="title name fl">ALAN ALBUQUERQUE -</a>
                <strong class="title nickname fl">KTQUEZ</strong>      
                <div class="fullX about-me">
                  <p class="lspacing description">
                    Freelancer web developer PHP e Javascript, autodidata, tentando escrever coisas relevantes e criando screencasts interessantes
                  </p>              
                </div>    
              </div>            
            </div>
          </div>
          <div class="c-m12 c-t4 cpl">
            <tag v-for="tag in getTags(currentPost.tags)" :item="tag"></tag>
          </div>
        </aside>
        <section class="comments fullX">
          <disqus :shortname="shotname_disqus"></disqus>
        </section>
      </article>
    </section> 
  </main>
</template>

<script>
  import Disqus from 'vue-disqus'
  import Separate from '../Common/Separate'
  import Share from './Share'
  import Post from './Post'
  import Tag from '../Common/Tags'
  import { getPosts, getCurrentPost, getLang } from '../../vuex/getters'
  import { setPosts, setCurrentPost } from '../../vuex/actions'
  import { head } from '../../plugins/head'
  export default {
    extends: head,
    data () {
      return {
        post: '',
        shotname_disqus: 'ktquez'
      }
    },
    head: {
      title () {
        return {
          inner: this.currentPost.title
        }
      },
      meta () {
        return {
          name: {
            description: this.currentPost.description.substr(0, 130)
          }
        }
      },
      link () {
        return {
          canonical: {
            href: this.currentPost.link + '/'
          }
        }
      }
    },
    components: {
      Separate,
      Post,
      Share,
      Tag,
      Disqus
    },
    methods: {
      getTags (tags) {
        return (tags) ? tags.split(' ') : []
      }
    },
    vuex: {
      getters: {
        getPosts,
        getLang,
        currentPost: getCurrentPost
      },
      actions: {
        setPosts,
        setCurrentPost
      }
    },
    route: {
      activate (transition) {
        const setCurrent = (posts) => {
          let current = posts.filter((post) => {
            return post.slug === transition.to.params.slug
          })
          // Add full url
          current[0].link = this.$el.baseURI
          this.setCurrentPost(current[0])
        }
        if (this.getPosts.length) {
          setCurrent(this.getPosts)
          transition.next()
          return
        }
        this.$http.get('static/articles/' + this.getLang + '/_data.json').then((response) => {
          this.setPosts(response.data.reverse())
          setCurrent(this.getPosts)
          transition.next()
        }).catch((response) => {
          transition.redirect('/404')
        })
      },
      data (transition) {
        let slug = transition.to.params.slug
        this.$http.get('static/articles/' + this.getLang + '/' + slug + '.md').then((response) => {
          transition.next({
            post: response.data
          })
        }).catch((response) => {
          transition.redirect('/404')
        })
      },
      canReuse: false,
      waitForData: true
    }
  }
</script>

<style lang="postcss" scoped>
  
  :root {
    @custom-media --small-viewport (max-width: 480px);
    --border-light: 1px solid #e8e8e8;
  }
  
  .title.-post { font-size: 45px; }
  
  .info-post { margin-top: 50px; }

  .box-share {
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-top: var(--border-light); 
    border-bottom: var(--border-light); 
  }

  .comments {
    margin-top: 30px;
    padding-top: 50px;
    border-top: var(--border-light);
  }

  .author {
    margin-right: 20px;
    width: calc(100% - 20px);
    border-right: var(--border-light);  

    & .title {
      color: #333;
    }

    & .nickname {
      margin-left: 6px;
      font-size: 10px;
      margin-top: 5px;
    }

    & .description {
      padding-right: 4px;
      width:calc(100% - 4px);
      font-size: 12px;
    }  
  }
  
  @media (--small-viewport) {
    .box-avatar, 
    .box-info-author { 
      margin-bottom: 10px;
      text-align: center; 
    }
    .author {
      margin-bottom: 30px;
      margin-right: 0;
      padding-bottom: 30px;      
      width: 100%;      
      border-right: none;
      border-bottom: var(--border-light);  

      & .nickname,
      & .title {
        float: none;
      }
    }
  }
  
</style>