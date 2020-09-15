import Vue from 'vue'
import Vuex from 'vuex'
// import { getAPI } from '../utils/axios-api'
import Data from "./modules/data";

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    // },
    // mutations: {
    // },
    // getters: {
    // },
    // actions: {
    // }
    modules: {
        data: Data,
    }
})