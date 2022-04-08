<template>
  <div v-cloak>
    <router-view/>
    <play-controller />
  </div>
</template>

<script>
import PlayController from '@/components/play-controller.vue'
export default {
  components: {
    PlayController
  }
}
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
  // box-shadow: 0;
  position: static;
}
[v-cloak]{
    display: none;
}
</style>