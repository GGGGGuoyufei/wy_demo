<template>
  <div>
    <!--倒计时-->
    <div class="countDown">
        <div class="countDownHeader">
            <span class="s1">限时购</span>
            <p>12:</p>
            <p>01:</p>
            <p>36</p>
            <a href="javascript:;">
                <span class="s2">更多></span>
            </a>
        </div>
        <div class="countDownHeaderImg">
        <span>
            <a href="javascript:;">
                <img src="./images/dazhe/fengshan.png" alt="">
                <p class="origin">￥99</p>
                <p class="now"><del>￥213</del></p>
            </a>
            <a href="javascript:;">
                <img src="./images/dazhe/yifu.png" alt="">
                <p class="origin">￥179</p>
                <p class="now"><del>￥213</del></p>
            </a>
            <a href="javascript:;">
                <img src="./images/dazhe/pixie.png" alt="">
                <p class="origin">￥9.9</p>
                <p class="now"><del>￥21</del></p>
            </a>
            <a href="javascript:;">
                <img src="./images/dazhe/chaung.png" alt="">
                <p class="origin">￥79</p>
                <p class="now"><del>￥170</del></p>
            </a>
            <a href="javascript:;">
                <img src="./images/dazhe/yinxiang.png" alt="">
                <p class="origin">￥54</p>
                <p class="now"><del>￥80</del></p>
            </a>
            <a href="javascript:;">
                <img src="./images/dazhe/xiedian.png" alt="">
                <p class="origin">￥123</p>
                <p class="now"><del>￥223</del></p>
            </a>
        </span>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //倒计时
  .countDown
    margin-bottom 270px
    .countDownHeader
      position relative
      padding 32px 0px 0px 30px
      width 100%
      height 80px
      display flex
      .s1
        font-size 30px
        line-height 80px
      p
       width 43px
       height 40px
       font-size 30px
       background black
       color white
       align-items center
       line-height 40px
       margin-left 10px
       margin-top 20px
      .s2
        position absolute
        right 66px
        top  50px
        font-size 30px
        color #333
    .countDownHeaderImg
      height 340px
      width 100%
      padding 10px
      span
        display flex
        width 100%
        height 100%
        flex-wrap wrap
        margin-left  10px
        a
          flex-wrap wrap
          background #EEEEEE
          border 10px solid white
        .origin
          color red
          display flex
          font-size 30px
          background white
        .now
           font-size 30px
           background white
 
</style>
