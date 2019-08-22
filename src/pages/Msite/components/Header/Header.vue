<template>
  <div>
    <!--头部-->
    <header class="header" >
        <div class="logo">
              <h1>
                  <a href="javascript:;">
                      <img src="../../../../common/images/logo.png" alt="">
                  </a>
              </h1>
        </div>
        <div class="search" @click="$router.push('/searchpage')">
            <span class="">
                <img src="../../../../common/images/fangdajing.png" alt="">
                搜索商品，共21312件好物
            </span>
        </div>
        <span class="msiteLogin" @click="$router.push('/profile')">
        登录
        </span>
          <!--头部列表-->
        <div class="huadong" ref="scrollwrap">
          <div class="listTop wrapper">
              <ul class="content" >
                  <li class="first-child " v-for="(item, index) in homeData.homeNav" :key="index">
                      <a href="javascript:;">{{item}}</a>
                  </li> 
                  
                  <img src="../../../../common/images/upsanjiao.png" alt="">
              </ul>
          </div>
        </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        homeData: state=>state.home.homeDate
      })
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    //顶部
  .header
    position fixed
    left 0px
    /*top:0;*/
    top  0px
    z-index 100
    background white
    width 100%
    .logo
      display inline-block
      padding  16px 5px 0 31px
      h1
        display inline-block
    .search
      display inline-block
      background #eee
      font-size 28px
      color #666
      border 1px solid white
      border-radius 10px
    span
      display inline-block
      width 440px
      height 66px
      line-height 66px
      text-align center
    .msiteLogin
      width 76px
      height 42px
      font-size 28px
      border 1px solid #b4282d
      color #b4282d
      text-align center
      line-height 42px
      border-radius 10%
      margin-left 21px
  //头部列表-->
    .huadong
      width 100%
      .listTop
        height 60px
        ul
          display flex
          width 100%
          height 50px
           .first-child
            padding-right 20px
            
            li
             padding 0 36px
             font-size 28px
             &.on
              a
                width 90px
                color red
                border-bottom 3px solid red
            a
                color #333
                line-height 60px
                width 90px
 
</style>
