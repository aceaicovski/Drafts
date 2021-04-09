import axios from './axios';

export const getBlogPosts = () => axios.get('/api/v2/blogs');