<template>
    <div class="home fullX">
      <short-about class="box-center5"></short-about>
      <separate></separate>
      <section class="box-center5">
        <posts-blog :posts="getPosts"></posts-blog>
      </section>
    </div>
</template>

<script>
  import ShortAbout from './ShortAbout'
  import PostsBlog from './PostsBlog'
  import Separate from '../Common/Separate'
  import { getPosts } from '../../vuex/getters'
  import { setPosts } from '../../vuex/actions'

  export default {
    vuex: {
      getters: {
        getPosts
      },
      actions: {
        setPosts
      }
    },
    route: {
      data (transition) {
        this.$http.get('static/articles/_data.json').then((response) => {
          this.setPosts(response.data)
          transition.next()
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