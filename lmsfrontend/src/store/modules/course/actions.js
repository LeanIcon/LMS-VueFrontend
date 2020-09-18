// import axious from 'axios'
// import { response } from 'express'
import { getAPI } from '../../../utils/axios-api';
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwMjQ3MjY5LCJqdGkiOiI2MTQ0MzkxNjBjMzA0MTFhYWZlNTE2ZjgwNjE5ZDRlMCIsInVzZXJfaWQiOjF9.DEG8P81YJlNqkZxYGbizwWKNQ9PrJZokPSLkK85YXzc';
const token = localStorage.getItem('accessToken');
// console.log("fuck this token :" + token)

export const getCourses = ({ commit }) => {
    getAPI.get('/api/courses/', { headers: { Authorization: `Bearer ${ token }`} } )
    .then(response => {
        commit('GET_COURSES', response.data)
        console.log(response.data)
    })
    .catch(err => {
        console.log(err)
        console.log('Check data not reading ref: actions.js course')
    })
}