<template>
    <div class="social">      
      <a v-for="social in socials" href="{{ social.href }}" title="{{ social.title }}" class="icon icon-{{ social.name }}" target="blank"></a>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        socials: [
          {
            href: 'https://twitter.com/ktquez',
            title: 'Follow me on Twitter',
            name: 'twitter'
          },
          {
            href: 'https://github.com/ktquez',
            title: 'My contributions! Here I share experiences and ideas',
            name: 'github'
          }
        ]
      }
    }
  }
</script>

<style lang="postcss">
  .social {
    position: absolute;
    top: 90px;
    right: 20px;
    width: 30px;
    height: 100px;
    z-index: 5;
    
    &.-fixed { position: fixed; }

    & > .icon {
      margin-bottom: 14px;
      float:left;
    }
  }

  .icon-twitter:before { content: '\e90f'; }
  .icon-twitter:hover { color: #89c9fa; }
  .icon-github:before { content: '\e904'; }
  .icon-github:hover { color: #555; }

</style>