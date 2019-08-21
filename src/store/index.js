/**
 * vuex最核心的管理对象
 */
import Vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

import mutations from './mutation'
import actions from './actions'
import getters from './getters'

export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    msite: msite,   // 子状态: {}
    user: user,     // 子状态: {}
    shop: shop,     // 子状态: {}
  }
})