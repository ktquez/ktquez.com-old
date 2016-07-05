<template>
  <div class="fullX">
    <div class="centerX separate">
      <span class="line"></span>
      <span class="circle"></span>
      <span class="line"></span>
    </div>    
  </div>
</template>

<script>
  export default {}
</script>

<style lang="postcss">
  
  .separate {
    float:left;
    margin-top: 20px;
    margin-bottom: 20px;

    & > .line {
      float: left;
      width: 50px;
      height: 1px;
      background-color: color(#ccc a(60%));
      margin-top: 7px;  
      margin-right: 20px;    
    }
  
    & > .line:last-child {
      margin-right: 0;    
      margin-left: 20px;
    }

    & > .circle {
      float: left;      
      width: 16px;
      height: 16px;
      background-color: color(#ccc a(60%));
      position: relative;
      border-radius: 50%;
      z-index: 4;
      
      &:before {
        content: '';
        position: absolute;
        left: 2px;
        top: 2px;
        width: 8px;
        height: 8px;
        border: 2px solid #f2f2f2;
        z-index: 5;
        border-radius: 50%;

      }
    }
  }
</style>