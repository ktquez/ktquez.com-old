<template>    
  <div>
    <div class="fullX">      
      <top></top>
      <div class="social">
        <icon-social v-for="social in socials" :social="social"></icon-social>
      </div>
      <router-view transition="load" transition-mode="out-in"></router-view>
      <div class="loading"></div>
      <foo></foo>
    </div>
    <search></search>
    <scroll-top></scroll-top>
    <hamburger></hamburger>
    <menu-mobile></menu-mobile>  
  </div>
</template>

<script>
  import Top from './Common/Header/index'
  import IconSocial from './Common/Social'
  import Foo from './Common/Footer/index'
  import MenuMobile from './Common/NavMobile'
  import Search from './Common/Search'
  import Hamburger from './Common/Hamburger'
  import ScrollTop from './Common/ScrollTop'
  import store from '../vuex/store'

  export default {
    data () {
      return {
        socials: [
          {
            href: 'https://twitter.com/ktquez',
            title: 'Follow me on Twitter',
            name: 'twitter'
          },
          {
            href: 'https://github.com/ktquez',
            title: 'My contributions! Here I share experiences and ideas',
            name: 'github'
          },
          {
            href: 'https://www.behance.net/alanktquez',
            title: 'I"m no expert, but I do cool stuff',
            name: 'behance'
          }
        ]
      }
    },
    replace: false,
    components: {
      Top,
      Hamburger,
      IconSocial,
      Foo,
      ScrollTop,
      MenuMobile,
      Search
    },
    store
  }
</script>

<style lang="postcss">

  @import "~normalize.css";
  @import "~highlight.js/styles/hybrid.css";
  @import "~../assets/css/fonts.css";
  @import "../assets/css/noDoubt.css";

  
  body {
    font-family: Raleway, Calibri, 'trebuchet MS';
    background-color: #f2f2f2;
    overflow-x: hidden;
    overflow-y: auto;
  }

  code {
    color: #f2f2f2;
    background: #333;
    border-radius: 4px;
  }

  .load-transition {
    transition: opacity .5s;    
    opacity: 1;
  }

  .load-transition.load-leave {
    transition-delay: .2s;
  }

  .input {
    border: 1px solid #efefef;
    padding: 10px;
    width: calc(100% - 20px);
  }

  .loading {
    opacity: 0;
    position: fixed;
    top: 70px;
    left: 0;
    background: #eaeaea;
    height: 10px;
    width: 100%;
    z-index: 12;
  }

  .load-leave + .loading {
    width: 100%;
    animation: loading .8s linear;
  }

  @keyframes loading {
    50% { 
      top: 70px;
      height: 100%;
      opacity: 1;      
    }
    to {
      height: 10px;
      top: 100%;      
    }
  }

  .load-enter, .load-leave {
    opacity: 0;
    visibility: hidden;
  }

  .link {
    color: #4ac6b7;
    position: relative;
  
    &.-line:after {
      content: '';
      border-bottom: 2px solid #4ac6b7;
      padding: 5px 20px 0;
      float: left;
      left: 0;
      bottom: 0;
    }

  }

  .lspacing {
    letter-spacing: .5px;    
  }

  .picture {
    margin: 0;

    & figcaption {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: 12px;
      color: #999;
    }
  }

  .article {
    font-family: Raleway, Calibri, 'trebuchet MS';
  }

  .title { 
    font-family: 'Varela Round', Calibri, Arial;
    font-weight: bold; 
  }

  .description {
    font-weight: 300;
    font-size: 14px;
    color: #999;
  }

  .top-page {
    margin-bottom: 20px;
    margin-top: 20px;
    padding-top: 20px;
    & > .description {
      font-family: Raleway, Calibri, 'trebuchet MS';
    }
  }

  .content-page{
    margin-top: 50px;

    & .title {
      color: #444;
      font-size: 22px;
    }
  }

  .content-page .txt, 
  .article .txt {
    line-height: 1.5em;
    font-size: 17px;
    letter-spacing: .5px;    
    color: #777;
    float: left;
  }

  .content-page .txt{
    margin-top: 20px;
  }

  .margin-section {
    margin-top: 50px;
  }

  .social {
    position: fixed;
    top: 90px;
    right: 10px;
    width: 30px;
    height: 100px;
    z-index: 5;
    
    &.-fixed { position: fixed; }

    & > .icon {
      margin-bottom: 14px;
      float:left;
    }
  }

</style>
