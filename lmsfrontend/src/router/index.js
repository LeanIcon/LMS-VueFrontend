import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Landingpage.vue'
import Home2 from '../views/Home/Homepage.vue'
import Overview from '../views/Home/Overview.vue'
import CourseOverview from '../views/Home/CourseOverview.vue'
import CourseLesson from '../views/course/CourseLesson.vue'
import Homepage from '../views/Home/Classic.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    {
      path: "/dev/default",
      name: "Home2",
      component: Home2,
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
      meta: {
        requiresAuth: false,
        requiresLogin: false,
      },
    },
    {
      path: "/individual",
      name: "Individuals",
      component: () => import("../views/Home/Individual.vue"),
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
      path: "/course/overview",
      name: "CourseOverview",
      component: CourseOverview,
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
    },
    {
      path: "/500",
      name: "Error500",
      component: () => import("../views/error/500.vue"),
    },
    {
      path: "/reset",
      name: "Resetpassword",
      component: () => import("../views/user/Resetpassword.vue"),
      props: route => ({ query: route.query.token })
    },
    {
      path: "/accounts/activate/:header/:token_id",
      name: "ActivateAccount",
      component: () => import("../views/user/ActivateAccount.vue"),
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
      path: "/quizoverview/:quiz_id",
      name: "QuizOverview",
      component: () => import("../views/QuizOverview.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/results",
      name: "QuizResults",
      component: () => import("../views/quiz/QuizResults.vue"),
      meta: {
        requiresLogin: true,
        requiresAuth: true,
      }
    },
    {
      path: "/wrong-answers",
      name: "WrongAnswers",
      component: () => import("../views/quiz/WrongAnswers.vue"),
      meta: {
        requiresLogin: false,
        requiresAuth: false,
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
