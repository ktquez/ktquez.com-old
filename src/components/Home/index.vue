<template>
    <main class="home fullX">
      <short-about class="box-center5"></short-about>
      <separate></separate>
      <posts-blog></posts-blog>
    </main>
</template>

<script>
  import ShortAbout from './ShortAbout'
  import PostsBlog from './PostsBlog'
  import Separate from '../Common/Separate'

  export default {
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