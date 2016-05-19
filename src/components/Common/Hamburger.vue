<template>
    <div class="hamburger" @click="active" :class="{'-active': isActive}" role="button">
      <span class="inner"></span>
    </div>    
</template>

<script>
  // utilizar o vuex para avisar do click no hamburguer
  export default {
    data () {
      return {
        isActive: false
      }
    },
    methods: {
      active () {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="postcss">
  .hamburger {
    width: 30px;
    height: 20px;
    margin-top: 26px;
    margin-left: 25px;
    cursor: pointer;
    position: relative;
    float: left;
  
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
      background-color: #ff7070;
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