import ajax from './ajax'

//const BASE ='/api'



export const getHomeDate = ()=> ajax('/home')

export const getShopList =()=>ajax('/kingkong')
console.log(getShopList())