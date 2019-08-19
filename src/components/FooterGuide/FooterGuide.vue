<template>
  <div>
      <!--底部-->
    <footer class="footItem">
        <a href="javascript:;" class="guide_item on">
                <span class="item_icon">
                    <i class="iconfont icon-yemian-copy"></i>
                </span>
            <span>首页</span>
        </a>
        <a href="javascript:;" class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-wsdzb_zbgzt_xxzx_newpxb_type"></i>
                </span>
            <span>分类</span>
        </a>
        <a href="javascript:;" class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-guizi"></i>
                </span>
            <span>识物</span>
        </a>
        <a href="javascript:;" class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-che"></i>
                </span>
            <span>购物车</span>
        </a>
        <a href="javascript:;" class="guide_item">
                <span class="item_icon">
                    <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxing"></i>
                </span>
            <span>个人</span>
        </a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    //底部
  .footItem
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    border-top  1px solid #7e8c8d
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 26px
        margin-top 8px
        .iconfont
          font-size 30px
          width 30px
          height 30px
          display block
          color green
  
 
</style>
