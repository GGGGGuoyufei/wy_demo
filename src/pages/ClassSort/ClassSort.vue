<template>
  <div>
    <!--分类-->
      <section class="class">
        <div class="class">
          <!--头部-->
          <header class="class_Header" >
            <div class="clss_search">
              <span class="">
                <img src="./images/fangdajing.png" alt="">
                搜索商品，共21312件好物
              </span>
            </div>
          </header>
          <!--横线-->
          <div class="class_line"></div>
          <div class="class_Neirong">
            <div class="class_Content">
              <ul >
                  <li>推荐专区</li>
                  <li>夏凉专区</li>
                  <li>爆品专区</li>
                  <li>新品专区</li>
                  <li>推荐专区</li>
                  <li>夏凉专区</li>
                  <li>爆品专区</li>
                  <li>新品专区</li>
                  <li>推荐专区</li>
                  <li>夏凉专区</li>
                  <li>爆品专区</li>
                  <li>新品专区</li>
              </ul>
            </div>
            <div class="class_Img">
              <div class="class_BigImg">
                <img src="./images/classBigImg.jpg" alt="">
              </div>
              <div class="class_smallImg">
                <ul>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                  <li>
                    <img src="./images/yuangongjingxuan.png" alt="">
                    <span>员工精选好货</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //分类
  .class
    .class_Header
      width 100%
      .clss_search
        display inline-block
        background #eee
        font-size 28px
        color #666
        border 1px solid white
        border-radius 10px
        margin 10px 0px 0px 31px
      span
        display inline-block
        width 687px
        height 66px
        line-height 66px
        text-align center
    .class_line
      border 1px solid #b4b4b4
      margin-top 20px
    .class_Neirong
      .class_Content
        float left
        display inline-block
        width 180px
        font-size 34px
        li
         margin 54px 0 0 31px
      .class_Img
        display inline-block
        float left
        padding 47px 0 0 11px
        .class_BigImg
          width 528px
          height 192px
        .class_smallImg
          width 144px
          height 216px
          ul
            display flex
            flex-wrap wrap
            li
             //margin-right 46px
             display flex
             flex-wrap wrap
             flex-direction column
            span
             font-size 24px
</style>
