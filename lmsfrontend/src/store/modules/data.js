// import Vue from "vue";
import axios from "axios";
import _ from "lodash";

export default {
    state: {
        lists: [],
        curatedLists: []
    },

    getters: {
        DATA: state => {
            return state.lists;
        },
    },

    mutations: {
        COURSE_DATA: (state, payload) => {
            state.lists = payload;
        },
    },
    
    actions: {
        GET_DATA: async ({ commit }) => {
            let { data } = await axios.get('/courses/');
            commit("COURSE_DATA", data);
            console.log(data)
        },
    }

}