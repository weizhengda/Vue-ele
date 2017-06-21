<template>
   <div class="shop">
      <div class="shop-header">
       <div href="#" class="item">
           <a href="/" class="icon iconfont icon-comiissjt"></a>
           <div class="fav" @click="change()">
               <i class="i1 icon iconfont icon-aixin"  v-bind:class="{ 'i1' : isFav, 'i2': !isFav}" @click="toggle"></i>
           </div>
           <img src="../static/images/img1.jpeg" alt="">
           <ul>
               <li><h2>台滋味（深圳西丽店）</h2></li>
               <li class="li2"><span>商家配送/40分钟送达/配送费￥9</span><a href="shop" class="icon iconfont icon-jikediancanicon13"></a></li>
               <li>公告：本餐厅使用饿了么配送</li>
           </ul>

       </div>
   </div>
  <section>
    <div class="right">
         
      <h2>热销榜</h2>
      <div class="item">
                <img src="../static/images/food1.jpeg" alt="">
                   <ul>
                        <li>吮指原味鸡</li>
                        <li class="li2">月售100份，好评率100%</li>
                        <li class="li3"><span>￥20</span><i @click="less" class="icon iconfont icon-jian "></i><b v-model="order">0</b><i @click="more" class="icon iconfont icon-54 "></i></li>
                  </ul>
       </div>
     </div>
  </section>
         
    <div class="footer">
      <div class="left">
          <i class="icon iconfont icon-gouwuche "></i>
          <span>￥0</span>
      </div>
      <div class="right">
          <a href="#">去结算</a>
      </div>
  </div>
   </div>
</template>

<script>
    export default{
        data:function(){
             return{
                isFav:false,
                text:'收藏',
                shop:"",
                order:0
             };
        },
        methods:{
            toggle:function(){
                this.isFav = !this.isFav;
            },
            change:function(){
                if(this.text="收藏"){
                    this.text="已收藏"
                }else{
                    this.text="收藏";
                }
            },
            more:function(){
               this.order = this.order+1;
            },
            less:function(){
               this.less = this.order-1;
            },
           requestData:function(_id){  /*请求数据*/

             var _that=this;

              var url='http://127.0.0.1:4000/shop/_id='+_id;
              console.log(_id);
              this.$http.jsonp(url).then((res)=>{
                    console.log(res.data);
                    _that.shop=res.data[0];

              },(err)=>{
                   console.log(err);
              })
          }

        },
        mounted:function(){
           
            console.log(this.$route.params._id);  /*获取动态路由的值*/

            //this.requestData(this.$route.params._id);
        }
    }
</script>

<style scoped>
  @import '../static/css/base.css';
  @import '../static/css/shop.css';
</style>