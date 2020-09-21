import { getAPI } from '../../../utils/axios-api';

const token = localStorage.getItem('access_token');

console.log(token);
export const getCourses = ({ commit }) => {
    getAPI.get('/api/courses/', { headers: { Authorization: `Bearer ${ token }`} } )
    .then(response => {
        commit('GET_COURSES', response.data)
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
        console.log('Check data not reading ref: actions.js >> course')
    })
}