<template>
    <div>
        <div class="header">
              <router-link to="/waimai" class="icon iconfont icon-comiissjt"></router-link><h2>我的</h2>
        </div>
        <div class="login">
            <router-link to="/login">
                <i class="icon iconfont icon-iconfontwohover"></i>
                <dl>
                <dt>{{u_name}}</dt>
                <dd>{{u_phone}}</dd>
                </dl>
                <em class="icon iconfont icon-jikediancanicon13"></em>
            </router-link>
        </div>
        <div class="list">
             <router-link to="">我的订单</router-link>
             <router-link to="">积分商城</router-link>
             <router-link to="">饿了么会员卡</router-link>
             <router-link to="">服务中心</router-link>
             <router-link to="">下载饿了么APP</router-link>
        </div>
     <div class="footer">
    
            <router-link to="/waimai"><i class="icon iconfont icon-changyonglogo40"></i><span>外卖</span></router-link>
    
            <router-link to="/find"><i class="icon iconfont icon-444"></i><span>发现</span></router-link>
    
           <router-link to="/order"><i class="icon iconfont icon-order"></i><span>订单</span></router-link>
    
            <router-link to="/my"><i class="icon iconfont icon-iconfontwohover"></i><span>我的</span></router-link>
    
        </div>
    </div>
</template>

<script>
import store from '../store/store.js';
    export default{
        
        data(){
            return{

                msg:'this is New',
                u_name:'登录/注册',
                u_phone:'登录后享受更多特权',
            }
        },
        methods:{

        },computed:{


        },mounted:function(){
            console.log(store.state.user[0].u_name);
        }
    }


</script>

<style scoped>
  @import  './static/css/base.css';
  html,body{
      backgroun:#f4f5f5;
  }
    .header{
        width:100%;
        height:1.5rem;
        background:#0094ff;
        position:relative;
    }
    .header h2{
        color:#fff;
        line-height:1.5rem;
        text-align:center;
    }
    .header a{
        position:absolute;
        top:.5rem;
        left:0.3rem;
        color:#fff;
    }
    .login{
        width:100%;
        height:3rem;
        background:#0094ff;
    }
    .login a{
        color:#fff;
    }
    .login a i{
        padding:0.5rem;
        font-size:2rem;
    }
     .login a dl{
       display:inline-block;
    }
    .login a dl dt{
        font-size:0.8rem;
    }
    .login a em{
        position:absolute;
        top:2rem;
        right:0.5rem;;
    }
    .list{
        width:100%;
        height:auto;
        font-size:0.6rem;
        line
        margin-top:0.5rem;
    }
    .list a{
        width:100%;
        display:block;
        height:1.5rem;
        line-height:1.5rem;
        background:#fff;
        margin:10px 0;
    }
   
</style>