import axios from 'axios';

const API = axios.create({ baseURL: 'https://api-test-web.agiletech.vn' });

export default API;