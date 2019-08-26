<template>
  <div class="Ipone_login">
    <Header/>
    <div class="Ipone_content">
        <img src="./images/wangyyiyanxuan.png" alt="">
        <div class="Ipone_input">
        <input type="text" placeholder="邮箱账号" autofocus v-model="Email">
        <input type="password" placeholder="密码">
        <input type="text" placeholder="注册账号">
        <button class="DengLu">登录</button>
        <a href="https://reg.163.com/naq/findPassword#/verifyAccount" class="LoginPssWord">忘记密码</a>
        <span class="qieHuanLogin" @click="$router.push('/profile')">
                其它登录方式>
        </span>
    </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  export default {
    // data:{
    //   return(){
    //     Email :'' //邮箱
    //   }
    // },
    computed:{
      isEmail(){
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.Email)
      }
    },
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
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
          left 497px
          top 475px
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
          top 572px
          border 1px solid red
          border-radius 20px

     .qieHuanLogin
        font-size 35px
        position absolute
        left 236px
        top 789px
</style>
