<template>
  <div class="Ipone_login">
    <Header/>
    <div class="Ipone_content">
        <form action="javascript:;">
          <img src="./images/wangyyiyanxuan.png" alt="">
          <div class="Ipone_input">
          <input type="tel" maxlength="11" placeholder="请输入手机号" autofocus v-model="phone">
          <input type="tel" maxlength="8" placeholder="请输入短信验证码" v-model="Ma">
           <button class="getMA" @click.prevent="sendCode" :class="{right_phone_number:isRightPhone}"
           
              >{{computeTime>0?`短信已发送(${computeTime}s)`:'获取验证码'}}</button>
          <!-- <input type="text" placeholder="遇到问题？"> -->
          <button class="DengLu" @click="loginChengGong">登录</button>
          <i class="iconfont icon-guanbi" v-if="phone" @click="clear"></i>
          <a href="javascript:;" class="Miss">遇到问题?</a>
          <a href="javascript:;"  class="LoginPssWord">使用密码验证登录</a>
          <div class="checkA">
              <input type="checkbox" checked >
              <span>我同意</span>
              <a href="javascript:;">《服务条款》</a>
              <span>和</span>
              <a href="javascript:;">《网易隐私政策》</a>
          </div>
          <span class="qieHuanLogin" @click="$router.push('/profile')">
                  其它登录方式>
          </span>
        </div>
        </form>
    
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from '../../components/Header/Header'
  export default {
    data(){
      return{
        phone:'',//手机号
        computeTime : 0,
        Ma:''
      }
    },
    computed: {
      /* 
      是否是一个正确的手机号
      */
      isRightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
    methods:{
    sendCode () {
      // alert('-----')
      // 将computeTime设置为计时的最大值
      this.computeTime = 10
      // 启动循环定时器, 每隔1s将computeTime减1
      const intervalId = setInterval(() => {
      this.computeTime--
      // 到达0时, 自动停止计时
      if (this.computeTime===0) {
      clearInterval(intervalId)
        }
      }, 1000);
    },
    clear(){
      this.phone = ''
    },
    loginChengGong(){
      if(this.phone>=11 && this.Ma){
        alert('登录成功')
        this.$router.push('/msite')
      }
    }
  },
    components:{
      Header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    
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
          color black
          &.right_phone_number
            color green 
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
