// src/api/base44Client.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const base44 = {
  get: axiosInstance.get.bind(axiosInstance),
  post: axiosInstance.post.bind(axiosInstance),
  put: axiosInstance.put.bind(axiosInstance),
  delete: axiosInstance.delete.bind(axiosInstance),

  entities: {
    Project: {
      list: (sort) => axiosInstance.get(`/entities/Project${sort ? `?sort=${sort}` : ''}`).then(r => r.data),
    },
    Review: {
      list: (sort) => axiosInstance.get(`/entities/Review${sort ? `?sort=${sort}` : ''}`).then(r => r.data),
    },
  },

  appLogs: {
    logUserInApp: (page) => axiosInstance.post(`/app-logs/${page}`).catch(() => {}),
  },
};