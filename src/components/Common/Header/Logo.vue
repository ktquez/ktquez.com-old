<template>
  <div class="logo">
    <img src="../../../assets/logo.png" alt="Ktquez" width="40px">
  </div>   
</template>

<script>
  export default {}
</script>

<style lang="postcss">
:root {
  --left: 30px;
}

.logo {
  margin-left: var(--left);

  & > img {
    width:100px;
  }
}
</style>