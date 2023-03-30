import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    component: () => import('../views/Home/index.vue')
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router
