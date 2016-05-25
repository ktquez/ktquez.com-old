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
      const disqusShortname = this.shortname
      setTimeout(() => {
        (() => {
          let dsq = document.createElement('script')
          dsq.type = 'text/javascript'
          dsq.async = true
          dsq.setAttribute('id', 'embed-js-disqus')
          dsq.src = 'http://' + disqusShortname + '.disqus.com/embed.js'
          document.getElementsByTagName('body')[0].appendChild(dsq)
        })()
      }, 1000)
    }
  }
</script>

<style lang="postcss">
</style>