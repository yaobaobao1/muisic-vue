import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const GeDen = import('@/views/gedan/index.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/geden/:id',
    component: GeDen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

   // 每次切换路由的时候滚动到页面顶部
  scrollBehavior () {
    // vue2.0  x  y  控制
    // vue3.0  left  top 控制
    return { left: 0, top: 0 }
  }
})



export default router
