import Vue from 'vue'
import Vuex from 'vuex'  

Vue.use(Vuex)

export default ({
    getters: {
        getLessons(state) {
            return state.course.modules.lessons
        },
    },
})