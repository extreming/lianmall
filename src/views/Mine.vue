<template>
    <div  class="content">我的</div>
    <Footer :index="3"/>
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