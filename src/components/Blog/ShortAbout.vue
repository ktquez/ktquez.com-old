<template>
  <div class="tac">
    <div class="fullX short-about top-page">
      <div class="fullX">
        <img src="../../assets/avatar.png" alt="Alan Albuquerque (ktquez)" class="img-circle -big">      
      </div>
      <a v-link="{ name: 'bio' }" rel="me" target="_blank" class="fullX link nickname">[ ktquez ]</a>      
      <strong class="fullX title name">ALAN ALBUQUERQUE</strong>
      <div class="fullX about-me">
        <p class="box-center7 lspacing description">
          Freelancer web developer PHP e Javascript, espírito empreendedor, autodidata e amo desenvolver sobre novas tecnologias 
          <br>(Laravel e Vue.js, this is pretty cool)
        </p>              
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="postcss">
  .short-about {
    & > .nickname {
      margin-top: 5px;
      font-size: 12px;
    }

    & > .name {
      font-size: 30px;
    }

    & > .about-me {
      margin-top: 10px;      
    }
  }
</style>