<template>
  <div>
    <!--私人订制轮播图-->
    <div class="selfSwiper">
        <span>私人订制</span>
        <div class="swiper-container banner_swiper2">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="./images/smallImg/1.png" alt="">
                    <span class="shopItem">严选礼品卡 </span>
                    <p>￥1000</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/2.png" alt="">
                    <span class="shopItem">男士印花背心 </span>
                    <p>￥1000</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/3.png" alt="">
                    <span class="shopItem">男士豆豆鞋</span>
                    <p>￥1450</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/4.png" alt="">
                    <span class="shopItem">男士麻辣烫</span>
                    <p>￥1230</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/7.png" alt="">
                    <span class="shopItem">男士连衣裙</span>
                    <p>￥100</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/2.png" alt="">
                    <span class="shopItem">男士豆豆鞋</span>
                    <p>￥320</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/3.png" alt="">
                    <span class="shopItem">男士豆豆鞋</span>
                    <p>￥320</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/7.png" alt="">
                    <span class="shopItem">男士豆豆鞋</span>
                    <p>￥320</p>
                </div>
                <div class="swiper-slide">
                    <img src="./images/smallImg/1.png" alt="">
                    <span class="shopItem">男士豆豆鞋</span>
                    <p>￥320</p>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    mounted(){
      new Swiper('.banner_swiper2', {
            loop : true,
            autoplay:true,
            slidesPerView : 3,
            // centeredSlides : true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //私人订制轮播图
  .selfSwiper
    span
      display block
      font-size 40px
      margin 20px
      color #333
    .banner_swiper2
      width 750px
      height 370px
      .swiper-slide
        padding-left 5px
        img
          width 200px
          height 216px
          background #EEEEEE
        span
          font-size 30px
        p
         font-size 20px
         color red
      .swiper-pagination
        display flex
        padding-left 300px
 
</style>
