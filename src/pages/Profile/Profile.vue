<template>
  <div>
    <!--个人中心-->
      <section class="Profile">
          <div class="clickLogin">
              <div class="login_head">
                  <i class="iconfont icon-home" @click="$router.push('/msite')"></i>
                  <img src="./images/logo.png" alt="">
                  <i class="iconfont icon-fangdaj" @click="$router.push('/searchpage')"></i>
                  <i class="iconfont icon-che" @click="$router.push('/shopsCar')"></i>
              </div>
              <div class="login_Content">
                  <img src="./images/wangyyiyanxuan.png" alt="">
                  <button class="login_ipone" @click="$router.push('/login')">
                      <i class="iconfont " ></i>
                      手机号快捷登录
                  </button>
                  <button class="login_emile" @click="$router.push('/email')">
                      <i class="iconfont "></i>
                      邮箱账号登录
                  </button>
              </div>
              <div class="login_Style">
                  <ul>
                      <li>
                          <i class="iconfont icon-weixin"></i>
                          微信
                      </li>
                      <span>|</span>
                      <li>
                          <i class="iconfont icon-icon7"></i>
                          QQ
                      </li>
                      <span>|</span>
                      <li>
                          <i class="iconfont icon-weibo"></i>
                          微博
                      </li>
                  </ul>
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
    //个人中心
  .clickLogin
    .login_head
      width 100%
      height 85px
      background #FAFAFA
      padding-left 23px
      i
        font-size 57px
        line-height 84px
      img
        margin 0 132px 0 233px
    .login_Content
      width 100%
      height 1250px
      background #F2F5F4
      img
        margin 165px 0 127px 102px
      button
        width 688px
        height 100px
        background #DD1A21
        margin  2px 1px 22px 28px
        font-size 40px
        color white
        border-radius 10px
      .login_emile
        border 3px solid #DD1A21
        color #DD1A21
        background #F2F5F4
    .login_Style
      position absolute
      left 146px
      top 1209px
      ul
        display flex
        li
          font-size 32px
          color #7e8c8d
          .iconfont
           font-size 30px
        span
          font-size 31px
          color #7e8c8d
          margin 0  40px
 
</style>
