<template>
    <div class="container">
        <div class="search-box">推荐搜索，关键词</div>
        <img :src="customerService" alt="">
    </div>
</template>

<script setup>

function getImageUrl(name) {
    return new URL(`../assets/icons/svg/${name}.svg`, import.meta.url).href
}

let customerService = getImageUrl('customer-service');

</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 40px;
    padding: 0 16px;
    box-sizing: border-box;
    margin-top: 10px;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    .search-box {
        width: 309px;
        height: 40px;
        background: #fff url(../assets/icons/svg/search.svg) 10px/16px 20px no-repeat;
        text-align: center;
        color: #e3e3e3;
        line-height: 40px;
        border-radius: 4px;
    }

    img {
        width: 24px;
        margin-left: 10px;
    }
}
</style>