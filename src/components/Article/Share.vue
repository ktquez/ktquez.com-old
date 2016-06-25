<template>
  <div class="fullX tac">
    <span class="txt-invite fullX">Achou legal? Expalha por ai</span>
    <a @click="facebook" role="button" href="#" aria-label="Share on Facebook">
      <svg class="svg-icon icon-share" viewBox="0 0 20 20">
        <path class="fb fade-fast" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
      </svg>
    </a>   
    <a aria-label="Share on Twitter" role="button" 
    href="https://twitter.com/intent/tweet?url={{ currentPost.link }}&amp;text={{ currentPost.title }}&amp;via=ktquez">
      <svg class="svg-icon icon-share" viewBox="0 0 20 20">
        <path class="tw fade-fast" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
      </svg>
    </a> 
    <div id="fb-root"></div>  
  </div>
</template>

<script>
  import { getCurrentPost } from '../../vuex/getters'
  export default {
    ready () {
      /* facebook */
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '229629860755498',
          xfbml: true,
          version: 'v2.6'
        })
      }
      ((d, s, id) => {
        let js
        let fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) { return }
        js = d.createElement(s); js.id = id
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
      /* twitter */
      window.twttr = ((d, s, id) => {
        var fjs = d.getElementsByTagName(s)[0]
        var t = window.twttr || {}
        if (d.getElementById(id)) return t
        let js = d.createElement(s)
        js.id = id
        js.src = 'https://platform.twitter.com/widgets.js'
        fjs.parentNode.insertBefore(js, fjs)
        t._e = []
        t.ready = (f) => {
          t._e.push(f)
        }
        return t
      })(document, 'script', 'twitter-wjs')
    },
    vuex: {
      getters: {
        currentPost: getCurrentPost
      }
    },
    methods: {
      facebook () {
        let vm = this
        window.FB.ui({
          method: 'feed',
          display: 'popup',
          name: vm.currentPost.title,
          link: vm.currentPost.link,
          picture: vm.$http.options.root + '/static/img/posts/' + vm.currentPost.picture.img,
          caption: 'Alan Albuquerque - ktquez',
          description: vm.currentPost.description
        })
      }
    }
  }
</script>

<style lang="postcss" scoped>

  @import "../../assets/css/settings.css";

  .txt-invite {
    font-size: 12px;
  }

  .icon-share {
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-right: 10px;
    padding: 8px;

    & > .fb,
    & > .tw {
      fill: var(--color-light);
    }

    &:hover > .fb,
    &:hover > .tw {
      fill: var(--color-default);
    }
  }

</style>