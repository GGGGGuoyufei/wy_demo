import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './mock/mock-server'
Vue.config.productionTip = false

new Vue({
    
  render:h=>h(App),
  router,
  store
  
}).$mount('#app')
// <!--头部列表-->
// <div class="huadong" ref="scrollwrap">
//   <div class="listTop wrapper">
//       <ul class="content" >
//           <li class="first-child " v-for="(item, index) in homeData.homeNav" :key="index">
//               <a href="javascript:;">{{item}}</a>
//           </li> 
          
//           <img src="../../../../common/images/upsanjiao.png" alt="">
//       </ul>
//   </div>