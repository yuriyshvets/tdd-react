import axios, { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});

export default service;
