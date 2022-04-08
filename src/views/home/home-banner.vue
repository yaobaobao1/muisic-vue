<template>
    <div class="block banner">
      <el-carousel height="3rem" arrow="never">
        <el-carousel-item  v-for="item in sliders" :key="item.id">
          <router-link to='/'>
          <img :src="item.pic" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>

import { HomeBanner } from '@/api/home'
import { onMounted, ref} from 'vue'

export default {
  name: 'Banner',
  setup() {
      let sliders = ref([])
      onMounted(() => {
        HomeBanner().then(res => {
          const { data } = res
          sliders.value = data.banners
        });
      })
      return {
          sliders
      };
  },
};
</script>

<style lang="less" scoped>
.banner{
  padding-left: 0.15rem;
  width: 7.5rem;
  margin: 0 auto;
  
  img{
    width: 98%;
    height: 100%;
    border-radius: 0.1rem;
  }
    /deep/ .el-carousel__indicator--horizontal .el-carousel__button {
    width: 0;
    
  }  
  /deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button{
    width: 0;
  }
}
</style>