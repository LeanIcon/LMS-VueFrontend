import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    // ==============
    //    Route for homepage
    // ==============
  {
    path: '/',
    name: 'Home',
    component: Home,
      meta: {
        requiresAuth: false,
      },
  },
    // ==============
    //    Route for Signin page
    // ==============
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
    meta: {
      requiresAuth: false,
    },
  },
    // ==============
    //    Route for Registration page
    // ==============
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      requiresAuth: false,
    },
  },
    // ==============
    //    Route for Password Reset
    // ==============
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    component: () => import('../views/Forgotpassword.vue'),
    meta: {
      requiresAuth: true,
    },
  },
    // ==============
    //    Route for User Dashboard
    // ==============
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    // meta: {
    //   requiresLogin: true,
    //   requiresAuth: true,
    // }
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
