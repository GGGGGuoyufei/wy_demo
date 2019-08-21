<template>
  <div class="Shiwu">
      <div class="Shiwu_Head">
          <i class="iconfont icon-home" @click="$router.push('/msite')"></i>
          <span class="FaXian" style="color:red">发现</span>
          <span class="ZhenXuan">甄选家</span>
          <i class="iconfont icon-fangdaj" @click="$router.push('/searchpage')"></i>
          <i class="iconfont icon-che" @click="$router.push('/shopsCar')"></i>
      </div>
      <div class='XLine'></div>
      <!-- <div class="Shiwu_List">
        <ul>
          <li class="active">盛夏特别版</li>
          <li>推荐</li>
          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>
        </ul>
      </div> --><aav/>
      <div class="Shiwu_Content">
          <div class="ShiWu_FirstImg">
           <img src="./1.jpeg" alt="">
           <img class="topImg" src="./2.jpg" alt="">
          </div>
          <div class="ShiWu_jingxuan">
              <img src="./images/bayuejingxuan.jpeg" alt="">
          </div>
          <!--轮播图-->
            <div class="swiper-container">
                <div class="swiper-wrapper banner_swiper3">
                    <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="lunbotu">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="lunbotu">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="lunbotu">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="lunbotu">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="lunbotu">
                    </div>
                    <div class="swiper-slide">
                        <img src="https://yanxuan.nosdn.127.net/fca5a6400454717c5b7d6c393071b307.jpg?imageView&quality=75&thumbnail=750x0" alt="lunbotu">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import aav from '../../components/nav/nav'
  import Swiper from 'swiper'
  
  export default {
    mounted(){
      new Swiper('banner_swiper3',{
        spaceBetween: 10,
        slidesPerView: 4,
        watchSlidesVisibility: true,//防止不可点击
      })
      
      
    },
    components:{   
      aav
       }
  }  
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
body
  height 10000px 
  .Shiwu_Head
      width 100%
      height 85px
      background #FAFAFA
      padding-left 23px
      .FaXian
        margin 0px 20px 0px  186px
        font-size 37px
      .ZhenXuan
        margin-right 137px
        font-size 37px
      i
        font-size 57px
        line-height 84px
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
</style>
