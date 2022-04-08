<template>
    <div class="play-music">
        <div class="t">
            <div class="bg" :style="{ backgroundImage: `url(${type.al.picUrl})`}"></div>
            <div class="playtop">
                <div class="left">
                    <svg class="icon" aria-hidden="true" @click="$emit('back')">
                        <use xlink:href="#icon-jiantou"></use>
                    </svg>
                </div>
                <div class="center">
                    <div class="title"><marquee behavior="scroll" direction="left">{{type.name}}</marquee></div>
                    <div class="anthor">{{type.al.name}}</div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-fenxiang"></use>
                    </svg>
                </div>
            </div>
            <div class="playcontent" v-if="isLyric" @click="listlyric()">
                <img class="im" src="../../assets/needle-ab.png" alt="">
                <img class="img" src="../../assets/disc-plus.png">
                <img class="imgs" :src="type.al.picUrl" alt="">
            </div>
            <div class="playlyric" v-else @click="listlyric()">
                <div class="geci">
                    <p class="active" v-for="(item,i) in lyric" :key="i">
                        {{item.lyric}}
                    </p>
                </div>

            </div>
            <div class="progress"></div>
            <div class="playfooter">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xunhuan"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                    <use xlink:href="#icon-xiayigexiayishou"></use>
                </svg>
                <svg v-if="fag" class="icon play" aria-hidden="true" @click="play()">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <svg v-else class="icon play" aria-hidden="true" @click="play()">
                    <use xlink:href="#icon-zanting"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                    <use xlink:href="#icon-xiayigexiayishou1"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofangliebiao"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { lyricList} from './index'
export default {
    name: 'PlayMusic',
    props: {
        type: {
            type: String,
            default: ''
        },
        fag: {
            type: String,
            default: ''
        },
        play: {
            type: String,
            default: ''
        }
    },
    setup () {
        const isLyric = ref(true)
        const listlyric = () => {
            if(isLyric.value){
                isLyric.value = false
            }else{
                isLyric.value = true
            }
        }
        let lyric = computed(() => {
            return lyricList()
        })
        return {
            lyric,
            isLyric,
            listlyric,
        }
    }
}
</script>

<style lang="less" scoped>
.play-music{
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    width: 100%;
    height: 100%;
    background: rgb(253, 253, 253);
    border: 1px solid #000;
    overflow: hidden;
    .bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
    }
    .playtop{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 7.5rem;
        height: 1.2rem;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        top: 0.5rem;
        color: #fff;
        padding: 0 0.4rem;
        margin-top: 0.2rem;
        .icon{
            fill: #fff;
            width: 0.5rem;
            height: 0.5rem;
        }
        marquee{
            width: 5rem;
        }
        .anthor{
            font-size: 0.25rem;
            color: rgb(232, 229, 229);
        }
    }
    .playcontent{
        position: relative;
        .im{
            position: absolute;
            top: 3rem;
            left: 50%;
            transform: translate(-20%,-40%);
            width: 2rem;
            z-index: 3;
        }
        .img{
            position: absolute;
            top: 6.5rem;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 50%;
            width: 5.5rem;
            height: 5.5rem;
            z-index: 1;
            // border: 1px solid #000;
        }
        .imgs{
            position: absolute;
            top: 6.5rem;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            z-index: 1;
        }
    }
    .playlyric{
        width: 7.5rem;
        height: 10rem;
        color: #fff;
        position: relative;
        z-index: 10;
        top: 1.5rem;
        left: 50%;
        transform: translate(-50%);
        overflow: hidden;
        .geci{
            width: 7.9rem;
            height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
            padding: 0.2rem 0;
            p{
                overflow: hidden;
                width: 7.5rem;
                justify-content: center;
                display: flex;
                align-items: center;
                font-size: 0.25rem;
            }
        } 
    }
    .playfooter{
        width: 7.5rem;
        height: 1.5rem;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4rem;
        .icon{
            fill: #fff;
            width: 0.6rem;
            height: 0.6rem;
        }
        .play.icon{
            width: 1.2rem;
            height: 1.2rem;
        }
    }
}

</style>
