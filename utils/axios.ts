import axios from 'axios';
export const nasaClient = axios.create({
  baseURL: 'http://localhost:3000/',
});

export const currentYear = () => new Date().getFullYear();