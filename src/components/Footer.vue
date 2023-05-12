<template>
    <div class="footer">
        <div class="item" :class="{ active: activeIndex === index }" v-for="(item, index) in arr" :key="item.id" @click="clickFn(index)">
            <img :src="activeIndex === index ? item.activeIcon : item.icon" alt="">
            <span>{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import home from '../assets/icons/tabbar/home.png';
// import home_active from '../assets/icons/tabbar/home_active.png';
// import classify from '../assets/icons/tabbar/classify.png';
// import classify_active from '../assets/icons/tabbar/classify_active.png';
// import cart from '../assets/icons/tabbar/cart.png';
// import cart_active from '../assets/icons/tabbar/cart_active.png';
// import mine from '../assets/icons/tabbar/mine.png';
// import mine_active from '../assets/icons/tabbar/mine_active.png';

let props = defineProps(['index'])
let activeIndex = ref(props.index);
const router = useRouter();

let arr = ref([
    {
        title: '首页',
        icon: getImageUrl('home'), 
        activeIcon: getImageUrl('home_active'),
        id: 1
    },{
        title: '分类',
        icon: getImageUrl('classify'),
        activeIcon: getImageUrl('classify_active'),
        id: 2
    },{
        title: '购物车',
        icon: getImageUrl('cart'),
        activeIcon: getImageUrl('cart_active'),
        id: 3
    },{
        title: '我',
        icon: getImageUrl('mine'),
        activeIcon: getImageUrl('mine_active'),
        id: 4
    }
])


function getImageUrl(name) {
  return new URL(`../assets/icons/tabbar/${name}.png`, import.meta.url).href
}

function clickFn(index) {
    activeIndex.value = index;
    switch (index) {
        case 0:
            router.push('/')
            break;
        case 1:
            router.push('/classify')
            break;
        case 2:
            router.push('/cart')
            break;
        case 3:
            router.push('/mine')
            break;
    
        default:
            break;
    }
}
</script>

<style scoped lang="less">
.footer {
    width: 100%;
    height: 50px;
    border-top: 1px solid #f8f8f9;
    background-color: #fff;
    display: flex;

    .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #949497;
        
        img {
            width: 18px;
        }

        span {
            margin-top: 5px;
        }
        &.active {
            color: #fe4f70;
        }
    }
    
}
</style>