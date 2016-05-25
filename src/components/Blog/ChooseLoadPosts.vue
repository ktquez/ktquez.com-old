<template>
  <div class="fullX">
    <ul class="choose-load fr">
      <li class="item">
        <span class="fl txt">PAGINATION</span>
        <div class="fl custom-radio">
          <input type="radio" name="chooseLoad" @change="chooseLoad" :checked="load.pagination" value="pagination" v-model="load.pagination">
          <span class="box fade-half">&#10004;</span>
        </div>
      </li>
      <li class="item">
        <span class="fl txt">LOAD TO SCROLL</span>
        <div class="fl custom-radio">
          <input type="radio" name="chooseLoad" @change="chooseLoad" :checked="load.scroll" value="scroll" v-model="load.scroll">  
          <span class="box fade-half">&#10004;</span>        
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        load: {
          pagination: false,
          scroll: true
        }
      }
    },
    methods: {
      chooseLoad (event) {
        let val = event.target.value
        console.log(val)
      }
    }
  }
</script>

<style lang="postcss">
  .choose-load {
    margin-right: 20px;
    max-width: 150px;

    & > .item {
      margin-bottom: 15px;
      float:right;
    }

    & .txt {
      font-size: 12px;
      margin-right: 10px;
    }
  }

  .custom-radio {
    width: 8px;
    height: 8px;
    padding: 2px;
    border: 1px solid #ccc;

    & > input[type="radio"] {
      opacity: 0;
      position: absolute;
      left: 0px;
      top: 0px; 
      cursor: pointer;
      z-index: 5;
    }

    & > input[type="radio"]:checked + .box {
      opacity: 1;
    }
    
    & > .box {
      position: absolute;
      z-index: 4;
      left: 1px;
      top: -7px; 
      color: #4ac6b7;
      opacity: 0;
    }

  }
</style>