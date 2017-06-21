<template>
    <div>
        <div class="header">
              <router-link to="/waimai" class="icon iconfont icon-comiissjt"></router-link><h2>订单</h2>
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

        },
        methods:{


        },computed:{


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
</style>