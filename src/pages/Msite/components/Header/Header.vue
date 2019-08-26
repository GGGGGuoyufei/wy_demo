<template>
  <div>
    <!--头部-->
    <header class="header" >
        <div class="logo">
              <h1>
                  <a href="javascript:;">
                      <img src="../../../../common/images/logo.png" alt="" >
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
         <div class="Shiwu_List" >
           <img src="./images/upsanjiao.png" alt="" @click="qq">
            <ul>
              <li class="active" v-for="(item, index) in homeData.homeNav" :key="index">{{item}}</li>
            </ul>
      </div>
      <div class="mask" v-show="isShow">
        <div class="white">
          <span>全部频道</span>
        <img src="./images/upsanjiao.png" alt="" @click="qq">
          <ul>
              <li>推荐</li>
              <li>好货内部价</li>
              <li>回购榜</li>
              <li>晒单</li>          
              <li>回购榜</li>
              <li>好货内部价</li>
              <li>晒单</li>          
              <li>回购榜</li>
              <li>晒单</li>          
              <li>回购榜</li>
              <li>晒单</li>
              <li>好货内部价</li>
              <li>好货内部价</li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow : false
      }
    },
    computed: {
      ...mapState({
        homeData: state=>state.home.homeDate
      })
    },
     mounted(){
      new Bscroll('.Shiwu_List',{
        scrollX:true
      })
    },
    methods:{
      qq(){
        this.isShow=!this.isShow
      }
    }
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
    .Shiwu_List
      overflow hidden
      font-size 20px
      height 60px
      width 554px
      img 
       position absolute
       left 652px
       top 104px
       //width 52px
       background white
      ul
        float left
        display flex
      li
        font-size 30px
        white-space nowrap
        margin 16px 19px
        .active
          color #B4282D
          border-bottom 3px solid #B4282D
  .mask
    background-clor rgba(0,0,0,.7)
    .white
      width 100%
      height 400px
      position absolute
      left 0px
      top 78px
      background white
      span
       width 163px
       font-size 30px
      img
       position absolute
       left 652px
       top 19px
      ul
       display flex
       flex-wrap wrap
      li
       border 1px solid #999
       width 150px
       height 50px
       line-height 50px
       text-align center
       margin 10px
       background #eee
</style>
