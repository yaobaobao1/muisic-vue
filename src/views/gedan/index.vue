<template>
    <!-- 顶部 -->
    <gedan-top :list="list" />
    <!-- 详情 -->
    <geden-xiang :lists="list.creator" :list="list"/>
    <!-- 图标 -->
    <gedan-icon/>
    <!-- 播放 -->
    <gedan-play :type="list" :number="list.tracks"/>

</template>

<script>
import { onMounted, ref } from 'vue'
import { PlayListDetail } from '@/api/gedan'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import GedanTop from '@/views/gedan/components/gedan-top.vue'
import GedenXiang from '@/views/gedan/components/gedan-xiang.vue'
import GedanIcon from '@/views/gedan/components/gedan-icon.vue'
import GedanPlay from '@/views/gedan/components/gedan-play.vue'
export default {
    name: 'GeDan',
    components: {
        GedenXiang,
        GedanTop,
        GedanIcon,
        GedanPlay
    },
      setup () {
        let list = ref([])
        const route = useRoute()
        const store = useStore()
        onMounted(() => {
            PlayListDetail(route.params.id).then(res => {
                const { data } = res
                // console.log(res);
                list.value = data.playlist
                store.commit('geden/setUser', data.playlist)
            })
        })
        return {
            list
        }
    }
    
}
</script>

<style lang="less" scoped>

</style>