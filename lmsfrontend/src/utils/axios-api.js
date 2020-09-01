import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'https://lmslitt.herokuapp.com',
    timeout: 10000,
})

export { getAPI }