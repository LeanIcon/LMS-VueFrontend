import Vue from 'vue';
import Vuex from "vuex";
import { getAPI } from "../utils/axios-api";

const token = localStorage.getItem("access_token");

// const quiz_slug = $this.params.slug
console.log(token);
Vue.use(Vuex);

// import state from "./state";
// import * as getters from './getters';
// import * as mutations from "./mutations";
// import * as actions from "./actions";

import course from "./modules/course";
import user from "./modules/user/user";
// import lesson from "./modules/lesson";
import feedback from"./modules/feedback";
import practice_test from"./modules/practice_test";
 export default new Vuex.Store({
    modules: {
        course,
        user,
        // lesson,
        feedback,
        practice_test,

    },

    // state:{
    //     token: '',
    //     authUser: {}
    // },

    // mutations: {
    //     'SET_USER'(state, data){
    //         console.log("User")
    //         state.authUser = data
    //         console.log("Am here");
    //     },
    //     'SET_TOKEN'(state, data){
    //         console.log("Token")
    //         state.authUser = data
    //         console.log("Am here");
    //     }
    // },
    actions: {
        // loginUser({commit}) {
        //     console.log("Actions")
        //     commit('SET_USER', 'Curtis Blow')
        //     commit('SET_TOKEN', 'UserTokenjjodjfdjojaodfhoiahiohidagihfihiu98475848p99rfye')
        // },
        
        saveAnswer(context, userresponse){
            return new Promise((resolve, reject) => {
                getAPI
                .put(`/save-answer/`, {
                    headers: { Authorization: `Bearer ${token}` },
                    quizTaker: userresponse.quizTaker,
                    question: userresponse.question,
                    answer: userresponse.answer
                })
                .then(({status}) => {
                    console.log('testing from line:18')
                    if (status == 201) {
                    resolve(status);
                    }
                })
                .catch((err) => {
                    reject(err);
                    console.log("Check data not reading ref: actions.js >> course");
                });
            })
        }
    },
    // getters: {
    //     getUser(state){
    //         return state.authUser
    //     },
        
    //     getToken(state) {
    //         return state.authUser
    //     },
    // }
});
