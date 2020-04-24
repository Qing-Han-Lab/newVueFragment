<template>
  <div class="index">
      <p class="index-content">index</p>
      <swiper class="swiper" ref="swiper1" :options="swiperOption">
          <swiper-slide>1</swiper-slide>
          <swiper-slide>2</swiper-slide>
          <swiper-slide>3</swiper-slide>
      </swiper>
      <button @click="goBack">返回home</button>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
export default {
  data(){
      return{
          swiperOption:{
              speed : 300
          }
      }
  },
  components : {
     Swiper,
     SwiperSlide
  },
  mounted(){
      this.speak();
  }
}
</script>

<style lang='scss' scoped>
.index{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f7f7f7;
    overflow: hidden;
    .index-content{
        color: red;
    }
    .swiper{
        width: 375px;
        height: 375px;
        background: lavender;
    }
}
</style>