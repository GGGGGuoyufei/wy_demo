<template>
  <div>
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
              <div class="swiper-wrapper">
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
  import Swiper from 'swiper'
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

 
</style>
