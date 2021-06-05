import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Landingpage.vue'
import Overview from '../views/Home/Overview.vue'
import CourseLesson from '../views/course/CourseLesson.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview,
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    {
      path: "/signin",
      name: "Signin",
      component: () => import("../views/user/Signin.vue"),
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/user/Register.vue"),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/forgotpassword",
      name: "Forgotpassword",
      component: () => import("../views/user/Forgotpassword.vue"),
      // meta: {
      //   requiresAuth: true,
      //   requiresLogin: true,
      // },
    },
    {
      path: "/reset",
      name: "Resetpassword",
      component: () => import("../views/user/Resetpassword.vue"),
      // meta: {
      //   requiresAuth: true,
      //   requiresLogin: true,
      // },
    },
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
      path: "/help",
      name: "Help",
      component: () => import("../views/Help.vue"),
      meta: {
        requiresAuth: true,
        requiresLogin: true,
      },
    },
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
    {
      path: "/skill",
      name: "Skill",
      component: () => import("../views/Skill2.vue"),
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
      path: "/test/",
      name: "Test",
      component: () => import("../views/quiz/quizPage.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/quizdetail/:slug",
      name: "QuizDetail",
      component: () => import("../views/QuizDetail.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/quizoverview",
      name: "QuizOverview",
      component: () => import("../views/QuizOverview.vue"),
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
