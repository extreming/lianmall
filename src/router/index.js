import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Home.vue')
        },{
            path: '/classify',
            name: 'classify',
            component: () => import('../views/Classify.vue')
        },{
            path: '/cart',
            name: 'cart',
            component: () => import('../views/Cart.vue')
        },{
            path: '/mine',
            name: 'mine',
            component: () => import('../views/Mine.vue')
        },
    ]
})

export default router
