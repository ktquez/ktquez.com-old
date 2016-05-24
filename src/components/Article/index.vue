<template>
  <main class="box-center5" role="main">  
    <section class="fullX">   
      <article role="article">
        <h1 class="title -post fullX tac top-page margin-section">Build components with Vue.js and Webpack</h1>
        <separate></separate>     
        <div class="post fullX" v-html="post | marked"></div>
        <aside role="complementary">
          
        </aside>
      </article>
    </section> 
  </main>
</template>

<script>
  import marked from 'marked'
  import Separate from '../Common/Separate'
  export default {
    data () {
      return {
        post: ''
      }
    },
    filters: {
      marked
    },
    components: {
      Separate
    },
    route: {
      data (transition) {
        let slug = transition.to.params.slug
        this.$http.get('static/articles/' + slug + '.md').then((response) => {
          transition.next({
            post: response.data
          })
        })
      }
    }
  }
</script>

<style lang="postcss">
  .title.-post {
    font-size: 45px;
  }

  .post {
    color: #777;

    & h1, 
    & h2, 
    & h3, 
    & h4, 
    & h5, 
    & h6 {
      color: #000;
      font-weight: bold;
    }

    & p {
      margin: 20px 0 10px;
      line-height: 1.5em;
      font-size: 17px;
      letter-spacing: .5px;    
      width: 100%;
      float: left;
      
      /* code inline */
      & code {
        font-size: 14px;
        padding: 6px;        
      }
    }  

    & pre {
      width: 100%;
      margin: 30px 0;

      & code {
        padding: 20px;
        margin: 10px 0;
        width: calc(100% - 40px);
        float:left;
        font-size: 14px;
      }
    }      

    & table {
      
      & tr, 
      & td,
      & th {
        border: 1px solid #ddd;
        padding: 10px;
      }

      & th {
        background: #fff;
      }

      & tr:nth-child(even) {        
        background: #fff;
      }

      & td {
      }
    }

    & ol, 
    & ul, 
    & li {
      float: left;
      margin-left: 10px;
      width: 100%;
    }

    & strong {
      color: #333;
    }

    & blockquote p{
      padding-left: 20px;
      border-left: 4px solid #ccc;
      width: calc(100% - 20px);
    }
  }
</style>