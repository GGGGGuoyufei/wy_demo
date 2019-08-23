<template>
      <div class="Shiwu_List">
        <ul>
          <li class="on">盛夏特别版</li>
          <li>推荐</li>
          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>          <li>好货内部价</li>
          <li>回购榜</li>
          <li>晒单</li>
        </ul>
      </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
  export default {
    mounted(){
      new Bscroll('.Shiwu_List',{
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .Shiwu_List
    overflow hidden
    font-size 20px
    height 50px
    ul
     float left
     display flex
     li
      font-size 30px
      white-space nowrap
      margin 16px 15px
    .on
      border-bottom 3px solid #B4282D
      color #B4282D
</style>
