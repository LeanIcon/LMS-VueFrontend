import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../utils/axios-api'

Vue.use(Vuex)

export const store =  new Vuex.Store({
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
    getters: {
        loggedIn(state) {
            return state.accessToken != null
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
                    context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
                    resolve()
                })
                .catch(err => {
                    reject(err)
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
                        resolve(true);
                    }
                })
                .catch(err => {
                    reject(err);
                })
            })
        }
        
    }
})