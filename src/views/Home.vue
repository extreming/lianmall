<template>
    <div class="content" @scroll="judgeSearch">

        <Search v-show="searchBarFlag" />

        <Swipe class="banner" :autoplay="2000" indicator-color="white">
            <SwipeItem v-for="(item, index) in bannerArray" :key="index">
                <img class="banner-img" :src="item.imgUrl" />
            </SwipeItem>
        </Swipe>

        <Swipe class="swipe" :loop="false" :width="240" :show-indicators="false">
            <SwipeItem v-for="(item, index) in swipeArray" :key="index">
                <div class="swipe-item">
                    <img class="swipe-img" :src="item.imgUrl" />
                </div>
            </SwipeItem>
        </Swipe>

        <div class="tags">
            <div class="tags-item" v-for="(item, index) in tagsArray" :key="index">
                <img :src="item.img" />
                <span>{{ item.text }}</span>
            </div>
        </div>

        <div class="hot-area">
            <div class="top">
                <div class="left">
                    <div class="item-top">
                        <span class="item-text">链猫秒杀</span>
                        <div class="clock">
                            <span class="time">8点场</span>
                            <span class="timer">
                                <CountDown :time="timer"/>
                            </span>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <div class="item" v-for="(item, index) in hotProduct" :key="index">
                            <img :src="item.img" />
                            <span class="price">{{ item.price }}</span>
                            <span class="price2">{{ item.price2 }}</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="item-top">
                        <div class="left-text">
                            <span class="item-text">发现好货</span>
                            <span class="item-text-bottom">好吃不贵</span>
                        </div>
                        <span class="item-text-tag">品质好物</span>
                    </div>
                    <div class="item-bottom">
                        <img src="../assets/img/home/demo4.png" alt="">
                        <img src="../assets/img/home/demo5.png" alt="">
                    </div>
                </div>
            </div>

            <div class="middle">
                <div class="item" v-for="(item, index) in spikeArray" :key="index">
                    <div class="title">{{ item.title }}</div>
                    <div class="desc" :class="[{ red: index === 1 }, { green: index === 3 }]">{{ item.desc }}</div>
                    <img :src="item.img" />
                </div>
            </div>

            <div class="bottom">
                <div class="left">
                    <div class="title">
                        <div class="text">大牌购走</div>
                        <div class="tag">戴尔></div>
                    </div>
                    <div class="desc">信赖大品牌</div>
                    <div class="img-box">
                        <img src="../assets/img/home/demo10.png" alt="">
                        <img src="../assets/img/home/demo11.png" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="title">
                        <div class="text">爱逛好店</div>
                        <div class="tag">懂你所要</div>
                    </div>
                    <div class="desc">来逛个够</div>
                    <div class="img-box">
                        <img src="../assets/img/home/demo12.png" alt="">
                        <img src="../assets/img/home/demo13.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <Tabs background="transparent" color="#D81819" title-active-color="#D81819" swipeable>
            <Tab  v-for="(item, index) in tabArray" :key="index">
                <template #title>
                    <div class="tab-title">
                        <div class="tab-title-text">{{ item.title }}</div>
                        <div class="tab-desc">{{ item.name }}</div>
                    </div>
                </template>
                <div class="tab-content">
                    <div class="goods-box" v-for="product in item.list">
                        <div class="img-box">
                            <img :src="product.img" />
                        </div>
                        <div class="price-box">
                            <div class="desc">{{ product.title }}</div>
                            <div class="price">
                                <span>{{ product.name }}</span>
                                <img src="../assets/icons/svg/add.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
        </Tabs>
    </div>

    <Footer :index="0" />
</template>

<script setup>
import Footer from '../components/Footer.vue'
import Search from '../components/Search.vue'
import { Swipe, SwipeItem, Tab, Tabs, CountDown, Sticky } from 'vant';
import { getSwipeUrl, getTags, getHotProducts } from '../utils/getImgUrl';
import { ref } from 'vue';
import { getHomeData } from '../service/api'
import { onMounted } from 'vue';

let bannerArray = ref([])

let swipeArray = ref([])

let tagsArray = ref([
    {
        img: getTags('chain-cat-boutique'),
        text: '链猫精品'
    },
    {
        img: getTags('cm-area'),
        text: 'CM专区'
    },
    {
        img: getTags('collar-cm'),
        text: '领CM币'
    },
    {
        img: getTags('coupon-svg'),
        text: '领券'
    },
    {
        img: getTags('chain-cat-member'),
        text: '链猫会员'
    }
])

let timer = ref(1000 * 60 * 60 * 9);

let hotProduct = ref([
    {
        img: getHotProducts('demo1'),
        price: '￥298',
        price2: '￥399'
    },
    {
        img: getHotProducts('demo2'),
        price: '￥298',
        price2: '￥399'
    },
    {
        img: getHotProducts('demo3'),
        price: '￥298',
        price2: '￥399'
    }
])

let spikeArray = ref([
    {
        title: '特价秒杀',
        desc: '10元抢购',
        img: getSwipeUrl('demo6')
    }, {
        title: '品牌秒杀',
        desc: '笔记本秒杀',
        img: getSwipeUrl('demo7')
    }, {
        title: '新品首发',
        desc: '小黑盒新品',
        img: getSwipeUrl('demo8')
    }, {
        title: '优品排行',
        desc: '榜上好物购',
        img: getSwipeUrl('demo9')
    },
])

let tabArray = ref([])

let searchBarFlag = ref(true);

function judgeSearch(e) {
    
    if (e.target.scrollTop > 150) {
        searchBarFlag.value = false;
    }
    if (e.target.scrollTop < 150) {
        searchBarFlag.value = true;
    }
}

onMounted(() => {
    getHomeData({ userId: 1008 }).then(res => {
        console.log(res);

        bannerArray.value = res.banners;
        swipeArray.value = res.banners2;
        tabArray.value = res.tabList;
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

.banner {
    margin-bottom: 10px;
}

.banner-img {
    width: 100%;
    height: 250px;
}

.swipe-item {
    padding-left: 16px;
}

.swipe-img {
    width: 222px;
    height: 90px;
    border-radius: 8px;
}

.tags {
    display: flex;
    justify-content: space-around;
    margin-top: 23px;

    .tags-item {
        width: 48px;
        height: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 43px;
        }

        span {
            font-size: 12px;
            color: #3a3a3a;
            margin-top: 5px;
        }
    }
}

.hot-area {
    width: 351px;
    margin: 12px;
    padding-top: 5px;
    height: 404px;
    background-color: #fff;
    border-radius: 8px;
    box-sizing: border-box;

    .top {
        display: flex;

        .left {
            width: 174px;
            height: 109px;
            padding: 12px;

            .item-top {
                display: flex;

                .item-text {
                    font-size: 14px;
                    font-weight: 600;
                    padding-right: 5px;
                }

                .clock {
                    display: flex;
                }

                .time {
                    display: inline-block;
                    width: 42px;
                    height: 20px;
                    background-color: #d8182d;
                    font-size: 12px;
                    text-align: center;
                    line-height: 20px;
                    color: #fff;
                }

                .timer {
                    display: inline-block;
                    width: 66px;
                    height: 18px;
                    border: 1px solid #ccc;
                    color: #d8182d;
                    font-size: 12px;
                    text-align: center;
                    line-height: 18px;
                }
            }

            .item-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    img {
                        height: 54px;
                    }

                    .price {
                        font-size: 12px;
                        color: #d8182d;
                        font-weight: 600;
                    }

                    .price2 {
                        font-size: 12px;
                        color: #949497;
                        text-decoration: line-through;
                    }
                }
            }
        }

        .right {
            flex: 1;
            height: 109px;
            padding: 12px;

            .item-top {
                display: flex;
                justify-content: space-around;

                .left-text {
                    display: flex;
                    flex-direction: column;

                    .item-text {
                        font-size: 14px;
                        font-weight: 600;
                        padding-right: 5px;
                        padding-right: 0;
                    }

                    .item-text-bottom {
                        color: #949497;
                        font-size: 12px;
                    }
                }

                .item-text-tag {
                    margin-left: 7px;
                    width: 64px;
                    border: 1px solid #d8182d;
                    font-size: 12px;
                    color: #d8182d;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    border-radius: 2px;
                }
            }

            .item-bottom {
                display: flex;
                justify-content: space-between;

                img {
                    width: 63px;
                }
            }
        }


    }

    .middle {
        display: flex;
        justify-content: space-around;
        padding-top: 20px;

        .item {
            width: 70px;
            text-align: center;

            .title {
                font-size: 14px;
                font-weight: 600;
                color: #3a3a3a;
            }

            .desc {
                font-size: 12px;
                color: #ff9351;
            }

            .red {
                color: rgb(221, 55, 73)
            }

            .green {
                color: rgb(145, 201, 91)
            }

            img {
                width: 70px;
                height: 70px;
            }
        }
    }

    .bottom {
        width: 351px;
        height: 141px;
        display: flex;
        justify-content: space-between;

        .left,
        .right {
            flex: 1;
            padding: 12px;

            .title {
                height: 31px;
                display: flex;
                align-items: flex-end;

                .text {
                    font-size: 14px;
                    font-weight: 600;
                    padding-right: 5px;
                    padding-right: 0;
                }

                .tag {
                    margin-left: 7px;
                    width: 64px;
                    border: 1px solid #d8182d;
                    font-size: 12px;
                    color: #d8182d;
                    height: 18px;
                    line-height: 18px;
                    text-align: center;
                    border-radius: 2px;
                }
            }

            .desc {
                color: #949497;
                font-size: 12px;
            }

            .img-box {
                img {
                    width: 70px;
                }
            }
        }

        .right {
            flex: 1;
            padding: 12px;
        }
    }
}

.tab-content {
    padding: 10px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-box {
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        margin-top: 10px;
        .img-box {
            width: 165px;
            height: 202px;

            img {
                width: 165px;
            }
        }
        
        .price-box {
            width: 145px;
            height: 50px;
            padding: 0 10px;
            .desc {
                font-size: 12px;
                color: #949497;
            }
            .price {
                display: flex;
                justify-content: space-between;
                align-items: center;
                span {
                    font-size: 12px;
                    color: #fff;
                    border-radius: 4px;
                    background-color: #d8182d;
                    line-height: 14px;
                    height: 14px;
                    padding: 2px 4px;
                }
                
                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
}

</style>

<style>
.van-tabs--line .van-tabs__wrap {
    height: 75px !important;
}
.tab-title {
    width: 65px;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.tab-title-text {
    color: rgb(58, 58, 58);
    font-size: 17px;
    font-weight: 600;
    padding-top: 20px;
}
.tab-desc {
    color: rgb(58, 58, 58);
    font-size: 12px;
}
.van-tab--active .tab-title-text, .van-tab--active .tab-desc {
    color: #D81819
}
.van-count-down {
    display: inline-block;
    width: 66px;
    height: 18px;
    color: #d8182d;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
}
</style>