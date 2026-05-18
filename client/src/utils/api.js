import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 8000,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPortfolioData = async () => {
  const { data } = await api.get('/api/portfolio');
  return data.data;
};

export const submitContactForm = async (formData) => {
  const { data } = await api.post('/api/contact', formData);
  return data;
};

export default api;
