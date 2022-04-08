<template>
    <div class="play-controller" >
        <div class="left" @click="show=!show">
            <img :src="list[Index].al.picUrl">
            <div class="contsnt">
                <div class="title"><marquee behavior="scroll" direction="left">{{list[Index].name}}</marquee></div>
                <div class="tips">横滑可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="fag" class="icon" aria-hidden="true" @click="play()">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play()">
                <use xlink:href="#icon-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofangliebiao"></use>
            </svg>
        </div>
        <play-music @back="show=!show" :type="list[Index]" v-show="show" :fag="fag" :play="play"/>
        <audio ref='audio' :src="`https://music.163.com/song/media/outer/url?id=${list[Index].id}.mp3`"></audio>
    </div>
</template>

<script>
import { computed, ref, watch, onMounted, onUpdated } from 'vue'
import { useStore } from 'vuex'
import PlayMusic from './wangyi/play-music.vue'
export default {
    name: 'PlayController',
    components: {
        PlayMusic
    },
    setup() {
        let show = ref(false)

        const store = useStore()
        let list = computed(() => {
            return store.state.geden.list.tracks
        })

        console.log(list.value);
        let Index = computed(() => {
            return store.state.geden.Index
        })
        let p = ref(Index)
        
        const audio = ref(null);
        let fag = ref(true)
        watch( p ,(n,o) => {
            if(n!=o){
                fag.value = true
            }
            store.dispatch('geden/replyric',{id:list.value[n].id})
        })
        const play = () => {
            if(audio.value.paused){
                audio.value.play()
                fag.value = false 
                // UpdateTime()
            }else{
                audio.value.pause()
                fag.value = true
                // clearInterval(store.state.geden.intervalId)
            }
        }
        
        // const UpdateTime = () => {
        //     store.state.geden.intervalId = setInterval(() => {
        //         store.commit('geden/setCurrentTime', audio.currentTime)
        //     },1000)
        // }
        // onMounted(UpdateTime())
        return{
            audio,
            play,
            fag,
            list,
            show,
            Index,
            // UpdateTime
        }
    }
}
</script>

<style lang="less" scoped>
.play-controller{
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    .left{
        display: flex;
        width: 60%;
        img{
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        }
        .contsnt{
            margin-top: 0.15rem;
            margin-left: 0.25rem;
            .title{
                font-size: 0.3rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box ;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                marquee{
                    width: 5rem;
                }
            }
            .tips{
                font-size: 0.25rem;
                color: rgb(197, 191, 191);
            }
        }

    }
    .right{
        padding-right: 0.4rem;
        .icon{
            height: 0.6rem;
            width: 0.6rem;
            margin-left: 0.2rem;
            fill: rgb(118, 114, 114);
            margin-top: 0.15rem;
        }
        
    }
}
</style>