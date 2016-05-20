<template>
  <button class="back-scrolltop" @click="fire">
    <span class="icon arrow-top">&#xe907;</span>
  </button>
</template>

<script>
  export default {
    methods: {
      fire (e) {
        let el = e.target.offsetParent || e.target
        if (el.classList) {
          el.classList.add('-fire')
        }

        function animate () {
          let progress = window.scrollY - 30
          window.scrollTo(0, progress)

          // End animation
          if (progress > 0) {
            window.requestAnimationFrame(animate)
            return
          }
          el.classList.remove('-fire')
        }

        window.requestAnimationFrame(animate)
      }
    }
  }
</script>

<style lang="postcss">
  .back-scrolltop {
    right: 50px;
    bottom: 100px;
    position: fixed;
    z-index: 9;
    
    border-radius: 50%;
    background: color(white alpha(50%));
    box-shadow: 0 10px 5px -5px #ccc;
    
    padding: 10px;

    & > .arrow-top {
      transform: rotate(90deg);
      color: #4ac6b7;
    }
    
    &.-fire {
      animation: fire 1s linear infinite;
    }

  }

  @keyframes fire {
    from { box-shadow: 0 20px 5px -10px #4ac6b7; }
    40% { box-shadow: 0 15px 5px -10px color(#4ac6b7 blackness(30%)); }
    60% { box-shadow: 0 20px 5px -10px #4ac6b7; }
    80% { box-shadow: 0 15px 5px -10px color(#4ac6b7 blackness(30%)); }
    to { box-shadow: 0 20px 5px -10px #4ac6b7; }
  }
</style>