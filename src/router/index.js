import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import Register from "@/views/Register";
import Main from "@/views/Main";
import Subscriptions from "@/views/Subscription";
import profile from  "@/views/profile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/testimonials.vue')
  },
  {
    path: '/login',
    name:'Login',
    component: Login
  },
  {
    path: '/register',
    name:'Register',
    component: Register
  },
  {
    path: '/subscriptions',
    name:'Subscriptions',
    component: Subscriptions
  },
  {
    path: '/user/:userId',
    name:'Main',
    component: Main
  },
  {
    path: '/user/profile/:userId',
    name:'profile',
    component: profile 
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
