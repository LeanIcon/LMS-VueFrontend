import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../../../utils/axios-api'
Vue.use(Vuex)
export default ({
    state: {
        feedbacksent: false
    },
    mutations: {
    },
    actions: {
        userFeedback(context, feedback){
            return new Promise((resolve, reject) => {
                getAPI.post('/api/feedback/', {
                    rating: feedback.rating,
                    message: feedback.message,
                    course: feedback.course,
                })
                .then(({ status }) => {
                    if(status == 201){
                        resolve(status);
                    }
                })
                .catch(err => {
                    reject(err);
                    console.log(err)
                })
            })
        }
    },
    getters: {
    },
})