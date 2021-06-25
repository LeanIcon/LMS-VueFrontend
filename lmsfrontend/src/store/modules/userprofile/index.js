import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../../../utils/axios-api'
Vue.use(Vuex)
const token = localStorage.getItem('access_token');

export default ({
    state: {
        userprofile: false,
        updateError: false,
        profileData: [],
        profileInfo: [],
        loading: true
    },
    mutations: {
        GET_PROFILE_DATA(state, profileData){
            state.profileData = profileData
        },
        GET_PROFILE_INFO(state, profileInfo){
            state.profileInfo = profileInfo
        }
    },
    actions: {
        fetchProfile({commit}){
                getAPI.get('/api/users/profile/1/', { headers: { Authorization: `Bearer ${ token }`} } )
                .then(response => {
                    commit('GET_PROFILE_DATA', response.data)
                    console.log(response.data)
                })
                .catch(err => {
                    // reject(err);
                    console.log(err)
                })
        },
        fetchInfo({commit}){
                getAPI.get('/api/current', { headers: { Authorization: `Bearer ${ token }`} } )
                .then(response => {
                    commit('GET_PROFILE_INFO', response.data)
                    console.log(response.data)
                })
                .catch(err => {
                    // reject(err);
                    console.log(err)
                })
        },
        userProfile(context, userprofile){
            return new Promise((resolve, reject) => {
                getAPI.patch('/api/users/profile/74/', {
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
                    // this.fetchProfile();
                    if(status == 201){
                        resolve(status);
                    }
                })
                // .then(this.fetchProfile())
                .catch(err => {
                    reject(err);
                    console.log(err)
                })
            })
        }
    },
    getters: {
        getprofileData: state => {
            return state.userprofile.profileData;
        },
        getuserInfo: state => {
            return state.userprofile.profileInfo;
        }
    },
})