<template>
    <div class="top"> 
        <img :src="list.coverImgUrl" alt="">
        <div class="geden-top">
            <div class="gedebLeft">
                <router-link  to='/'>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiantou"></use>
                    </svg>
                </router-link>
                <span>歌单</span>
            </div>
            <div class="gedenright">
                <router-link to='/'>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </router-link>
                <router-link to='/'>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sangedian"></use>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
export default {
    name: 'GeDanTop',
    props: {
        list: {
            type: String,
            default: ''
        }
    },
    setup () {
    }
}
</script>

<style lang="less" scoped>
.top{
    width: 7.5rem;
    margin: 0 auto;
    img{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(100px);
    }
    .geden-top{
        position: relative;
        top: 0;
        margin: 0 auto;
        width: 7.5rem;
        display: flex;
        justify-content: space-between;
        // padding: 0 0.2rem;
        padding-top: 0.1rem;
        .icon{
            width: 0.45rem;
            height: 0.45rem;
            fill: #fff; 
        }
        span{
            vertical-align: top;
            margin-left: 0.5rem;
            font-size: 0.35rem;
            color: #fff;
        }
        .gedenright{
            .icon{
                margin-left: 0.3rem;
            }
        }
    }
}
</style>