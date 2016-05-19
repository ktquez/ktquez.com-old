<template>
    <div class="overlay" :style="customStyle"></div>
</template>

<script>
  // utilizar o vuex para avisar quando for clicado no overlay
  // avisar a outros components expostos para fechar
  // e quando clicado nos itens que necessite de exibir o overlay

  export default {
    props: [ 'zindex', 'position' ],
    data () {
      return {
        customStyle: {
          zIndex: this.zindex,
          position: this.position
        }
      }
    }
  }
</script>

<style lang="postcss">
  .overlay {
    opacity: 0;
    visibility: hidden;      
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: color(white alpha(80%));      
    transition: all .5s ease-in;

    &.-show {
      opacity: 1;
      visibility: visible;
    }
  }
</style>