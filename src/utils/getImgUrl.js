// 获取banner图片地址
export const getBannerUrl = (name) => new URL(`../assets/img/home/${name}.jpg`, import.meta.url).href
// 获取swipe图片地址
export const getSwipeUrl = (name) => new URL(`../assets/img/home/${name}.png`, import.meta.url).href
// 获取swipe图片地址
export const getSwipeUrl2 = (name) => new URL(`../assets/img/home/${name}.jpg`, import.meta.url).href
// 获取tags图标
export const getTags = (name) => new URL(`../assets/icons/svg/${name}.svg`, import.meta.url).href
// 获取秒杀商品
export const getHotProducts = (name) => new URL(`../assets/img/home/${name}.png`, import.meta.url).href