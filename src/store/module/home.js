
import { getHomeDate, getCategory  } from '../../api'


const state ={

  homeDate :{},
  category :{}
}
const getters ={}

const mutations ={
  HOMEDATE(state,data){
    state.homeDate=data
  },
  CATEGORY(state,data){
    state.category=data
  }
}
const actions ={
 async getHomeDate({commit}){
    let result = await getHomeDate()
    //console.log(result.data)
    if(result.code === 0){
      commit('HOMEDATE',result.data)
    }
  },
    async getCategory({commit}){
      let result = await getCategory()
      console.log(result.data)
      if(result.code === 0){
        commit('CATEGORY',result.data)
    }
  },
}

export default{
  state,
  getters,
  mutations,
  actions

}