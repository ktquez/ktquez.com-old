<template>
  <div class="fullX post" v-html="post | marked"></div>    
</template>

<script>
  import marked from 'marked'
  export default {
    props: {
      post: {
        required: true,
        type: String
      }
    },
    filters: {
      marked
    }
  }
</script>

<style lang="postcss">
  .post {
    
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
        overflow-y: auto;
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
      width: calc(100% - 10px);
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
