import state from "./state";
// import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default {
    namespaced: true,
    state,
    getters:{
        getLessons(state) {
            return state.courses.modules.lessons
        },
    },
    actions,
    mutations,
};