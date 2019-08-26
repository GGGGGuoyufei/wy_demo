
import Msite from '../pages/Msite/Msite.vue'
import ClassSort from '../pages/ClassSort/ClassSort.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopsCar from '../pages/ShopCar/ShopCar.vue'
import Profile from '../pages/Profile/Profile.vue'
import SearchPage from '../pages/SearchPage/SearchPage.vue'
import Login from '../pages/Login/Login.vue'
import Email from '../pages/Email/Email.vue'
import ZhenXuan from '../pages/ShiWu/pages/ZhenXuan/ZhenXuan.vue'
export default[
    {
        path:'/msite',
        component:Msite,
        meta:{
            showFooter: true
        }
    },
    {
        path:'/classSort',
        component:ClassSort,
        meta:{
            showFooter: true
        }
    },
    {
        path:'/shiWu',
        component:ShiWu,
        meta:{
            showFooter: true
        }
    },
    {
        path:'/shopsCar',
        component:ShopsCar,
        meta:{
            showFooter: true
        }
    },
    {
        path:'/profile',
        component:Profile,
    },
    {
        path:'/searchpage',
        component:SearchPage
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/email',
        component:Email
    },
    {
        path:'/',
        redirect:'/msite'
    },
    {
        path:'/zhenxuan',
        component:ZhenXuan
    }
]