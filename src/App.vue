<template>
  <div id="app">
   <div class="footer">
    <router-link to="/waimai">外卖</router-link>
    <router-link to="/find">发现</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/my">我的</router-link>
   </div>
    <router-view></router-view>
  </div>
</template>



<script>


</script>

<style>
html,body{
  width:100%;
  height:100%;
  background:#f4f5f5;
  position:relative;
}
.footer{
    width:100%;
    height:1rem;
    background:#fff;
    border-top:1px solid #909090;
    display:flex;
    position:fixed;
    bottom:0;
    left:0;
}
.footer a{
  flex:1;
  font-size:0.5rem;;
  color:#909090;
  text-align:center;
  text-decoration:none;
}
</style>
