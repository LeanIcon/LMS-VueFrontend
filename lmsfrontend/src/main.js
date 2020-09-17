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
import axios from 'axios'


const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 5000,
});

Vue.config.productionTip = false


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwMzg2OTY1LCJqdGkiOiI5NTdjNmQ5ZDYzODg0ZTVkOTI2MTQ2YTVlNTkxMjY1OSIsInVzZXJfaWQiOjF9.pD7n3uH9ETlR7RAPzbVilBeaMpAAdyYzuLvMo7b5rO0'
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

console.log(token)

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