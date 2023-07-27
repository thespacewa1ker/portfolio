import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:1337/api",
    headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
    },
});

// Categories
export const fetchCategories = async () => api.get('/categories');