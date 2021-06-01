import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../../../utils/axios-api'
Vue.use(Vuex)
const token = localStorage.getItem('access_token');

export default ({
    state: {
        quizzes: [],
    },
    mutations: {
        GET_QUIZ_CATEGORY(state, quiz_category){
            state.quiz_category = quiz_category
        },
    },
    actions: {
        fetchQuizCategory({commit}){
                getAPI.get('/quiz/category/', { headers: { Authorization: `Bearer ${ token }`} } )
                .then(response => {
                    commit('GET_QUIZ_CATEGORY', response.data)
                    console.log(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    getters: {
        getquizcategory: state => {
            return state.quiz_category.quizzes;
        }
    },
})