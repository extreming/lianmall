<template>
    <div class="content">购物车</div>
    <Footer :index="2"/>
</template>

<script setup>
import Footer from '../components/Footer.vue'
</script>

<style scoped lang="less">
.content {
    width: 100%;
    height: calc(100vh - 51px);
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
        /* Chrome Safari */
    }
}
</style>