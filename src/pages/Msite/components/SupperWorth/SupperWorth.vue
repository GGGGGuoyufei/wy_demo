<template>
  <div>
    <!--超值专区-->
    <div class="supperWorth" v-if="homeData.sceneLightShoppingGuideModule">
        <div class="on" v-for="(item, index) in homeData.sceneLightShoppingGuideModule" :key="index">
            <a href="javascript:;">{{item.styleItem.title}}</a>
            <p>{{item.styleItem.desc}}</p>
            <div >
                <img :src="(itemPic.picUrl)" v-for="(itemPic, index) in item.styleItem.itemPicBeanList"
                :key="index" alt="">
            </div>
            <!-- <div>
                <img :src="item.styleItem.backgroundUrl" alt="">
            </div> -->
        </div>
        
    </div>
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
    //超值专区
  .supperWorth
    width 750px
    height 560px
    padding 20px
    div
      float left
      padding  20px 0 5px 15px
      &.on
        border 5px solid white
        background #F5F5F5
        img 
         width  125px
         height 135px
      a
        color black
        font-size 40px
      p
        margin-top 20px
        font-size 20px
        color #7e8c8d
 
</style>
