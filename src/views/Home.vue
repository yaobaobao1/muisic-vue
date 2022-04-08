<template>
  <div class="home">
    <!-- 顶部 -->
    <header-nav />
    <!-- 轮播图 -->
    <banner />
    <!-- 图标列表 -->
    <icon-list />
    <!-- 发现歌单 -->
    <song-list />
  </div>
</template>

<script>
import HeaderNav from '@/components/header-nav.vue'
import Banner from '@/views/home/home-banner.vue'
import IconList from '@/views/home/home-icon-list.vue'
import SongList from '@/views/home/home-song-list.vue'
export default {
  name: 'HomeView',
  components: { HeaderNav, Banner, IconList, SongList }

}
</script>

<style lang="less" scoped>

</style>
