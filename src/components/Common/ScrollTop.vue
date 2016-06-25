<template>
  <span class="back-scrolltop icon" @click="fire">&#xe908;</span>
</template>

<script>
  export default {
    ready () {
      // Display arrow back to top
      const el = document.querySelector('.back-scrolltop')
      if (el.classList !== undefined) {
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 400) {
            el.classList.add('-show')
            return
          }
          el.classList.remove('-show')
        }, false)
      }
    },
    methods: {
      fire (e) {
        let el = e.target
        if (el.classList) {
          el.classList.add('-fire')
        }

        // IE
        if (!window.requestAnimationFrame) {
          window.scrollTo(0, 0)
          return
        }

        function animate () {
          let progress = window.scrollY - 100
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

<style lang="postcss" scoped>

  @import "../../assets/css/settings";

  .back-scrolltop {
    border-radius: 50%;
    background: color(white alpha(50%));
    box-shadow: 10px 0 5px -5px #ccc;
    bottom: 100px;
    cursor: pointer;
    color: #4ac6b7;    
    display: none;
    position: fixed;
    padding: 10px;
    right: 50px;
    transform: rotate(90deg);
    z-index: 9;
    
    &.-fire {
      animation: fire 1s linear infinite;
    }

    &.-show {
      display: block;
    }
  }

  @keyframes fire {
    from { box-shadow: 20px 0 5px -10px var(--color-default); }
    40% { box-shadow: 15px 0 5px -10px color(var(--color-default) blackness(30%)); }
    60% { box-shadow: 20px 0 5px -10px var(--color-default); }
    80% { box-shadow: 15px 0 5px -10px color(var(--color-default) blackness(30%)); }
    to { box-shadow: 20px 0 5px -10px var(--color-default); }
  }
</style>