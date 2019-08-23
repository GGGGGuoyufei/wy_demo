<template>
  <div class="Shiwu">
      <Header/>

      <div class='XLine'></div>

      <aav/>
      <Swiper/>
      <div class="life">
        <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="">
        <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" alt="">
      </div>
      <div class="wuShiKuai">
         <a href="javascript:;">
           <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&thumbnail=200x200&quality=95" alt="">
         </a>
         <div class="wuShiKuaiBottom">
           <div class="top">
              <p class="firstP">6包/提  谷风一木3层软抽面巾纸</p>
              <p class="twoP">
                  <span>新人专享价</span>
                  <span>满赠</span>
              </p>
              <p class="threeP">
                <span class="firstSpan">$19</span>
                <span class="twoSpan"><del>$20</del></span>
              </p>
              <a href="javascript:;">立即抢购</a>
           </div>
           <!-- <div>
              <p class="firstP">6包/提  谷风一木3层软抽面巾纸</p>
              <p class="twoP">
                  <span>新人专享价</span>
                  <span>满赠</span>
              </p>
              <p class="threeP">
                <span class="firstSpan">$19</span>
                <span class="twoSpan"><del>$20</del></span>
              </p>
              <a href="javascript:;">立即抢购</a>
           </div> -->
         </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import aav from '../../components/nav/nav'
  import Swiper from './components/Swiper/Swiper.vue'
  import Header from './components/Header/Header.vue'
  export default {
    mounted(){
     
    },
    components:{   
      aav,
      Header,
      Swiper
    }
  }  
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
body
  height 10000px 
  
  .XLine
    border 1px solid #eee
  .Shiwu_List
    font-size 35px
    height 50px
    ul
     float left
     display flex
     li
      white-space nowrap
      margin 16px 15px
      .active
        color #B4282D
        border-bottom 3px solid #B4282D
  .Shiwu_Content
    width 100%
    height 500px
    margin-top 30px
    .ShiWu_FirstImg
     position relative 
      img
       width 100%
       height 417px
  .banner_swiper3
    height 400px
  .wuShiKuai
    width 100%
    height 500px
    background #95d0a2
    margin 0px 10px 50px 10px
    a
      img 
        width 200px
        height 200px
    .wuShiKuaiBottom
      width 200px
      height 300px
      background white
      .top
        .firstP
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 30px
          margin 10px
        .twoP
          .firstP
           border 2px solid yellow
     
</style>
