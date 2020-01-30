import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3342'
})

export default api;