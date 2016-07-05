<template>
  <article class="fullX article" role="article">
    <a v-link="{ name: 'article', params: { slug: post.slug }}" title="{{ post.title }}">
      <h2 class="fullX title-post title">
        {{ post.title }}      
      </h2>      
    </a>
    <small class="fullX info-article title">Postado em <time datetime="{{ post.date }}">{{ post.date | date }}</time> by <a class="link" href="https://twitter.com/ktquez" target="_blank">@ktquez</a></small>
    <div class="fullX picture" v-if="post.picture.show">
      <img class="fullX" :src="imgPost" alt="{{ post.title }}">
    </div>
    <p class="fullX lspacing txt description">
      {{ post.description }}
    </p>
    <a class="link see-more fade-half" v-link="{ name: 'article', params: { slug: post.slug }}" title="{{ post.title }}">LER MAIS</a>
  </article>    
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        imgPost: '/static/img/posts/' + this.post.picture.img
      }
    },
    filters: {
      date (value) {
        let dt = new Date(value)
        let fixMonth = dt.getMonth() + 1
        let month = fixMonth < 10 ? '0' + fixMonth : fixMonth
        return `${dt.getDate()}/${month}/${dt.getFullYear()}`
      }
    }
  }
</script>

<style lang="postcss" scoped>

  :root {
    --color-default: #4ac6b7;
  }
  
  .article {
    margin: 50px 0;
  }

  .title-post.title {
    font-size: 32px;
    color: #333;
  }

  .info-article {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #bbb;
    font-weight: 300;
  }

  .description {
    color: #999;
    text-align: left;
  }

  .see-more {
    border: 1px solid var(--color-default);
    padding: 8px 12px 7px;
    border-radius: 60px;
    float:left;
    margin-top: 20px;
    font-size: 12px;

    &:hover {
      background-color: var(--color-default);
      color: #fff;
    }
  }
</style>