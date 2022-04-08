<template>
    <wang-panel  title="发现好歌单">
        <template #right><WangMore path="/" title="查看更多"/></template>
          <div ref="target" class="box">
            <transition name="fade">
                <swiper
                  :slides-per-view="3.2"
                  :space-between="10"
                >
                  <swiper-slide v-for="item in songlist" :key="item.id">
                    <router-link :to="`/geden/${item.id}`">
                      <img :src="item.picUrl">
                    </router-link>
                    <span class="n">
                      {{item.name}}
                    </span>
                    <div class="count">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-24gl-play"></use>
                      </svg>
                      <span>{{changeValue(item.playCount)}}</span>
                    </div>
                  </swiper-slide>
                </swiper>
            </transition>
          </div>
    </wang-panel>
</template>

<script>
import wangPanel from '@/components/wangyi/wang-panel.vue'
import WangMore from '@/components/wangyi/wang-more.vue'
import {  onMounted, ref, } from 'vue'
import { HomeSongList } from '@/api/home'
import { Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
  name: 'SongList',
  components: { wangPanel, WangMore, Swiper, SwiperSlide },
  setup () {
      let songlist = ref({})
      const changeValue = (num) => {
         let res = 0
         if(num>=100000000){
           res = num/10000
           res = res.toFixed(2) + '亿'
         }else if(num>10000){
           res = num/10000
           res = res.toFixed(2) + '万'
         } 
         return res
      }

      onMounted(() => {
        HomeSongList().then(res => {
          const { data } = res
          songlist.value = data.result
        })
      })
     
      return {
          modules: [ Scrollbar, A11y],
          changeValue,
          songlist
      };
  }
    
}
</script>

<style lang="less" scoped>
.box{
  position: relative;
  width: 7.5rem;
  z-index: 1;
  .swiper {
    position: relative;
      .swiper-slide {
        img {
          display: block;
          width: 100%;
          object-fit: cover;
          border-radius: 0.1rem;
          z-index: 1;
        }
        .count{
          position: absolute;
          right: 0.1rem;
          top: 0.08rem;
          font-size: 0.25rem;
          line-height: 0.5rem;
          color: #ccc;
          
        }
        .icon{
          margin-left: 0.05rem;
          width: 0.35rem;
          height: 0.22rem;
          color: #ccc;
          
        }
        span{
          // margin-top: 0.2rem;
          vertical-align: top;
        }
    }
  }
}

</style>