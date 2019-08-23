<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>  
</template>

<script type="text/ecmascript-6">
  import FooterGuide from 'components/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    },
    mounted(){
      // new BScroll('.wrapper',{
        //     scrollY: true,
        //     click: true
        // }),
        //  this.$nextTick(()=>{
    //      new BScroll(this.$refs.scrollwrap,{
    //          scrollX:true
    //      })
    //  })
        this.$store.dispatch('getHomeDate')
      this.$store.dispatch('getCategory')
    }
  } 
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
