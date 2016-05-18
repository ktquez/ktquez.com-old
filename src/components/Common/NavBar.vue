<template>
  <nav class="c-m6 cpl">
    <ul class="navbar centerX fl">
      <li class="item">
        <a v-link="'about'" class="link">SOBRE</a>
      </li>
      <li class="item">
        <a v-link="'projects'" class="link">PROJETOS</a>
      </li>
      <li class="item">
        <a v-link="'/'" class="link">BLOG</a>
      </li>
      <li class="item">
        <a v-link="'lab'" class="link">LAB</a>
      </li>
      <li class="item">
        <a v-link="'contact'" class="link">CONTATO</a>
      </li>
    </ul>
  </nav>    
</template>

<script>
  export default {}
</script>

<style lang="postcss">
  .navbar {
    margin-top:14px;
  }

  .item {
    display:inline;
    font-family: Varela Round, Calibri, Arial;
    font-size: 13px;
    letter-spacing: .5px;
    margin-right: 30px;

    & > .link {
      color: #666;

      &:hover {
        color: #4AC6B7;
      }
    }
  }
</style>