import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/auth/Login'
import Logout from '@/pages/auth/Logout'
import Home from '@/pages/home/Index'
import NotFound from '@/errors/404'

import store from '@/store'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound,
            meta: { isPublic: true },
        },
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: { isPublic: true },
        },
        {
            path: '/auth/login',
            name: 'auth/login',
            component: Login,
            meta: { isPublic: true },
        },
        {
            path: '/auth/logout',
            name: 'auth/logout',
            component: Logout,
        },
        {
            path: '/home',
            name: 'home/index',
            component: Home,
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((page) => page.meta.isPublic) || store.state.auth.token) {
        next()
    } else {
        next({
            path: '/auth/login',
            query: { redirect: to.fullPath },
        })
    }
})

export default router
