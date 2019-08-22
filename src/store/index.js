 import Vue from 'vue'
 import Vuex from 'vuex'



 import actions from './actions'
 import getters from './getters'

 import mutaions from './mutaions'



 import home from './module/home'

 Vue.use(Vuex)

 export default new Vuex.Store(
  {
    actions,
    getters,
    mutaions,
    modules:{
      home
    }
   }
 )