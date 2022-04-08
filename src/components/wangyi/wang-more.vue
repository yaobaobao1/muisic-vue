<template>
    <router-link :to='path' class="wang-more">
        <span>{{title}}</span>
    </router-link>
</template>

<script>
export default {
  name: 'WangMore',
  props: {
    title: {
        type: String,
        default: ''
    },
    path: {
        type: String,
        default: '/'
    }
  }
}
</script>

<style lang="less" scoped>
.wang-more{
    color: #000;
    text-decoration: none;
    font-size: 0.25rem;
    align-items: center;
    margin-bottom: 0.28rem;
    padding: 0.07rem 0.15rem;
    border: 1px solid #ccc;
    border-radius: 0.4rem;
}
</style>
