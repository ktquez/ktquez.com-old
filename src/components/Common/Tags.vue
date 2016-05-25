<template>
  <span class="tag">{{ item }}</span>
</template>

<script>
  export default {
    props: {
      item: {
        type: String
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .tag {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 6px 12px 5px;
    float: left;
    font-size: 12px;
    text-transform: uppercase;
    border: 1px solid #4AC6B7;
    border-radius: 350px;
    color: #4AC6B7;
  }
</style>