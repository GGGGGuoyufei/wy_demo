<template>
  <div>
    <div class="Shiwu_Head">
          <i class="iconfont icon-home" @click="$router.push('/msite')"></i>
          <span class="FaXian" style="color:red">发现</span>
          <span class="ZhenXuan">甄选家</span>
          <i class="iconfont icon-fangdaj" @click="$router.push('/searchpage')"></i>
          <i class="iconfont icon-che" @click="$router.push('/shopsCar')"></i>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Shiwu_Head
      width 100%
      height 85px
      background #FAFAFA
      padding-left 23px
      .FaXian
        margin 0px 20px 0px  186px
        font-size 37px
      .ZhenXuan
        margin-right 137px
        font-size 37px
      i
        font-size 57px
        line-height 84px
 
</style>
