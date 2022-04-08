<template>
    <div class="gedan-play">
        <div class="playTop">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang1"></use>
                </svg>
                <div class="title">
                    <div class="ti">播放全部</div>
                    <div class="num">(共{{number.length}}首)</div>
                </div>
            </div>
            <div class="btn">
                + 收藏（{{change(type.subscribedCount)}}）
            </div>
        </div>
        <gedan-list :lists="number"/>
    </div>
</template>

<script>
import GedanList from './gedan-list.vue'
export default {
    name: 'GedanPlay',
    components: {
        GedanList
    },
    props: {
        type:{
            type: String,
            default: ''
        },
        number: {
            type: String,
            default: ''
        }
    },
    setup () {
        const change = (num) => {
            let res = 0
            if(num>=100000000){
                res = num/10000
                res = res.toFixed(2) + '亿'
            }else if(num>10000){
                res = num/10000
                res = res.toFixed(2) + '万'
            }else{
                res = num
            }
            return res
        }
        return{
            change
        }
    }
}
</script>

<style lang="less" scoped>
.gedan-play{
    width: 7.5rem;
    // height: 1rem;
    padding: 0 0.3rem;
    background: #fff;
    margin: 0 auto; 
    border-top-left-radius: 0.15rem;
    border-top-right-radius: 0.15rem;
    .playTop{
        display: flex;
        width: 98%;
        justify-content: space-between;
        align-items: center;
        .left{
            margin-top: 0.1rem;
            display: flex;
            height: 0.8rem;
            align-items: center;
            .icon{
                width: 0.5rem;
                height: 0.5rem;
            }
            .title{
                margin-left: 0.2rem;
                display: flex;
                align-items: center;
                .ti{
                    font-size: 0.35rem;
                    font-weight: 500;
                }
                .num{
                    font-size: 0.25rem;
                    color: rgb(180, 176, 176);
                }
            }
        }
        .btn{
            margin-top: 0.1rem;
            background-color: red;
            width: 3rem;
            height: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
            border-radius: 0.4rem;
            color: #fff;
        }
    }
}
</style>
