<template>
  <div>
    <!--新品首发-->
    <div class="newShops">
        <div class="countDownHeader">
            <span class="s1">新品首发</span>
            <a href="javascript:;">
                <span class="s2">更多></span>
            </a>
        </div>
        <div class="countDownHeaderImg">
            <ul>
                <li v-for="(item, index) in homeData.newItemList" :key="index">
                    <img src="../../../../common/images/dazhe/chaung.png" alt="">
                    <p class="origin">￥{{item.retailPrice}}</p>
                    <p class="now"><del>￥{{item.limitedFlag}}</del></p>
                    <span class="manzeng">特价</span>
                </li>
                <!-- <li>
                    <img src="../../../../common/images/dazhe/yifu.png" alt="">
                    <p class="origin">￥179</p>
                    <p class="now"><del>￥213</del></p>
                </li>
                <li>
                    <img src="../../../../common/images/dazhe/pixie.png" alt="">
                    <p class="origin">￥9.9</p>
                    <p class="now"><del>￥21</del></p>
                </li>
                <li>
                    <img src="../../../../common/images/dazhe/chaung.png" alt="">
                    <p class="origin">￥79</p>
                    <p class="now"><del>￥170</del></p>
                </li>
                <li>
                    <img src="../../../../common/images/dazhe/yinxiang.png" alt="">
                    <p class="origin">￥55</p>
                    <p class="now"><del>￥80</del></p>
                    <span class="manzeng">满赠</span>
                </li>
                <li>
                    <img src="../../../../common/images/dazhe/xiedian.png" alt="">
                    <p class="origin">￥123</p>
                    <p class="now"><del>￥223</del></p>
                    <span class="manzeng">特价</span>
                </li> -->
            </ul>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        homeData:state=>state.home.homeDate
     
      })

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //新品首发
  .newShops
    margin-bottom 324px
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
    //开启
    .countDownHeaderImg
      height 340px
      width 100%
      ul
       display flex
       flex-wrap wrap
       padding-left 46px
       li
        border 3px solid white
        img
          background #EEEEEE
        p
          font-size 30px
         //打折的
        .manzeng
          width 50px
          height 30px
          background white
          border 2px solid #b4282d
          border-radius 10px
          display flex
          text-align center
          line-height 30px
          font-size 20px
          color  #b4282d
          margin  10px 0 0 40px
</style>
