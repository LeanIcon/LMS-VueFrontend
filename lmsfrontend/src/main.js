// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router/index'
import store  from './store'
import IdleVue from 'idle-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery-ui/ui/widgets/tooltip.js';
import 'popper.js/dist/umd/popper.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'font-awesome/css/font-awesome.min.css';
import VueSweetalert2 from 'vue-sweetalert2';
import VuePlyr from 'vue-plyr';
import VueNotification from "@kugatsu/vuenotification";
import VueTippy, { TippyComponent } from "vue-tippy";
import VueSanitize from "vue-sanitize";
// import Donut from 'vue-css-donut-chart';
// import 'vue-css-donut-chart/dist/vcdonut.css';


// Vue.use(Donut);
Vue.use(VueSanitize);
Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);
Vue.use(VueNotification, {
  timer: 10,
  error: {
    background: "red",
    color: "white",
  },
  success: {
    background: "green",
    color: "white"
  },
  info: {
    background: "white",
    color: "black"
  }
});

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended']
})

Vue.use(VueSweetalert2);  



// const store = new Vuex.Store({
//   ...
//   plugins: [vuexLocalStorage.plugin]
// });

const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 5000,
});

// console.log(accessToken)

Vue.config.productionTip = false

// const player = new Plyr('#player');

// const token = localStorage.getItem('access_token');
// if(token) {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresLogin)) {
    if (!store.getters.loggedIn) {
      next({ name: "Signin" });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");