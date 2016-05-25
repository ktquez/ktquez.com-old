<template>
  <div class="c-m12 c-t3 c-g2 cpl box-avatar">
    <img src="../../assets/avatar.png" alt="Alan Albuquerque (ktquez)" class="avatar img-circle -medium">      
  </div>
  <div class="c-m12 c-t9 c-g10 cpl box-info-author">
    <strong class="title name">ALAN ALBUQUERQUE -</strong>
    <strong class="title nickname">KTQUEZ</strong>      
    <div class="fullX about-me">
      <p class="lspacing description">
        Freelancer web developer PHP e Javascript, autodidata, tentando escrever coisas relevantes e criando screencasts interessantes
      </p>              
    </div>    
  </div>
</template>

<script>
  export default {}
</script>

<style lang="postcss" scoped>
  :root{
    @custom-media --small-viewport (max-width: 480px);     
  }

  @media (--small-viewport) {
    .box-avatar, 
    .box-info-author { 
      margin-bottom: 10px;
      text-align: center; 
    }
  }

  .nickname {
    margin-left: 6px;
    font-size: 10px;
  }

  .description {
    padding-right: 4px;
    width:calc(100% - 4px);
    font-size: 12px;
  }
</style>