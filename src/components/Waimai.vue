<template>
    <div>
    
        <header>
    
            <div class="location">
    
                <span class="icon iconfont icon-dingwei"></span>
    
                <h2>宝安国际机场</h2><span class="tianqi icon iconfont icon-tianqi"></span>
    
            </div>
    
            <div class="search">
    
                <input type="text" placeholder="搜索商家、商品" />
    
            </div>
    
        </header>

        <section id="content">
    
            <h2>推荐商家</h2>
            <div  v-for="item in shopList" >
            <router-link :to="'/shop/'+item._id" class="item">
                <img src="./static/images/img1.jpeg" alt="">
    
                <ul>
    
                    <li>
    
                        <h2>{{item.title}}</h2>
    
                    </li>
    
                    <li class="li2">{{item.grade}}分
    
                        <span>月售{{item.count}}单</span></li>
    
                    <li class="li3">￥20元起送/ 配送费￥5 ￥{{item.price}}/人
    
                        <span>30分钟</span>
    
                    </li>
    
                </ul>
    
            </router-link>
            </div>
    
        </section>
    
       <div class="footer">
    
            <router-link to="/waimai"><i class="icon iconfont icon-changyonglogo40"></i><span>外卖</span></router-link>
    
            <router-link to="/find"><i class="icon iconfont icon-444"></i><span>发现</span></router-link>
    
           <router-link to="/order"><i class="icon iconfont icon-order"></i><span>订单</span></router-link>
    
            <router-link to="/my"><i class="icon iconfont icon-iconfontwohover"></i><span>我的</span></router-link>
    
        </div>
    
    </div>
</template>

<script>

   import Swiper from './Waimai/Swiper.vue';
    export default {
    
        data() {
    
            return {
             
              shopList:""
    
            }
    
        },
       methods:{

          requestData:function(){  /*请求数据*/

             var _that=this;

              var url='http://127.0.0.1:4000';
              this.$http.jsonp(url).then((res)=>{
                    console.log(res.data);

                    _that.shopList=res.data;

              },(err)=>{
                   console.log(err);
              })
          }

        }
        ,mounted:function(){
            this.requestData();
          },
       components:{
           'swiper':Swiper,
       }
    }
</script>
<style scoped>
    @import './static/css/base.css';
    
    @import './static/css/index.css';
</style>