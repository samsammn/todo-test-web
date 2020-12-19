import axios from 'axios'

const baseUrl = 'http://localhost:8000'

const api = {
    get(endpoint, params) {
        return axios.get(`${baseUrl}${endpoint}`, { params })
            .then((res) => res.data)
            .catch((err) => console.error(`Something wrong: ${err}`))
    },
    post(endpoint, payload) {
        return axios.post(`${baseUrl}${endpoint}`, payload)
        .then((res) => res.data)
        .catch((err) => console.error(`Something wrong: ${err}`))
    },
    put(endpoint, payload) {
        return axios.put(`${baseUrl}${endpoint}`, payload)
        .then((res) => res.data)
        .catch((err) => console.error(`Something wrong: ${err}`))
    },
    delete(endpoint, params) {
        return axios.delete(`${baseUrl}${endpoint}`, { params })
        .then((res) => res.data)
        .catch((err) => console.error(`Something wrong: ${err}`))
    }
}

export default api;