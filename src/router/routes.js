
import Msite from '../pages/Msite/Msite.vue'
import ClassSort from '../pages/Msite/Msite.vue'
import ShiWu from '../pages/ShiWu/ShiWu.vue'
import ShopsCar from '../pages/ShopCar/ShopCar.vue'
import Profile from '../pages/Profile/Profile.vue'

export default[
    {
        path:'/msite',
        component:Msite,
    },
    {
        path:'/classSort',
        component:ClassSort,
    },
    {
        path:'/shiWu',
        component:ShiWu,
    },
    {
        path:'/shopsCar',
        component:ShopsCar,
    },
    {
        path:'/profile',
        component:Profile,
    },
    {
        path:'/',
        redirect:Msite,
    },
]