<template>
    <div>
     <header>
        <div class="location">
            <span class="icon iconfont icon-dingwei"></span> <h2>宝安国际机场</h2><span class="tianqi icon iconfont icon-tianqi"></span>
        </div>
        <div class="search">
          <input type="text" placeholder="搜索商家、商品"/>
        </div>
     </header>
     <section id="content">
        <h2>推荐商家</h2>
           <router-link to="/waimai/shop"class="item" >
             <img src="./static/images/img1.jpeg" alt="">
             <ul>
             <li><h2>肯德基宅急送</h2></li>
             <li class="li2">5分
                 <span>月售100单</span></li>
             <li class="li3">￥20元起送/
                 配送费￥5 ￥20/人
               <span>30分钟</span>
             </li>
             </ul>
           </router-link>
            <a class="item" href="">
                   <img src="./static/images/img1.jpeg">
             <ul>
             <li><h2>肯德基宅急送</h2></li>
             <li class="li2">5分
                 <span>月售100单</span></li>
             <li class="li3">￥20元起送/
                 配送费￥5 ￥20/人
               <span>30分钟</span>
             </li>
             </ul>
           </a>
            <a class="item" href="">
                   <img src="./static/images/img1.jpeg">
             <ul>
             <li><h2>肯德基宅急送</h2></li>
             <li class="li2">5分
                 <span>月售100单</span></li>
             <li class="li3">￥20元起送/
                 配送费￥5 ￥20/人
               <span>30分钟</span>
             </li>
             </ul>
           </a> 
           <a class="item" href="">
                   <img src="./static/images/img1.jpeg">
             <ul>
             <li><h2>肯德基宅急送</h2></li>
             <li class="li2">5分
                 <span>月售100单</span></li>
             <li class="li3">￥20元起送/
                 配送费￥5 ￥20/人
               <span>30分钟</span>
             </li>
             </ul>
           </a> 
     </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'this is home'
        }
    },
    methods: {

    }, computed: {

    }
}
</script>
<style scoped>
   @import  './static/css/base.css';
   @import  './static/css/index.css'
</style>