<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <h3>{{title}}</h3>
                <!-- 右上角插槽 -->
                <slot name="right" />
            </div>
            <!-- 默认插槽，面板内容 -->
            <slot />
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePanel',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="less" scoped>
.home-panel{
    width: 7.5rem;
    margin: 0 auto;
    padding-top: 0.12rem;
    .head{
        display: flex;
        align-items: flex-end;
        h3{
            flex: 1;
            font-size: 0.35rem;
            font-weight: 1000;
            margin-left: 0.2rem;
        }
    }
}
</style>