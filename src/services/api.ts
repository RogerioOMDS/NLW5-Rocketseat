import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.100.28:3333'
})

export default api

// json-server ./src/services/server.json --host 192.168.100.28 --port 3333