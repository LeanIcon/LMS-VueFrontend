import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../../../utils/axios-api'

Vue.use(Vuex)

export default ({
    state: {
        accessToken: null,
        refreshToken: null,
        APIData: '',
        error: false,
    },
    mutations: {
        updateStorage(state, { access, refresh }) {
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken(state) {
            state.accessToken = null
            state.refreshToken = null
        }
    },
    actions: {

        userLogout(context) {
            if (context.getters.loggedIn) {
                context.commit('destroyToken')
            }
        },

        userLogin(context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/api-token/', {
                    email: usercredentials.email,
                    password: usercredentials.password
                })
                .then(response => {
                    // set token data to local storage
                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);
                    context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
                    resolve()
                })
                .catch(err => {
                    err = err.response.status
                    reject(err)
                })
            })
        },

        resetPassword(context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/api/password_reset/', {
                    email: usercredentials.email,
                })
                .then(({ status }) => {
                    if(status == 200){
                        resolve(status);
                    }
                })
                .catch(err => {
                    err = err.response.status
                    reject(err)
                })
            })
        },

        changePassword(context, usercredentials) {
            return new Promise((resolve, reject) => {
                getAPI.post('/api/password_reset/confirm/', {
                    token: usercredentials.token,
                    password: usercredentials.password,
                })
                .then(({ status }) => {
                    if(status == 200){
                        resolve(status);
                    }
                })
                .catch(err => {
                    reject(err);
                })
            })
        },

        userRegister(context, usercredentials){
            return new Promise((resolve, reject) => {
                getAPI.post('/api/users/', {
                    firstname: usercredentials.firstname,
                    lastname: usercredentials.lastname,
                    email: usercredentials.email,
                    password: usercredentials.password,
                    student_type: usercredentials.student_type
                })
                .then(({ status }) => {
                    if(status == 201){
                        // this.$notification.info("Your have been successfully registered, Check your email and activate your account", { infiniteTimer: false });
                        resolve(status);
                    }
                })
                .catch(err => {
                    // const errs = err.response.status
                    reject(err)
                })
            })
        }
        
    },
    getters: {
        loggedIn(state) {
            return state.accessToken != null
        },
        userToken(state) {
            return state.accessToken
        }
    },
})