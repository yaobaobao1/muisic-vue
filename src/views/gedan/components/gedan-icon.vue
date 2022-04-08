<template>
    <div class="icon-list">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xinxi"></use>
            </svg>
            <span>{{iconlist.commentCount}}</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>{{iconlist.shareCount}}</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
            </svg>
            <span>下载</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duoxuanxuanzhong"></use>
            </svg>
            <span>多选</span>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: 'IconList',
    setup () {
        const store = useStore()
        let iconlist = store.state.geden.list

        return {
            iconlist
        }
    }
}
</script>

<style lang="less" scoped>
.icon-list{
    margin: 0 auto;
    width: 7.5rem;
    display: flex;
    height: 1.5rem;
    justify-content: space-between;
    padding-left: 0.4rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 0.6rem;
        .icon{
            width: 0.7rem;
            height: 0.7rem;
            fill: rgb(228, 226, 226);
        }
        .iconItem:first-child{
            margin-left: 1rem;
        }
        span{
            margin-top: 0.1rem;
            font-size: 0.25rem;
            font-weight: 100;
            color: #fff;
        }
    }
}
</style>