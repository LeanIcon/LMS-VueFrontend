import axios from 'axios'

const getAPI = axios.create({
    // Unused due to database conflict
    // baseURL: 'https://lmslitt.herokuapp.com',
    // baseURL: 'https://littlmsapi.herokuapp.com',

    baseURL: 'https://littapi.herokuapp.com',

    timeout: 20000,
})
export { getAPI }