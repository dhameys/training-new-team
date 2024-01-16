import axios from 'axios'
// const baseURL = `https://admin.taran.dhameys.org`
// const baseURL = `http://192.168.100.103:8000`
const baseURL = 'http://localhost:8000'

// const baseURL = window.location.origin
const token = localStorage.getItem('atkC')
axios.defaults.baseURL = `${baseURL}/api`
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${token}`,
    Accept: 'application/json'
}

axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (error.response.status === 401 && window.location.pathname !== '/sign-in' && window.location.pathname !== 'sign-in') {
            window.location.href = 'sign-in?' + window.location.pathname
        }
        if (error.response.status === 307 && window.location.pathname !== '/maintenance') {
            window.location.href = 'maintenance'
        }

        return Promise.reject(error)
    }
)

axios.get(`${baseURL}/sanctum/csrf-cookie`)

export default axios
