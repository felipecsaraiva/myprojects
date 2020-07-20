import axios from 'axios';

const api = axios.create({
    baseURL: 'http://187.19.107.3:8079/rest',
    timeout: 3000,
    headers: {'Authorization': 'Basic d29ya2Zsb3c6LkRTTjkxOTBSRURFQC4='}
    
});

export default api;