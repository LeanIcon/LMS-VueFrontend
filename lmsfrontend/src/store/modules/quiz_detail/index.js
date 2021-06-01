import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../../../utils/axios-api'
Vue.use(Vuex)
const token = localStorage.getItem('access_token');

export default ({
   state: {
      category_detail: [],
   },
   mutations: {
      GET_QUIZ_CATEGORY_DETAIL(state, quiz_category_detail){
         state.quiz_category_detail = quiz_category_detail
      },
   },
   actions: {
      fetchQuizCategoryDetail({commit}, slug){
         getAPI.get(`/quiz/category/${slug}/`, { headers: { Authorization: `Bearer ${ token }`} } )
         .then(response => {
            commit('GET_QUIZ_CATEGORY_DETAIL', response.data)
            console.log(response.data)
         })
         .catch(err => {
            console.log(err)
         })
      }
   },
   getters: {
      getquizcategorydetail: state => {
         return state.quiz_category_detail.category_detail;
      }
   },
})