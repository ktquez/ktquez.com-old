<template>
   <div class="box-center5">
    <section class="notFound fullX tac">
      <div class="centerY fullX">
        <h2 class="title">404</h2>
        <span class="fullX">
          <b>:</b> (
          <br><br>
          DESCULPE, MAS ESSA PÁGINA NÃO EXISTE</span>
        <a class="link fullX" v-link="{name: 'blog'}">CLICK AQUI PARA ACESSAR O BLOG</a>        
      </div>
    </section>
  </div>  
</template>

<script>
  export default {}
</script>

<style lang="postcss" scoped>

  :root {
    --color-text: #444;
  }

  .notFound {
    height: 75vh;
    
    & .title {
      font-size: 120px;
      color: var(--color-text);
    }

    & .link {
      margin-top: 10px;
    }
  }
</style>