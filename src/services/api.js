import axios from 'axios';

const BASE_URL = 'https://apitest.thewarriors.team/api';

// Configure Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

// Interceptor to attach token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email, password, remember_me) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('remember_me', remember_me ? 'true' : 'false');
    
    const response = await api.post('/login', formData);
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  register: async (userData) => {
    const formData = new FormData();
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });
    
    // Register typically returns an OTP or requires verification steps
    const response = await api.post('/register', formData);
    return response.data;
  },

  verifyOtp: async (email, otp) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('otp', otp);
    
    const response = await api.post('/verify_otp', formData);
    return response.data;
  },

  logout: async () => {
    await api.post('/logout');
    localStorage.removeItem('token');
  },
  
  getUserDetail: async () => {
    const response = await api.get('/user-detail');
    return response.data;
  }
};

export default api;
