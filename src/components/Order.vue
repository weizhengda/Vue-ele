<template>
    <div>
        <div class="header">
              <h2>订单</h2>
        </div>
     <div class="footer">
      <router-link to="/waimai">外卖</router-link>
      <router-link to="/find">发现</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/my">我的</router-link>
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