import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../../../utils/axios-api'
Vue.use(Vuex)
export default ({
    state: {
        userprofile: false
    },
    mutations: {
    },
    actions: {
        userFeedback(context, userprofile){
            return new Promise((resolve, reject) => {
                getAPI.put('/api/users/profile/', {
                    
                    avatar_url: userprofile.avatar_url,
                    bio: userprofile.bio, 
                    phone: userprofile.phone,
                    profession: userprofile.profession,
                    profession_info: userprofile.profession_info, 
                    education: userprofile.education, 
                    location : userprofile.location,
                    state_region: userprofile.state_region, 
                    linkedIn_address : userprofile.linkedIn_address,
                    facebook_address:userprofile.facebook_address,
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