import axios from 'axios';
import { showFailToast, showToast } from 'vant';
import router from '../router';

console.log('import.meta.env.MODE', import.meta.env.MODE)

const instance = axios.create({
    baseURL: import.meta.env === 'devlopment' ? 'https://lianmall.usemock.com' : 'https://lianmall.usemock.com',
    timeout: 1000,
    headers: [
        {'X-Token': sessionStorage.getItem('token')},
        {'Content-Type': 'application/json'}
    ]
})

instance.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        showFailToast('服务端异常！')
        return Promise.reject(res)
    }

    if (res.data.code !== 200) {
        if (res.data.message) showFailToast(res.data.message)
        if (res.data.code === 416) {
            router.push({ path: '/login' })
        }
        if (res.data.data && window.location.hash === '#/login') {
            sessionStorage.setItem('token', res.data.token)
        }
        return Promise.reject(res.data)
    }

    return res.data
})

export default instance