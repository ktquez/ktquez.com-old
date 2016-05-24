<template>
  <div class="tac">
    <div class="fullX top-page">
      <strong class="fullX title">{{ title }}</strong>
      <div class="fullX">
        <p class="box-center7 description lspacing">
          {{ description }}
        </p>              
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String
      }
    }
  }
</script>

<style lang="postcss">
  .top-page {
    & > .title {
      font-size: 25px;
      margin-bottom: 10px;
    }

    & .description {
      margin-top: 10px;
      font-size: 13px;
    }
  }
</style>