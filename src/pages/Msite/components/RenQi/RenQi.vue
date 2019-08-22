<template>
  <div>
    <!--人气推荐-->
    <div class="zhangWanYing">
        <div class="countDownHeader">
            <span class="s1">人气推荐</span>
            <a href="javascript:;">
                <span class="s2">更多></span>
            </a>
        </div>
        <div class="tuijian">
            <div class="left">
                <img src="./images/renqituijian/chuangdan.png" alt="">
                <div class="right">
                    <p class="p1">抄底特惠</p>
                    <p class="p2">新色 奢华植物牛皮...</p>
                    <p class="p3">三线水牛，高端夏凉必备</p>
                    <p class="p4">￥1949</p>
                </div>
            </div>
        </div>
        <div class="renqiBottom">
            <a href="javascript:;">
                <img src="./images/renqituijian/chuangdan.png" alt="">
                <p class="p1">网易风扇交流风</p>
                <p class="origin">￥99</p>
            </a>
            <a href="javascript:;">
                <img src="./images/renqituijian/chuangdan.png" alt="">
                <p class="p1">男士基础休闲裤</p>
                <p class="origin">￥179</p>
            </a>
            <a href="javascript:;">
                <img src="./images/renqituijian/chuangdan.png" alt="">
                <p class="p1">轻便午睡折叠床</p>
                <p class="origin">￥9.9</p>
            </a>
        </div>
        <span class="manzeng">特价</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //人气推荐
  .zhangWanYing
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
    .tuijian
      background #FEF0DF
      margin 20px 25px 10px 25px
      height 333px
      img
        width 370px
        height 330px
      .right
        width 300px
        height 330px
        display inline-block
        padding-bottom 0px
        .p1
         font-size 20px
         width 80px
         height 40px
         line-height 40px
         color #b4282d
         background white
         border 1px solid #b4282d
         margin 0px 0px 16px 20px
        .p2
         font-size 30px
         color black
         margin 0px 0px 20px 20px
        .p3
         font-size 20px
         color #7e8c8d
         margin 0px 0px 116px 20px
        .p4
          font-size 30px
          color #b4282d
          margin 0px 0px 0px 20px

    .renqiBottom
      margin 20px 0 0 0
      width 100%
      height 322px
      padding-left 40px
      a
       width 212px
       display inline-block
       img
         background #f5f5f5
         width 210px
         height 210px
         display flex
       .p1
        font-size 28px
        color black
       .origin
        font-size 25px
        color #b4282d
 
</style>
