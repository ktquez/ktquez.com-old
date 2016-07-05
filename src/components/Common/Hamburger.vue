<template>
    <div class="hamburger abs" @click="setStateNavMobile" :class="{'-active': getStateNavMobile, 'fixed': getStateNavMobile}" role="button">
      <span class="inner"></span>
    </div>    
</template>

<script>
  import { setStateNavMobile } from '../../vuex/actions'
  import { getStateNavMobile } from '../../vuex/getters'
  export default {
    vuex: {
      getters: {
        getStateNavMobile
      },
      actions: {
        setStateNavMobile
      }
    }
  }
</script>

<style lang="postcss" scoped>
  
  :root {
    --color-default: #4ac6b7;
  }

  .hamburger {
    width: 30px;
    height: 20px;
    z-index: 10;
    cursor: pointer;
    float: left;
    top: 25px;
    left: 20px;
  
    &.-active > .inner {
      transform: rotate(45deg);
      transition: all .5s .3s;      
    }

    &.-active > .inner:before {
      top: 0;
      transform: rotate(-90deg);
      transition: all .5s .3s;
    }

    &.-active > .inner:after {
      bottom: 0;
      opacity: 0;
      transition: all .3s;
    }

    & > .inner {
      margin-top: 10px;
    }

    &:hover > .inner, 
    &:hover > .inner:before,
    &:hover > .inner:after{
      background-color: var(--color-default);
    }
    
    & > .inner,
    & > .inner:before,
    & > .inner:after {
      position: relative;
      width: 30px;
      height: 1px;
      float:left;
      background-color: #999;
      transition: all .5s;
    }

    & > .inner:before,
    & > .inner:after {
      content: '';
    }
  
    & > .inner:before {
      top: -10px;
    }

    & > .inner:after {
      bottom: -9px;
    }
  }
</style>