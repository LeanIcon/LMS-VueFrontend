import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Landingpage.vue'

Vue.use(VueRouter)

  const routes = [
    // ==============
    //    Route for homepage
    // ==============
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    // ==============
    //    Route for Signin page
    // ==============
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../views/Signin.vue"),
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    // ==============
    //    Route for Registration page
    // ==============
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    // ==============
    //    Route for Password Reset
    // ==============
    {
      path: "/forgotpassword",
      name: "Forgotpassword",
      component: () => import("../views/Forgotpassword.vue"),
      meta: {
        requiresAuth: true,
        requiresLogin: true,
      },
    },
    // ==============
    //    Route for User Dashboard
    // ==============
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("../views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
        requiresLogin: true,
      },
    },
    {
      path: "/question",
      name: "Question",
      component: () => import("../views/Question.vue"),
      meta: {
        requiresAuth: true,
        requiresLogin: true,
      },
    },
    {
      path: "/courseregister",
      name: "Courseregister",
      component: () => import("../views/Courseregister.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/courseconfirm",
      name: "Courseconfirm",
      component: () => import("../views/Courseconfirm.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/courseintro",
      name: "Courseintro",
      component: () => import("../views/Courseintro.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/coursepage",
      name: "Coursepage",
      component: () => import("../views/Coursepage.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
  ];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
