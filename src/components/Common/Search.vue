<template>
  <div class="box-search" :class="{ '-open': isSearch }">
    <button type="button" role="button" class="icon close" @click="setSearch">&#xe903;</button>
    <div class="fullX box-field">
      <label for="term" class="txt fl">O que você procura?</label>
      <input type="text" id="term" class="input fl" autofocus name="term" @input="search" placeholder="pesquise aqui">        
    </div>
    <separate :style="{opacity: '.5'}"></separate>
    <div class="result fullX">
      <span class="no-results tac fullX" v-show="!results.length">
        SEM RESULTADOS
        <br>
        <strong>: (</strong>
      </span>
      <ul class="list -none" role="list">
        <li class="item fullX" v-for="result in results" role="listitem">
          <a class="link fade-fast" role="link" v-link="{ name: 'article', params: { slug: result.slug }}" @click="setSearch">
            <h3 class="title" role="heading" aria-level="3">{{ result.title }}</h3>
            <span class="desc">{{ result.description | limit '11' '...' }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Separate from './Separate'
  import { getPosts, isSearch } from '../../vuex/getters'
  import { setSearch } from '../../vuex/actions'
  export default {
    data () {
      return {
        results: []
      }
    },
    methods: {
      search (e) {
        let val = e.target.value
        if (!val) {
          this.results = []
          return
        }
        let posts = this.getPosts
        this.results = posts.filter((item) => {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) !== -1)
        })
      }
    },
    filters: {
      limit (val, limit, delimiter) {
        return val.split(' ').slice(0, limit).join(' ') + ' ' + delimiter
      }
    },
    vuex: {
      getters: {
        getPosts,
        isSearch
      },
      actions: {
        setSearch
      }
    },
    components: {
      Separate
    }
  }
</script>

<style lang="postcss" scoped>

  @import "../../assets/css/settings.css";

  .box-search {
    background-color: #fff;
    box-shadow: -15px 0 35px -10px #ddd;
    height: 100%;
    opacity: 0;
    position: fixed;
    padding: 20px;
    right: -100%;
    top: 0;
    transition: all .5s ease-in;
    width: 260px;
    z-index: 12;

    &.-open {
      opacity: 1;
      right: 0;
    }
  }

  .icon.close {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 14px;
    color: #000;
  }

  .box-field {
    margin-top: 20px;
    margin-bottom: 10px;

    & .input {
      margin-top: 10px;
    }
  }
  
  .box-field .txt, 
  .no-results {
    font-size: 11px;
    color: var(--color-text);
  }

  .result {
    margin-top: 10px;
    height: 65vh;
    overflow-x: auto;

    & .item {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px dotted #eee;

      &:last-child {
        border: none;
      }

      &:hover > .link {
        color: var(--color-second);
      }

      & > .link {
        color: var(--color-text);
      }
    }
    
    & .title {
      font-size: 18px;
    }

    & .desc {
      font-size: 12px;
      color: var(--color-text-light);
    }
  }

</style>