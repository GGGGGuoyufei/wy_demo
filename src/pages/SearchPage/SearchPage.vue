<template>
  <div>
<!--点击搜索跳转的-->
    <div class="bigSearch">
        <div class="search">
        <span class="new">
            <img src="./fangdajing.png" alt="">
            <input type="text" placeholder="新款爆品  季末特惠">
        </span>
        </div>
        <span class="cancel" @click="$router.push('/msite')">取消</span>
        <div class="PopularSearch">
            <span class="remensousuo">热门搜索</span>
            <ul>
                <li class="onlyRed">爆款行李箱</li>
                <li>香氛牙膏 谈吐芬芳</li>
                <li>清潭云朵拖鞋9.9元</li>
                <li>中秋月饼 上心热卖</li>
                <li>韩国造 睡眠喷雾</li>
                <li class="onlyRed">酸梅汤</li>
                <li>杯子</li>
                <li>内裤</li>
                <li class="onlyRed">锅</li>
                <li>电动牙刷</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    //点击搜索跳转的 
  .bigSearch
    width 100%
    height 85px
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
    .PopularSearch
      width 697px
      height 600px
      margin 23px
      .remensousuo
        font-size 30px
        color #b4b4b4
      ul
       margin-top 10px
       display flex
       flex-wrap wrap
       li
        height 49px
        line-height 49px
        font-size 34px
        margin 10px
        border 2px solid #999
        padding 0px 15px
       .onlyRed
         border-color #b4282d
         color #b4282d
</style>
