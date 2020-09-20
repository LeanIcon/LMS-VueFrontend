import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

// import state from "./state";
// import * as getters from './getters';
// import * as mutations from "./mutations";
// import * as actions from "./actions";

import course from "./modules/course";
import user from "./modules/user/user";

 export default new Vuex.Store({
    modules: {
        course,
        user
    },

    state:{
        token: '',
        authUser: {}
    },

    mutations: {
        'SET_USER'(state, data){
            console.log("User")
            state.authUser = data
            console.log("Am here");
        },
        'SET_TOKEN'(state, data){
            console.log("Token")
            state.authUser = data
            console.log("Am here");
        }
    },
    actions: {
        loginUser({commit}) {
            console.log("Actions")
            commit('SET_USER', 'Curtis Blow')
            commit('SET_TOKEN', 'UserTokenjjodjfdjojaodfhoiahiohidagihfihiu98475848p99rfye')
        }
    },
    getters: {
        getUser(state){
            return state.authUser
        },
        
        getToken(state) {
            return state.authUser
        },
    }
});
