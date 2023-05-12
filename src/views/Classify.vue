<template>
    <div class="content">
        <List :obj="foo" />
    </div>
    
    

    <Footer :index="1"/>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import Footer from '../components/Footer.vue';
import { getCategoryData } from '../service/api';
import List from '../components/List.vue';

let foo = reactive({
    list: []
})

onMounted(() => {
    getCategoryData().then(res => {
        console.log(res);

        foo.list = res.categoryData
    })
})
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