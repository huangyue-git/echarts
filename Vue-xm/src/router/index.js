import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/Home'
  },
  {
    path: '/home',
    name: 'home',
	component: () => import(/* webpackChunkName: "mymain" */ '../views/Home.vue')
  },
  {
    path: '/find',
    name: 'find',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "find" */ '../views/find.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
