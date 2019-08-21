<template>
  <div>
    <div class="login_head">
        <i class="iconfont icon-home" @click="$router.push('/msite')"></i>
        <img src="./images/logo.png" alt="">
        <i class="iconfont icon-fangdaj" @click="$router.push('/searchpage')"></i>
        <i class="iconfont icon-che" @click="$router.push('/shopsCar')"></i>
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
 
</style>
