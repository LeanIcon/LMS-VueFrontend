import axios from 'axios'
import NProgress from "vue-nprogress";
import Vue from "vue";
import LocalStorageService from "./token";
import router from "../router";


Vue.use(NProgress)

const nprogress = new NProgress()
const baseURL ='https://littapi.herokuapp.com'
// const baseURL ='http://127.0.0.1:9000'

const getAPI = axios.create({
    baseURL: baseURL,
    timeout: 20000,
})

export { getAPI }


// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
getAPI.interceptors.request.use(
  config => {
    let regex = /.*csrftoken=([^;.]*).*$/; // Used to match csrftoken value from cookie
    config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];

    nprogress.start()
    const token = localStorageService.getAccessToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config
  },
  error => {
      Promise.reject(error)
  });



//Add a response interceptor

getAPI.interceptors.response.use(
  (response) => {
    nprogress.done()
    return response;
  },
  async function(error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === `${baseURL}/auth-token`
    ) {
      router.push("/signin");
      return Promise.reject(error);
    }

    if (error.response.status === 403) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      const res = await getAPI.post("/api-token-refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        localStorageService.setToken(res.data);
        getAPI.defaults.headers.common["Authorization"] =
          "Bearer " + localStorageService.getAccessToken();
        return getAPI(originalRequest);
      }
    }

    if (error.response.status === 404) {
      console.log('404')
    }

    // if (error.response.status === 500) {
    //   router.push('/500')
    // }
    return Promise.reject(error);
  }
);