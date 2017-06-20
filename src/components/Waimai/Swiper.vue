<template>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
            1
     </mt-swipe-item>
      <mt-swipe-item class="slide2">
            2
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<style>
     .mint-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }

      .slide1 {
        background-color: #0094ff;
        color: #fff;
      }

      .slide2 {
        background-color: #0094ff;
        color: #fff;
      }

</style>
