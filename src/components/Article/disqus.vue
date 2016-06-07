<template>
  <div id="disqus_thread"></div> 
</template>

<script>
  export default {
    props: {
      shortname: {
        type: String,
        required: true
      }
    },
    ready () {
      if (window.DISQUS) {
        const vm = this
        window.DISQUS.reset({
          reload: true,
          config () {
            this.page.identifier = vm.$parent.$route.path
            this.page.url = vm.$el.baseURI
          }
        })
        return
      }
      const disqusShortname = this.shortname
      const body = document.getElementsByTagName('body')[0]
      setTimeout(() => {
        (() => {
          let dsq = document.createElement('script')
          dsq.type = 'text/javascript'
          dsq.async = true
          dsq.setAttribute('id', 'embed-disqus')
          dsq.src = 'http://' + disqusShortname + '.disqus.com/embed.js'
          body.appendChild(dsq)
        })()
      }, 100)
    }
  }
</script>

<style lang="postcss">
</style>