<template>
    <div>
        <div class="header">
              <router-link to="/waimai" class="icon iconfont icon-comiissjt"></router-link><h2>发现</h2>
        </div>

        <div class="nav1">
            <div class="left">
               <dl>
                  <dt>积分商城</dt>
                  <dd>0元好物在这里！</dd>
               </dl>
               <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/" alt="">
            </div>
            <div class="right">
            
            </div>
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
    export default{
        
        data(){
            return{

                msg:'this is New'
            }

        }
      
    }


</script>

<style scoped>
  @import  './static/css/base.css';
    .header{
        width:100%;
        height:1.5rem;
        background:#0094ff;
    }
    .header h2{
        color:#fff;
        line-height:1.5rem;
        text-align:center;
    }
    .nav1{
        width:100%;
        height:4rem;
        margin:10px 0;
        display:flex;
        background:#fff;
    }
    .nav1 .left{
        flex:1;
        padding:0 1.5rem;
    }
    .nv1 .left dl{
        margin-left:0.5rem;
        line-height:2rem;
    }
    .nav1 .left dl dt{
        color: rgb(255, 151, 0);
        font-size:0.5rem;
    }
    .nav1 .left img{
        width:150px;
        height:150px;
    }
    .nav1 .right{
        flex:2;
        border-left:1px solid #909090;
    }
   
</style>