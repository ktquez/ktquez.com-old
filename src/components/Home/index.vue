<template>
    <div class="home fullX">
      <short-about class="box-center5"></short-about>
      <separate></separate>
      <choose-load></choose-load>
      <posts-blog></posts-blog>
    </div>
</template>

<script>
  import ShortAbout from './ShortAbout'
  import PostsBlog from './PostsBlog'
  import ChooseLoad from './ChooseLoadPosts'
  import Separate from '../Common/Separate'

  export default {
    components: {
      ShortAbout,
      PostsBlog,
      ChooseLoad,
      Separate
    }
  }

</script>

<style lang="postcss">
  .home {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .grid {
    margin: 40px 8px 0 8px;
    width: calc(100% - 16px);

    & > .item {
      margin-bottom: 20px;
    }
  }
</style>