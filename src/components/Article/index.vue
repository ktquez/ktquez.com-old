<template>
  <main class="box-center5" role="main">  
    <section class="fullX">   
      <article role="article">
        <h1 class="title -post fullX tac top-page margin-section">{{ currentPost.title }}</h1>
        <separate></separate>     
        <post class="post fullX" :post="post.body"></post>
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
                <strong class="title name fl">ALAN ALBUQUERQUE -</strong>
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
  import Separate from '../Common/Separate'
  import Share from './Share'
  import Post from './Post'
  import Tag from '../Common/Tags'
  import Disqus from './Disqus'
  import {
    getPosts,
    getCurrentPost
  } from '../../vuex/getters'
  import {
    setPosts,
    setCurrentPost
  } from '../../vuex/actions'
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
        currentPost: getCurrentPost
      },
      actions: {
        setPosts,
        setCurrentPost
      }
    },
    route: {
      activate (transition) {
        let vm = this
        let slug = transition.to.params.slug
        const setCurrent = (posts) => {
          let current = posts.filter((item) => {
            return item.slug === slug
          })
          // Add full url
          current[0].link = vm.$http.options.root + vm.$route.path
          vm.setCurrentPost(current[0])
        }
        if (vm.getPosts.length) {
          setCurrent(vm.getPosts)
          transition.next()
          return
        }
        vm.$http.get('static/articles/_data.json').then((response) => {
          vm.setPosts(response.data)
          setCurrent(vm.getPosts)
          transition.next()
        })
      },
      data (transition) {
        let vm = this
        let slug = transition.to.params.slug
        vm.$http.get('static/articles/' + slug + '.md').then((response) => {
          vm.$set('post.body', response.data)
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
    margin-top: 50px;
  }

  .box-share {
    padding-top: 30px;
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-top: 1px solid var(--border-color); 
    border-bottom: 1px solid var(--border-color); 
  }

  .comments {
    margin-top: 30px;
    padding-top: 50px;
    border-top: 1px solid var(--border-color);
  }

  .author {
    margin-right: 20px;
    width: calc(100% - 20px);
    border-right: 1px solid var(--border-color);  

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
      border-bottom: 1px solid var(--border-color);      

      & .nickname,
      & .title {
        float: none;
      }
    }
  }
  
</style>