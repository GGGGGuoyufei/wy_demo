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
            <!-- <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/2.png" alt="">
                    <p>居家生活</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/3.png" alt="">
                    <p>服饰鞋包</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/4.png" alt="">
                    <p>新品首发</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/5.png" alt="">
                    <p>美食酒水</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/6.png" alt="">
                    <p>个护清理</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/7.png" alt="">
                    <p>母婴亲子</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/8.png" alt="">
                    <p>运动旅行</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/9.png" alt="">
                    <p>全球特色</p>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="./images/contentImg/10.gif" alt="">
                    <p>超级会员</p>
                </a>
            </li> -->
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
