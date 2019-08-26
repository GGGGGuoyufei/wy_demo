<template>
  <div class="mask" style="display:block">
    <div class="search">
      <span class="new">
          <img src="../../fangdajing.png" alt="">
          <input type="text" >
      </span>
    </div>
    <span class="cancel" @click="$router.push('/msite')">取消</span>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
      width 532px
      height 62px
      display inline-block
      background #f4f4f4
      font-size 28px
      color #b4b4b4
      border 1px solid white
      border-radius 10px
      margin 20px 0 0 32px
      line-height 67px
      padding 0px 0px 0px 42px
      input 
       width 480px
       height 57px
       background #eee
       border 0px
    .cancel
        font-size 30px
        color #333
        margin-left 20px
    ul
      margin 20px
      li
        border-bottom 3px solid #eee
        font-size 30px
        margin-top 50px
</style>
