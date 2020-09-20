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
      component: () => import("../views/user/Signin.vue"),
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
      component: () => import("../views/user/Register.vue"),
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
      component: () => import("../views/user/Forgotpassword.vue"),
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
      path: "/course/register",
      name: "Courseregister",
      component: () => import("../views/course/Courses.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/course/confirm",
      name: "Courseconfirm",
      component: () => import("../views/course/Courseconfirm.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/courseintro",
      name: "Courseintro",
      component: () => import("../views/course/Courseintro.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/coursepage",
      name: "Coursepage",
      component: () => import("../views/course/Coursepage.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/practice",
      name: "Question",
      component: () => import("../views/Question.vue"),
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
