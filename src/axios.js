import axios from 'axios';

const instance = axios.create({
    baseURL: '...' //cloud function
});

export default instance;