import axios from 'axios';

const api = axios.create({
  // Dev host
  baseURL: 'http://192.168.0.22:3333',
});

export default api;
