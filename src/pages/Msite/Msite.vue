<template>
  <div>
      <!--首页-->
        <section class="home">
            <!--头部-->
            <header class="header" >
                <div class="logo">
                    <h1>
                        <a href="javascript:;">
                            <img src="./images/logo.png" alt="">
                        </a>
                    </h1>
                </div>
                <div class="search" @click="$router.push('/searchpage')">
                <span class="">
                    <img src="./images/fangdajing.png" alt="">
                    搜索商品，共21312件好物
                </span>
                </div>
                <span class="msiteLogin" @click="$router.push('/profile')">
                登录
            </span>
                <!--头部列表-->
            <div class="huadong" ref="scrollwrap">
                <div class="listTop wrapper">
                    <ul class="content" >
                        <li class="first-child on">
                            <a href="javascript:;">推荐</a>
                        </li>
                        
                        <img src="./images/upsanjiao.png" alt="">
                    </ul>
                </div>
            </div>
            </header>
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
            <!--三个小icon-->
            <div class="wangyiMyself">
                <i class="iconfont icon-wangyi"></i>
                <span>网易自营品牌</span>

                <i class="iconfont icon-qian"></i>
                <span>30天无忧退货</span>

                <i class="iconfont icon-anquan"></i>
                <span>48小时快速退款</span>
            </div>
            <!--分类列表-->
            <div class="contentList">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/1.gif" alt="">
                            <p>新品首发</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/2.png" alt="">
                            <p>居家生活</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/3.png" alt="">
                            <p>服饰鞋包</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/4.png" alt="">
                            <p>新品首发</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/5.png" alt="">
                            <p>美食酒水</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/6.png" alt="">
                            <p>个护清理</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/7.png" alt="">
                            <p>母婴亲子</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/8.png" alt="">
                            <p>运动旅行</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/9.png" alt="">
                            <p>全球特色</p>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="./images/contentImg/10.gif" alt="">
                            <p>超级会员</p>
                        </a>
                    </li>
                </ul>
            </div>
            <!--精选-->
            <div class="goodFood">
                <a href="javascript:;">
                    <img src="./images/dazhe.gif" alt="">
                </a>
            </div>
            <!--超值专区-->
            <div class="supperWorth">
                <div class="on">
                    <a href="javascript:;">9.9超值专区首发</a>
                    <p>180款爆品新定价</p>
                    <div>
                        <img src="./images/superWorth/beizi.png" alt="">
                    </div>
                    <div>
                        <img src="./images/superWorth/zhijin.png" alt="">
                    </div>
                </div>
                <div class="on">
                    <a href="javascript:;">福利社</a>
                    <p>汇聚每日新折扣</p>
                    <div>
                        <img src="./images/superWorth/mianbao.png" alt="">
                    </div>
                    <div>
                        <img src="./images/superWorth/xinglixiang.png" alt="">
                    </div>
                </div>
                <div class="on">
                    <a href="javascript:;">断货补单王</a>
                    <p>严选必买爆款</p>
                    <div>
                        <img src="./images/superWorth/mianbei.png" alt="">
                    </div>
                    <div>
                        <img src="./images/superWorth/koudai.png" alt="">
                    </div>
                </div>
                <div class="on">
                    <a href="javascript:;">20元内种草好物</a>
                    <p>拔草不悔的凑单爆款</p>
                    <div>
                        <img src="./images/superWorth/huazhuanghe.png" alt="">
                    </div>
                    <div>
                        <img src="./images/superWorth/xiangshui.png" alt="">
                    </div>
                </div>

            </div>
            <!--横线-->
            <div class="supperWorthBootom"></div>
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
            <!--横线-->
            <div class="supperWorthBootom"></div>
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
            <!--横线-->
            <div class="supperWorthBootom"></div>
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
                        <li>
                            <img src="./images/dazhe/fengshan.png" alt="">
                            <p class="origin">￥99</p>
                            <p class="now"><del>￥213</del></p>
                            <span class="manzeng">特价</span>
                        </li>
                        <li>
                            <img src="./images/dazhe/yifu.png" alt="">
                            <p class="origin">￥179</p>
                            <p class="now"><del>￥213</del></p>
                        </li>
                        <li>
                            <img src="./images/dazhe/pixie.png" alt="">
                            <p class="origin">￥9.9</p>
                            <p class="now"><del>￥21</del></p>
                        </li>
                        <li>
                            <img src="./images/dazhe/chaung.png" alt="">
                            <p class="origin">￥79</p>
                            <p class="now"><del>￥170</del></p>
                        </li>
                        <li>
                            <img src="./images/dazhe/yinxiang.png" alt="">
                            <p class="origin">￥55</p>
                            <p class="now"><del>￥80</del></p>
                            <span class="manzeng">满赠</span>
                        </li>
                        <li>
                            <img src="./images/dazhe/xiedian.png" alt="">
                            <p class="origin">￥123</p>
                            <p class="now"><del>￥223</del></p>
                            <span class="manzeng">特价</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!--横线-->
            <div class="supperWorthBootom"></div>
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
                        <img src="./images/dazhe/fengshan.png" alt="">
                        <p class="p1">网易风扇交流风</p>
                        <p class="origin">￥99</p>
                    </a>
                    <a href="javascript:;">
                        <img src="./images/dazhe/yifu.png" alt="">
                        <p class="p1">男士基础休闲裤</p>
                        <p class="origin">￥179</p>
                    </a>
                    <a href="javascript:;">
                        <img src="./images/dazhe/pixie.png" alt="">
                        <p class="p1">轻便午睡折叠床</p>
                        <p class="origin">￥9.9</p>
                    </a>
                </div>
                <span class="manzeng">特价</span>
            </div>
            <!--横线-->
            <div class="supperWorthBootom"></div>
            <!--类目热销榜-->
            <div class="newShops">
                <div class="countDownHeader">
                    <span class="s1">类目热销榜</span>
                </div>
                <div class="midImg">
                    <div class="leftImg">
                        <a href="javascript:;">
                            <span>热销榜</span>
                            <img src="./images/item/1.png" alt="">
                        </a>
                    </div>
                    <div class="rightImg">
                        <a href="javascript:;" >
                            <span>好评榜</span>
                            <img src="./images/item/2.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="itemImg">
                    <ul>
                        <li>
                            <p class="origin">全球特色榜</p>
                            <img src="./images/dazhe/xiedian.png" alt="">
                        </li>
                        <li>
                            <p class="origin">居家生活榜</p>
                            <img src="./images/dazhe/xiedian.png" alt="">
                        </li>
                        <li>
                            <p class="origin">居家生活榜</p>
                            <img src="./images/dazhe/pixie.png" alt="">
                        </li>
                        <li>
                            <p class="origin">全球特色榜</p>
                            <img src="./images/dazhe/yifu.png" alt="">
                        </li>
                        <li>
                            <p class="origin">全球特色榜</p>
                            <img src="./images/dazhe/xiedian.png" alt="">
                        </li>
                        <li>
                            <p class="origin">全球特色榜</p>
                            <img src="./images/dazhe/fengshan.png" alt="">
                        </li>
                        <li>
                            <p class="origin">全球特色榜</p>
                            <img src="./images/dazhe/xiedian.png" alt="">
                        </li>
                        <li>
                            <p class="origin">居家生活榜</p>
                            <img src="./images/dazhe/xiedian.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <!--横线-->
            <div class="supperWorthBootom"></div>
        </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
 export default {
     computed: {
      ...mapState({
        homeData: state=>state.home.homeData
      })
    },
   mounted(){
    new Swiper('.swiper-container',{
       loop: true, // 循环模式
       autoplay:true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
     })
     new Swiper('.banner_swiper2', {
            loop : true,
            autoplay:true,
            slidesPerView : 3,
            // centeredSlides : true,
            pagination: {
                el: '.swiper-pagination',
            }
        }),


        new BScroll('.wrapper',{
            scrollY: true,
            click: true
        })
     this.$nextTick(()=>{
         new BScroll(this.$refs.scrollwrap,{
             scrollX:true
         })
     })
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
  //顶部
  .header
    position fixed
    left 0px
    /*top:0;*/
    top  0px
    z-index 100
    background white
    width 100%
    .logo
      display inline-block
      padding  16px 5px 0 31px
      h1
        display inline-block
    .search
      display inline-block
      background #eee
      font-size 28px
      color #666
      border 1px solid white
      border-radius 10px
    span
      display inline-block
      width 440px
      height 66px
      line-height 66px
      text-align center
    .msiteLogin
      width 76px
      height 42px
      font-size 28px
      border 1px solid #b4282d
      color #b4282d
      text-align center
      line-height 42px
      border-radius 10%
      margin-left 21px
  //头部列表-->
    .huadong
      width 100%
      .listTop
        height 60px
        ul
          display flex
          width 100%
          height 50px
           .first-child
            padding-right 20px
            
            li
             padding 0 36px
             font-size 28px
             &.on
              a
                width 90px
                color red
                border-bottom 3px solid red
            a
                color #333
                line-height 60px
                width 90px
        //轮播图1
  .swiper-container
    margin-top 150px
    width 100%
    height 370px
//三个小icon
  .wangyiMyself
    margin-left 59px
    i
      font-size 20px
      color #f40
    span
      font-size 30px
      color #333
//分类列表
  .contentList
    margin-top 20px
    height 340px
    width 100%
    ul
      display flex
      width 100%
      height 100%
      flex-wrap wrap
      margin-bottom 20px
      li
        margin 10px 20px 0
        float left
        width 110px
        height 156px
        a
          font-size 20px
          text-align center
          img
            width 100px
            height 110px
//精选
  .goodFood
    img
      margin-top  10px
      width 750px
//超值专区
  .supperWorth
    width 750px
    height 560px
    padding 20px
    div
      float left
      padding  20px 0 5px 15px
      &.on
        border 5px solid white
        background #F5F5F5
      a
        color black
        font-size 40px
      p
        margin-top 20px
        font-size 20px
        color #7e8c8d
  //横线
  .supperWorthBootom
    margin-top 50px
    border-bottom 20px solid #EEEEEE
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
