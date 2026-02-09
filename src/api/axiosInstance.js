import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://69878cd38bacd1d773edb3bf.mockapi.io',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
export default axiosInstance;