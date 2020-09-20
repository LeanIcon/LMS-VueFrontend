import axios from 'axios'
import NProgress from "vue-nprogress";
import Vue from "vue";

Vue.use(NProgress);

const nprogress = new NProgress();

const getAPI = axios.create({
    // Unused due to database conflict
    // baseURL: 'https://lmslitt.herokuapp.com',
    // baseURL: 'https://littlmsapi.herokuapp.com',

    baseURL: 'https://littapi.herokuapp.com',

    timeout: 20000,
})

// before a request is made start the nprogress
getAPI.interceptors.request.use(config => {
  nprogress.start();
  return config
})

// before a response is returned stop nprogress
getAPI.interceptors.response.use(res => {
  nprogress.done();
  return res;
})

// export default getAPI

export { getAPI }