import axios from 'axios';

const API_KEY = import.meta.env.DPI_API_TOKEN
const API_URL = import.meta.env.DPI_API_URL

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})