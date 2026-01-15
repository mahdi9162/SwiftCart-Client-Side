const { default: axios } = require('axios');

export const axiosInstance = axios.create({
  baseURL: 'https://swift-cart-server-side.vercel.app',
});
