import axios from './axios';

export const getArticleById = (id) => axios.get(`/api/v2/articles/${id}`);