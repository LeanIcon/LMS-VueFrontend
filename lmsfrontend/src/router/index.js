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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
<<<<<<< HEAD
    path: '/question',
    name: 'Question',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue')
=======
    path: '/courseregister',
    name: 'Courseregister',
    component: () => import('../views/Courseregister.vue'),
    // meta: {
    //   requiresLogin: true,
    //   requiresAuth: true,
    // }
  },
  {
    path: '/courseconfirm',
    name: 'Courseconfirm',
    component: () => import('../views/Courseconfirm.vue'),
    // meta: {
    //   requiresLogin: true,
    //   requiresAuth: true,
    // }
  },
  {
    path: '/courseintro',
    name: 'Courseintro',
    component: () => import('../views/Courseintro.vue'),
    // meta: {
    //   requiresLogin: true,
    //   requiresAuth: true,
    // }
  },
  {
    path: '/coursepage',
    name: 'Coursepage',
    component: () => import('../views/Coursepage.vue'),
    // meta: {
    //   requiresLogin: true,
    //   requiresAuth: true,
    // }
>>>>>>> ef123dbaa56e40c36f4007bda76cf2e37fd1c605
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
