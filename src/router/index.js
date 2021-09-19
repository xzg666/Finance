import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from "@/utils/getinfo.js";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if (getToken()) {
    if (to.path == '/login'){
      next(from.path)
    }else{
      next()
    }
  }else{
    if (to.path == '/login') {
      next()
    }else{
      next('/login')
    }
  }
})

export default router
