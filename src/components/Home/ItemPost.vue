<template>
  <a class="box-item-post fullX" href="#">
    <img :src="post.img" alt="#" class="img-post">
    <div class="info-item-post fade-half">
      <h2 class="title-post fl title"> {{ post.title }} </h2>      
    </div>
  </a>    
  <div class="effect-page-post"></div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="postcss">
  .box-item-post {
    background-color: #ccc;
    margin: 0 10px;
    width: calc(100% - 20px);
    overflow: hidden;
    color: #fff;

    & > .img-post {
      width: 100%;
      float: left;
    } 

    &:hover > .info-item-post {
      bottom: 20px;      
    }
  }

  .info-item-post{
    position: absolute;
    bottom: 10px;
    left: 0;
    margin: 0 10px;
    padding: 20px 10px;
    background-color: color(black alpha(50%));
    width: calc(100% - 40px);

    & > .title-post {
      text-transform: uppercase;
    }
  }
</style>