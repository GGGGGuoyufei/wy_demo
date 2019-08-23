import ajax from './ajax'

//const BASE ='/api'



export const getHomeDate = ()=> ajax('/home')

export const getCategory = ()=>ajax('/category')