
import { getHomeDate , getShopList } from '../../api'


const state ={

  homeDate :{},
  shopList :[]
}
const getters ={}
const mutations ={
  HOMEDATE(state,data){
    state.homeDate=data
  },
  SHOPSLIST(state,data){
    state.shopList=data
  },
}
const actions ={
 async getHomeDate({commit}){
    let result = await getHomeDate()
    console.log(result.data)
    if(result.code === 0){
      commit('HOMEDATE',result.data)
  }
},
    async getSHOPS({commit}){
      let result = await getShopList()
      console.log(result.data)
      if(result.code === 0){
        commit('SHOPSLIST',result.data)
    }


},
}

export default{
  state,
  getters,
  mutations,
  actions

}