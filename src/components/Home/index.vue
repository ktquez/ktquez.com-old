<template>
    <main class="home fullX">
      <short-about class="box-center5"></short-about>
      <separate></separate>
      <posts-blog :posts="posts"></posts-blog>
    </main>
</template>

<script>
  import ShortAbout from './ShortAbout'
  import PostsBlog from './PostsBlog'
  import Separate from '../Common/Separate'

  export default {
    data () {
      return {
        posts: []
      }
    },
    route: {
      data (transition) {
        this.$http.get('static/articles/_data.json').then((response) => {
          transition.next({
            posts: response.data
          })
        })
      },
      waitForData: true
    },
    components: {
      ShortAbout,
      PostsBlog,
      Separate
    }
  }

</script>

<style lang="postcss">
  .home {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>