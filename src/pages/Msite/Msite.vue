<template>
  <div>
      <!--首页-->
        <section class="home">
            <Header/>
            <SwiperImage/>

            <wangyiMyself/> <!--三个小icon-->

            <ContentList/><!-- 分类列表-->

            <GoodFood/><!--精选-->

            <SupperWorth/><!--超值专区-->

            <SupperWorthBootom/><!--横线-->

            <SelfSwiper/><!--私人订制轮播图-->
            
            <SupperWorthBootom/><!--横线-->

            <CountDown/> <!--倒计时-->

            <SupperWorthBootom/><!--横线-->

            <NewShops/><!--新品首发-->

            <SupperWorthBootom/><!--横线-->

            <RenQi/> <!--人气推荐-->

            <SupperWorthBootom/><!--横线-->
            
            <LeiMuReXiao/><!--类目热销榜-->

            <SupperWorthBootom/><!--横线-->
        </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from './components/Header/Header.vue'
  import SwiperImage from './components/SwiperImage/SwiperImage.vue'
  import wangyiMyself from './components/wangyiMyself/wangyiMyself.vue'
  import ContentList from './components/ContentList/ContentList.vue'
  import GoodFood from './components/GoodFood/GoodFood.vue'
  import SupperWorth from './components/SupperWorth/SupperWorth.vue'
  import SupperWorthBootom from './components/SupperWorthBootom/SupperWorthBootom.vue'
  import SelfSwiper from './components/SelfSwiper/SelfSwiper.vue'
  import CountDown from './components/CountDown/CountDown.vue'
  import NewShops from './components/NewShops/NewShops.vue'
  import RenQi from './components/RenQi/RenQi.vue'
  import LeiMuReXiao from './components/LeiMuReXiao/LeiMuReXiao.vue'
  
  import {mapState} from 'vuex'
 export default {
     components:{
         Header,
         SwiperImage,
         wangyiMyself,
         ContentList,
         GoodFood,
         SupperWorth,
         SupperWorthBootom,
         SelfSwiper,
         CountDown,
         NewShops,
         RenQi,
         LeiMuReXiao
     },
     computed: {
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
   mounted(){
        
      //  this.$store.dispatch('getHomeDate')
    
   }
     
 }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 9999px
    position relative
    width 100%
    height 100%
    overflow hidden
</style>
