<template>
  <div>
    <!--轮播图-->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="./images/lunbotu/1.jpg" alt="lunbotu">
            </div>
            <div class="swiper-slide">
                <img src="./images/lunbotu/2.jpg" alt="lunbotu">
            </div>
            <div class="swiper-slide">
                <img src="./images/lunbotu/3.jpg" alt="lunbotu">
            </div>
            <div class="swiper-slide">
                <img src="./images/lunbotu/4.png" alt="lunbotu">
            </div>
            <div class="swiper-slide">
                <img src="./images/lunbotu/5.jpg" alt="lunbotu">
            </div>
            <div class="swiper-slide">
                <img src="./images/lunbotu/6.jpg" alt="lunbotu">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    mounted(){
    
     new Swiper('.swiper-container',{
       loop: true, // 循环模式
       autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
     })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //轮播图1
  .swiper-container
    margin-top 150px
    width 100%
    height 370px
 
</style>
