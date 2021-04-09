import axios from './axios';

export const getArticles = () => axios.get('/api/v2/articles');

