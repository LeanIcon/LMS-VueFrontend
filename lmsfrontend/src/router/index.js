import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Landingpage.vue'
// import BasicLayout from '../views/BasicLayout.vue'
import CourseLesson from '../views/course/CourseLesson.vue'

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
    // {
    //   path: "/question",
    //   name: "Question",
    //   component: () => import("../views/Question.vue"),
    //   meta: {
    //     requiresAuth: true,
    //     requiresLogin: true,
    //   },
    // },
    
    {path: "/courses",name: "Courseregister",component: () => import("../views/course/Courses.vue")},
    {path: "/confirm",name: "Courseconfirm",component: () => import("../views/course/Courseconfirm.vue")},
    
    {
      path: '/course',
      component: CourseLesson,
      meta: {requiresAuth: true, requiresLogin: true},
      children: [
        {path: "/courseintro",name: "Courseintro",component: () => import("../views/course/Courseintro.vue")},
        {path: "/coursepage",name: "Coursepage",component: () => import("../views/course/Coursepage.vue")},
        {path: "/course/lesson/:id",name: "Lessonpage",component: () => import("../views/course/Lessonpage.vue")},
        
      ]
  },
    // {
    //   path: "/courseintro",
    //   name: "Courseintro",
    //   component: () => import("../views/course/Courseintro.vue"),
    // },
    // {
    //   path: "/coursepage",
    //   name: "Coursepage",
    //   component: () => import("../views/course/Coursepage.vue"),
    // },
    {
      path: "/skill",
      name: "Skill",
      component: () => import("../views/Skill.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/quiz/:slug",
      name: "Question",
      component: () => import("../views/Question.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/editprofile",
      name: "Editprofile",
      component: () => import("../views/user/Editprofile.vue"),
      meta: {
        requiresLogin: false,
        requiresAuth: false,
      }
    },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
