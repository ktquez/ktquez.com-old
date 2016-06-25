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

<style lang="postcss"></style>