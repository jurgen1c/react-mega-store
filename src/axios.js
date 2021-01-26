import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-my--clone-6f40a.cloudfunctions.net/api'
    //'http://localhost:5001/my--clone-6f40a/us-central1/api' cloud function
});

export default instance;
