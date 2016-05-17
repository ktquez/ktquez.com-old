<template>
  <nav class="navbar">
    <ul>
      <li>
        <a v-link="'about'">SOBRE</a>
      </li>
      <li>
        <a v-link="'projects'">PROJETOS</a>
      </li>
      <li>
        <a v-link="'/'">BLOG</a>
      </li>
      <li>
        <a v-link="'lab'">LAB</a>
      </li>
      <li>
        <a v-link="'contact'">CONTATO</a>
      </li>
    </ul>
  </nav>    
</template>

<script>
  export default {}
</script>

<style scoped>
    /* style here */
</style>