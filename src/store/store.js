//引入  vue  和vuex   

//前提：必须安装 vuex      cnpm instlal vuex --save

import Vue from 'vue';


import Vuex from 'vuex';

Vue.use(Vuex);

var state={  /*所有的数据放在这里面*/

    user:{}
}

var mutations={   /*所有的方法放在这个里面*/
    
    //保存用户数据
    addUser:function(state,data){
         state.user=data
        
    },
}
 
export default new Vuex.Store({  /*注意*/
    state,
    mutations

})