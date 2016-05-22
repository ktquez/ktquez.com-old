<template>
  <div class="tac">
    <div class="c-m12 cpl top-page">
      <strong class="fullX title">{{ title }}</strong>
      <div class="fullX description">
        <p class="box-center7 lspacing">
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
    margin-bottom: 20px;
    margin-top: 20px;

    & > .title {
      font-size: 25px;
      margin-bottom: 10px;
    }

    & > .description {
      margin-top: 10px;
      font-weight: 300;
      font-size: 14px;
      color: #666;
    }
  }
</style>