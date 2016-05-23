<template>
  <div class="fullX">
    <section class="fullX top-page">
      <top-page class="box-center5" :title="info.title" :description="info.description"></top-page>    
    </section>    
    <separate></separate>
    <section class="box-center5">
      <div class="fullX content-page">
        <h2 class="fullX title">OPEN SOURCE</h2>
      </div>
    </section>
  </div>
</template>

<script>
  import TopPage from './TopPages'
  import Separate from '../Common/Separate'
  export default {
    data () {
      return {
        info: {
          title: 'PROJETOS',
          description: 'Onde desenvolvo e participo'
        }
      }
    },
    components: {
      TopPage,
      Separate
    }
  }
</script>

<style lang="postcss" scoped>
  .content-page {

  }
</style>