import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://test.spaceflightnewsapi.net/',
    // timeout: 1000,
  });

  export default axiosInstance;