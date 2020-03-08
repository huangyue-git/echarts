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
    component: () => import(/* webpackChunkName: "find" */ '../views/find.vue'),
	children:[
			{"path":"/",redirect:'tuijian'},
			{"path":'tuijian',name:"tuijian",component:()=>import(/* webpackChunkName: "tuijian" */ '../views/tuijian.vue')},	
			{"path":'guanzhu',name:"guanzhu",component:()=>import(/* webpackChunkName: "guanzhu" */ '../views/guanzhu.vue')},
			{"path":'tongcheng',name:"tongcheng",component:()=>import(/* webpackChunkName: "tongcheng" */ '../views/tongcheng.vue')},
	]
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/mine.vue')
  },
  {
    path: '/myitem/:itemid',
    name: 'myitem',
    component: () => import(/* webpackChunkName: "myitem" */ '../views/myitem.vue')
  },
  {
    path: '/courseknow',
    name: 'courseknow',
    component: () => import(/* webpackChunkName: "courseknow" */ '../views/courseknow.vue')
  },
  {
    path: '/mygym/:gymid',
    name: 'mygym',
    component: () => import(/* webpackChunkName: "mygym" */ '../views/mygym.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
