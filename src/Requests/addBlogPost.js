import axios from 'axios';


export const addBlogPost = (post) => axios.post('https://jsonplaceholder.typicode.com/posts', post);
