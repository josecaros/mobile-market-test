import axios from 'axios';

const apiREST = axios.create({
  baseURL: process.env.API_URL||'http://localhost:3001',
})

export default apiREST