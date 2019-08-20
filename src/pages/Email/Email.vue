<template>
  <div class="Ipone_login">
    <div class="login_head">
        <i class="iconfont icon-home" @click="$router.push('/msite')"></i>
        <img src="./images/logo.png" alt="">
        <i class="iconfont icon-fangdaj" @click="$router.push('/searchpage')"></i>
        <i class="iconfont icon-che" @click="$router.push('/shopsCar')"></i>
    </div>
    <div class="Ipone_content">
        <img src="./images/wangyyiyanxuan.png" alt="">
        <div class="Ipone_input">
        <input type="text" placeholder="请输入手机号" autofocus>
        <input type="text" placeholder="请输入短信验证码">
        <input type="text" placeholder="遇到问题？">
        <button class="DengLu">登录</button>
        <a href="javascript:;" class="LoginPssWord">使用密码验证登录</a>
        <span class="qieHuanLogin" @click="$router.push('/profile')">
                其它登录方式>
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
    .Ipone_content
      width 100%
      height 1250px
      border-bottom 3px solid #eee
      position relative
      img
        margin 50px 0 0 277px
        width 200px
      .Ipone_input
         margin 86px 0 50px 50px
        input 
         display block
         width 586px
         height 31px
         border-bottom 3px solid #eee
         font-size 33px
         padding-top 70px
         line-height 31px
         color black
        .iconfont
          color #ccc
          font-size 40px
          position absolute
          left 591px
          top 256px
        .getMA
          position absolute
          left 505px
          top 351px
          width 151px
          height 58px
          font-size 23px
          background white
          border 1px solid #999
        .LoginPssWord
          position absolute
          left 428px
          top 449px
          font-size 30px
          color #333
          font-family "微软雅黑"
        .Miss
          position absolute
          left 74px
          top 449px
          font-size 30px
          color #333
          font-family "微软雅黑"
        .DengLu
          width 629px
          height 100px
          text-align center
          line-height 100px
          background #DD1A21
          font-size 30px
          color white
          position absolute
          left 49px
          top 523px
          border 1px solid red
          border-radius 20px
        .checkA
          position absolute
          left 113px
          top 641px
          width 600px
          height 20px
          display inline-block
          font-size 24px
          input 
           position absolute
           left -310px
           top -2px
           display flex
          a
           color blue
     .qieHuanLogin
        font-size 35px
        position absolute
        left 236px
        top 789px
</style>
