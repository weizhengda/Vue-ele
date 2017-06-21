import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';


//1.安装 vue-router
//2.引入模块
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);  /*必须得use*/
Vue.use(VueResource);
Vue.use(MintUI);


//3.引入组件。
import Waimai from './components/Waimai.vue';
import Find from './components/Find.vue';
import Order from './components/Order.vue';
import My from './components/My.vue';
import Shop from './components/Waimai/Shop.vue';
import Login from './components/My/Login.vue';


//4.配置路由


const routes = [
  { path: '/waimai', component: Waimai},
  { path: '/find', component:Find},
  { path: '/order',component:Order},
  { path: '/my',component:My},
  { path: '/',component:Waimai},
  { path: '/shop/:id',component:Shop},
  { path: '/login',component:Login}
]



//5。实例化VueRouter  注意单词

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes   /*注意属性的简写*/
})

//6.挂在到Vue实例上面
new Vue({
  el: '#app',

  router,
  render: h => h(App)
})

//7 App.vue 配置视图

// <router-view></router-view>