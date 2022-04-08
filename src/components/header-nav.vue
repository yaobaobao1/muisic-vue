<template>
    <div class="topNav">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
        <div class="topCenter">
            <span class="navBtn">我的</span>
            <span class="navBtn active" >发现</span>
            <span class="navBtn">云村</span>
            <span class="navBtn">视频</span>
        </div>
        <div class="topRight">
            <svg class="icon search" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style lang="less" scoped>
.topNav{
    width: 7.5rem;
    height: 0.8rem;
    display: flex;
    justify-content: space-between;  //平均分布
    align-items: center;
    margin: 0 auto;
    padding-left: 0.1rem;
    .icon{
        width: 0.45rem;
        height: 0.45rem;
    }
    .search{
        width: 0.45rem;
        height: 0.45rem;      
    }
    .topCenter{
        width: 4.8rem;
        display: flex;
        font-size: 0.3rem;
        justify-content: space-around;
        .active{
            font-weight: 900;
        }
    }
}
</style>