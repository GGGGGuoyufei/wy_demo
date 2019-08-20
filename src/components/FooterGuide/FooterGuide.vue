<template>
  <div>
      <!--底部-->
    <footer class="footItem">
        <a href="javascript:;" class="guide_item msite" :class="{on : $route.path === '/msite'}" @click="goTo('/msite')">
                <span class="item_icon">
                    <i class="iconfont icon-yemian-copy"></i>
                </span>
            <span>首页</span>
        </a>
        <a href="javascript:;" class="guide_item classSort" :class="{on : $route.path === '/classSort'}" @click="goTo('/classSort')">
                <span class="item_icon">
                    <i class="iconfont icon-wsdzb_zbgzt_xxzx_newpxb_type"></i>
                </span>
            <span>分类</span>
        </a>
        <a href="javascript:;" class="guide_item shiWu" :class="{on : $route.path === '/shiWu'}" @click="goTo('/shiWu')">
                <span class="item_icon">
                    <i class="iconfont icon-guizi"></i>
                </span>
            <span>识物</span>
        </a>
        <a href="javascript:;" class="guide_item shopsCar" :class="{on : $route.path === '/shopsCar'}" @click="goTo('/shopsCar')">
                <span class="item_icon">
                    <i class="iconfont icon-che"></i>
                </span>
            <span>购物车</span>
        </a>
        <a href="javascript:;" class="guide_item profile" :class="{on : $route.path === '/profile'}" @click="goTo('/profile')">
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
    methods: {
      goTo (path) {
      this.$router.replace(path)
      }
    }
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
        margin-top 10px
        .iconfont
          font-size 44px
</style>
