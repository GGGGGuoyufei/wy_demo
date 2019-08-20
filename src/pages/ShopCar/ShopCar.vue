<template>
  <div>
    <!--购物车-->
      <section class="goCar">
          <!--未登录样式-->
          <div class="noLogin">
              <header class="carHeader">
                  <span class="leftSpan">购物车</span>
                  <span class="rightSpan">领券</span>
              </header>
              <div class="mid">
                  <ul>
                      <li>
                          。30天无忧退货
                      </li>
                      <li>
                          。48小时快速退款
                      </li>
                      <li>
                          。满88免邮费
                      </li>
                  </ul>
              </div>
              <div class="carTop">
              <span>
                  <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
                  <button @click="$router.push('/profile')">登录</button>
              </span>
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
  //购物车
  .noLogin
    .carHeader
      width 100%
      height 85px
      line-height 100px
      .leftSpan
        float left
        margin-left 30px
        font-size 35px
      .rightSpan
        float right
        color #B4282D
        margin-right 40px
        font-size 35px
    .mid
      width 100%
      height 80px
      background #eee
      ul
        text-align center
      li
        margin-left 10px
        display inline-block
        font-size 22px
        color #666
        line-height 80px
    .carTop
      width 100%
      height 1100px
      background #f4f4f4
      position relative
      i
        width 200px
        height 200px
        font-size 200px
      img 
       position absolute
       left 163px
       bottom  487px
       width 448px
       height 477px
      button
        width 500px
        height 100px
        background  #b4282d
        text-align center
        position absolute
        left 114px
        top 668px
        font-size 30px
        color white
        line-height 100px
        outline none
</style>
