<template>
    <div class="geden-xiang">
        <div class="gedenLeft">
            <router-link to='/'>
                <img class="imgs" :src="list.coverImgUrl" alt="">
            </router-link>
            <div class="count">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-24gl-play"></use>
                </svg>
                <span>{{change(list.playCount)}}</span>
            </div>
        </div>
        <div class="gedenright">
            <h3>{{list.name}}</h3>
            <div class="author">
                <img :src="lists.avatarUrl" alt="">
                <span>{{lists.nickname}} ></span>
            </div>
            <div class="description">
                {{list.description}}
            </div>
        </div>
    </div>
</template>

<script>
// import { useStore } from 'vuex'
export default {
    name: 'GeDenXiang',
    props: {
        lists: {
            type: String,
            default: ''
        },
         list: {
            type: String,
            default: ''
        }
    },
    setup() {
        // const store = useStore()
        // let lists = store.state.geden.list

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
.geden-xiang{
    margin: 0 auto; 
    width: 7.5rem;
    display: flex;
    justify-content: space-between;
    .gedenLeft{
        position: relative;
        width: 3.5rem;
        padding: 0.45rem 0;
        .imgs{
            width: 100%;
            border-radius: 0.1rem;
            // margin: 0.6rem 0.2rem 0.2rem 0.2rem;
        }
        .count{
            position: absolute;
            left: 1.6rem;
            top: 0.5rem;
            font-size: 0.25rem;
            line-height: 0.5rem;
            color: rgb(165, 165, 165);
            .icon{
                margin-left: 0.05rem;
                width: 0.35rem;
                height: 0.22rem;
                color: rgb(195, 195, 195);
            }
            span{
                // margin-top: 0.2rem;
                vertical-align: top;
            }
        }
    }
    .gedenright{
        width: 4rem;
        padding: 0.14rem;
        margin-left: 0.2rem;
        h3{
            color: #fff;
            font-size: 0.35rem;
        }
        .author{
            height: 0.8rem;
            position: relative;
            img{
                width: 0.8rem;
                border-radius: 50%;
            }
            span{
                // vertical-align: top;
                position: absolute;
                top: 0.2rem;
                left: 1rem;
                font-size: 0.27rem;
                font-weight: 100;
                color: rgb(188, 181, 181);
            }
        }
        .description{
            margin-top: 0.2rem;
            color: rgb(202, 199, 199);
            font-size: 0.25rem;
            font-weight: 100;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box ;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    
}
</style>