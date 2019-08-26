<template>
  <div>
    <!--分类列表-->
    <div class="contentList">
        <ul>
            <li v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">
                <a href="javascript:;">
                    <img :src="item.picUrl" alt="">
                    <p>{{item.text}}</p>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
      computed: {
      ...mapState({
        homeData:state=>state.home.homeDate
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //分类列表
  .contentList
    margin-top 20px
    height 340px
    width 100%
    ul
      display flex
      width 100%
      height 100%
      flex-wrap wrap
      margin-bottom 20px
      li
        margin 10px 20px 0
        float left
        width 110px
        height 156px
        a
          font-size 20px
          text-align center
          img
            width 100px
            height 110px
 
</style>
