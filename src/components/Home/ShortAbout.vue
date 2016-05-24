<template>
  <div class="tac">
    <div class="c-m12 cpl short-about">
      <div class="fullX">
        <img src="../../assets/avatar.png" alt="Alan Albuquerque (ktquez)" class="img-circle -big">      
      </div>
      <strong class="fullX title nickname">[ ktquez ]</strong>      
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
    margin-bottom: 20px;
    margin-top: 20px;

    & > .nickname {
      margin-top: 5px;
      font-size: 12px;
    }

    & > .name {
      font-size: 25px;
    }

    & > .about-me {
      margin-top: 10px;      
    }
  }
</style>