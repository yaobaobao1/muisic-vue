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
            <div class="playcontent"></div>
            <div class="playlyric"></div>
            <div class="progress"></div>
            <div class="playfooter"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayMusic',
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.play-music{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    .t{
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
            left: 0;
            top: 0;
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
                color: rgb(185, 181, 181);
            }
        }
    }
}

</style>
