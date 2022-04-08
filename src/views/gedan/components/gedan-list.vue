<template>
    <div class="gedan-list">
        <div class="playItem" v-for="(item,i) in lists" :key="i" @click="index(i)">
            <div class="left">
                <div class="index">{{i+1}}</div>
                <div class="content">
                    <div class="title">{{item.name}}</div>
                    <div class="author">
                        <!-- <span v-for="(tag,index) in lists" :key="index">{{tag}}</span> -->
                        <span>{{item.al.name}}</span>
                    </div>
                </div>
            </div>
            <div class="rigth">
                <svg class="icon" aria-hidden="true" >
                    <use xlink:href="#icon-bofangshu"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sangedian"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: 'GedanList',
    props: {
        lists: {
            type: String,
            default: ''
        }
    },
    setup () {
        const store = useStore()
        const index = (num) => {
            store.commit('geden/setplay', num)
        }
        return {
            index
        }
    }
}
</script>

<style lang="less" scoped>
.gedan-list{
    width: 7.5rem;
    background: rgb(255, 255, 255);
    margin-top: 0.2rem;
    .playItem{
        width: 100%;
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        .left{
            width: 80%;
            display: flex;
            align-items: center;
            .index{
                color: rgb(197, 191, 191);
            }
            .content{
                margin-left: 0.3rem;
                .title{
                    font-size: 0.3rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box ;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .author{
                    font-size: 0.25rem;
                    color: rgb(197, 191, 191);
                }
            }
        }
        .rigth{
            align-items: center;
            margin-top: 0.4rem;
            .icon{
                width: 0.4rem;
                height: 0.4rem;
                margin-left: 0.2rem;
                fill: rgb(197, 191, 191);
            }
        }
    }
}
</style>