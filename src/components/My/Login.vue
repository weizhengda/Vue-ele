<template>
  <div>
     <section class="head">
           <router-link to="/my" class="icon iconfont icon-comiissjt"></router-link><h2>登录</h2>
     </section>
    <form>
        <label>
            <input type="text" name="account" value="" placeholder="手机号" v-model="u_phone">
            <a href="">获取验证码</a>
        </label>
        <label>
            <input type="password" name="account" value="" placeholder="验证码" v-model="u_pwd">
        </label>
        <label>
           <span>温馨提示，未注册饿了么账号的手机号，登录时讲自动注册，且代表您以同意<a href="">《用户服务协议》</a></span>
        </label>
        <label>
            <input type="buttom" @click="request()" value="登录"/>
        </label>
    </form>
  </div>
</template>
<script>

  export default{
    
         data : function(){
            return{
                u_phone:'15083603396',
                u_pwd:'123456'
            }

        },
        methods:{
         
          request(){
              var _that=this;
              var u_phone = _that.u_phone;
              var u_pwd = _that.u_pwd;
            
              var url='http://127.0.0.1:4000/user?u_phone='+u_phone+'&u_pwd='+u_pwd;
              console.log(url);
              this.$http.jsonp(url).then((res)=>{
                  console.log(res);
                 if(res.body.result=="登录成功！"){
                  this.$router.push('/my');
                 }
              },(err)=>{
                  console.log(err);
              })
          }
        }

        }

</script>
<style scoped>
    .head a{
        position:absolute;
        top:0.3rem;
        left:0.3rem;
        color:#fff;
    }
</style>

