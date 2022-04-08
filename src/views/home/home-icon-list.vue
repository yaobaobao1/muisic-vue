<template>
    <div class="icon-list">
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-meirituijian"></use>
            </svg>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sirenFM1"></use>
            </svg>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-faxian_gedan"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paihangbang"></use>
            </svg>
            <span>排行榜</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IconList'
}
</script>

<style lang="less" scoped>
.icon-list{
    margin: 0 auto;
    width: 7.5rem;
    display: flex;
    height: 1.5rem;
    justify-content: space-between;
    padding-top: 0.1rem;
    padding-left: 0.4rem;
    .iconItem{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 0.6rem;
        .icon{
            width: 1.2rem;
            height: 1.2rem;
        }
        .iconItem:first-child{
            margin-left: 1rem;
        }
        span{
            font-size: 0.25rem;
        }
    }
}
</style>