import axios from 'axios'
import NProgress from "vue-nprogress";
import Vue from "vue";
import LocalStorageService from "./token";
import router from "../router";


Vue.use(NProgress);

// const nprogress = new NProgress();

const getAPI = axios.create({
    // Unused due to database conflict


    baseURL: 'http://127.0.0.1:9000',
    // baseURL: 'https://littapi.herokuapp.com',
    timeout: 20000,
})

// // before a request is made start the nprogress
// getAPI.interceptors.request.use(config => {
//   nprogress.start();
//   return config
// })

// // before a response is returned stop nprogress
// getAPI.interceptors.response.use(res => {
//   nprogress.done();
//   return res;
// })

// export default getAPI

export { getAPI }


// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
getAPI.interceptors.request.use(
   config => {
       const token = localStorageService.getAccessToken();
       if (token) {
           config.headers['Authorization'] = 'Bearer ' + token;
       }
      //  config.headers['Content-Type'] = 'application/json';
      console.log('Debug :50')
       return config;
   },
   error => {
       Promise.reject(error)
       console.log('Debug :55')
   });



//Add a response interceptor

getAPI.interceptors.response.use(
  (response) => {
    console.log("Debug :63");
    return response;
  },
  async function(error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "https://littapi.herokuapp.com/auth-token"
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
      console.log("401 here i come: axios-api line: 81");
      if (res.status === 200) {
        localStorageService.setToken(res.data);
        getAPI.defaults.headers.common["Authorization"] =
          "Bearer " + localStorageService.getAccessToken();
          console.log('Debug success')
        return getAPI(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);