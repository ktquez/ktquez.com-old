<template>
  <a href="{{ social.href }}" title="{{ social.title }}" class="icon icon-{{ social.name }}" target="blank"></a>
</template>

<script>
  export default {
    props: {
      social: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="postcss">

  .icon-twitter:before { content: '\e90f'; }
  .icon-twitter:hover { color: #89c9fa; }
  
  .icon-github:before { content: '\e904'; }
  .icon-github:hover { color: #555; }

</style>