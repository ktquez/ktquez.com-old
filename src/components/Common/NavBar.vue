<template>
  <nav role="navigation">    
    <ul class="navbar list-navbar centerX fl">
      <li class="item">
        <a v-link="{ name: 'bio', activeClass: '-active'}" class="link">SOBRE</a>
      </li>
      <li class="item">
        <a v-link="{ name: 'projects', activeClass: '-active'}" class="link">PROJETOS</a>
      </li>
      <li class="item">
        <a v-link="{ name: 'blog', activeClass: '-active'}" class="link">BLOG</a>
      </li>
      <!-- <li class="item">
        <a v-link="'lab'" class="link">LAB</a>
      </li> -->
      <li class="item">
        <a v-link="{ name: 'contact', activeClass: '-active'}" class="link">CONTATO</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {}
</script>

<style lang="postcss" scoped>
  
  @import "../../assets/css/settings";

  .list-navbar > .item {
    display:inline;
    font-family: Varela Round, Calibri, Arial;
    font-size: 13px;
    letter-spacing: .5px;
    margin-right: 30px;    
  }

  .list-navbar:hover .link{
    color: #bbb;
  }

  .list-navbar .link {
    color: #666;
    transition: color .3s;
    position: relative;

    &.-active {
      color: var(--color-default); 
      
      &:before {
        left: -10px;
      }

      &:after {
        right: -10px;
      }

      &:before,
      &:after {      
        opacity: 1;          
      }
    }
    
    &:before {
      left: 5px;
      content: '[';        
    }

    &:after {
      right: 5px;
      content: ']';
    }

    &:before,
    &:after {
      color: var(--color-default);
      position: absolute;
      opacity: 0;
      top: 0;
      transition: all .5s;
    }

    &:hover {
      color: var(--color-default);

      &:hover:before {
        opacity: 1;
        left:-10px;
      }

      &:hover:after {
        opacity: 1;
        right:-10px;          
      }
    }
  }

  .list-navbar > .item:last-child {
    margin-right: 0;
  }

</style>