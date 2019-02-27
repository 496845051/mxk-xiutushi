import Vue from 'vue'
import Router from 'vue-router'
import Vuex from './store'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '',
      redirect: 'main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/pages/Main.vue'),
      children: [
        {
          path: '',
          redirect: 'task'
        },
        {
          path: 'task',
          name: 'task',
          component: () => import('@/pages/Task/List/Index.vue')
        },
        {
          path: 'goods',
          name: 'goods',
          component: () => import('@/pages/Goods/List/Index.vue')
        },
        {
          path: 'edit',
          name: 'edit',
          component: () => import('@/pages/Edit/Index.vue')
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/pages/User/Index.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/pages/User/Login/Index.vue'),
          meta: {
            ignoreAuth: true
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/pages/User/Register/Index.vue'),
          meta: {
            ignoreAuth: true
          }
        }
      ]
    }
  ]
})

// 设置跳转路由的权限，通过ignoreAuth判断该路由是否需要登录，为true则不需要
router.beforeEach((to, from, next) => {
  // 不需要登录权限
  if (to.meta.ignoreAuth) {
    next()
  } else {
    // 需要权限且已有登录状态
    if (Vuex.getters.GET_USER.token) {
      next()

      // 需要权限但无登录状态则跳转至登录页面
    } else {
      next('/user/login')
    }
  }
})
export default router
