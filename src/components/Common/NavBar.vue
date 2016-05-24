<template>
  <nav role="navigation">    
    <ul class="navbar list-navbar centerX fl">
      <li class="item">
        <a v-link="{ name: 'bio'}" class="link">SOBRE</a>
      </li>
      <li class="item">
        <a v-link="{ name: 'projects'}" class="link">PROJETOS</a>
      </li>
      <li class="item">
        <a v-link="{ name: 'home'}" class="link">BLOG</a>
      </li>
      <!-- <li class="item">
        <a v-link="'lab'" class="link">LAB</a>
      </li> -->
      <li class="item">
        <a v-link="{ name: 'contact'}" class="link">CONTATO</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="postcss" scoped>

  .list-navbar > .item {
    display:inline;
    font-family: Varela Round, Calibri, Arial;
    font-size: 13px;
    letter-spacing: .5px;
    margin-right: 30px;

    & > .link {
      color: #666;
      transition: color .3s;

      &:hover {
        color: #4ac6b7;
      }
    }
  }

  .list-navbar > .item:last-child {
    margin-right: 0;
  }
  
</style>