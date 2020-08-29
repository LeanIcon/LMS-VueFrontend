import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'http://127.0.0.1:1024',
    timeout: 200000,
})

export { getAPI }