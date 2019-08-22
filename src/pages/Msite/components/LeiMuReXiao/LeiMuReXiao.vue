<template>
  <div>
    <!--类目热销榜-->
    <div class="newShops">
        <div class="countDownHeader">
            <span class="s1">类目热销榜</span>
        </div>
        <div class="midImg">
            <div class="leftImg">
                <a href="javascript:;">
                    <span>热销榜</span>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </a>
            </div>
            <div class="rightImg">
                <a href="javascript:;" >
                    <span>好评榜</span>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </a>
            </div>
        </div>
        <div class="itemImg">
            <ul>
                <li>
                    <p class="origin">全球特色榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">居家生活榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">居家生活榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">全球特色榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">全球特色榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">全球特色榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">全球特色榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
                <li>
                    <p class="origin">居家生活榜</p>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //类目热销榜
  .newShops
    width 100%
    height 500px
    .midImg
       margin-left 23px
       display flex
       height 200px
      .leftImg
        width 343px
        height 200px
        background #F9F3E4
        border 5px solid white
        span
         font-size 30px
         color black
         line-height 200px
      .rightImg
        width 350px
        height 200px
        background #EBEFF6
        border 5px solid white
        a
          font-size 30px
          color black
    .itemImg
      width 750px
      height auto
      margin-left 22px
      ul
        display flex
        flex-wrap wrap
        li
          margin-top 20px
          width 23%
          background #EEEEEE
          border 3px solid white
          font-size 20px
          text-align center
          line-height 20px
          p
            margin-top 20px
          img
           width 100%
           height 100%
 
</style>
