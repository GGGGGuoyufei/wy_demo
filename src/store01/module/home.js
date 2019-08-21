
import { getHomeDate } from '../../api'


const state ={

  homeDate :{}

}
const getters ={}
const mutations ={
  HOMEDATE(state,data){
    state.homeDate=data
  }
}
const actions ={
 async getHomeDate({commit}){
    let result = await getHomeDate()
    if(result.code-0 === 0){
      commit('HOMEDATE',result.data)
  }
}


}

export default{
  state,
  getters,
  mutations,
  actions

}