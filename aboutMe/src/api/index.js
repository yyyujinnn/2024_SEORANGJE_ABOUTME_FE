import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'hhttps://port-0-seorangje-aboutme-be-2024-1ru12mlwc1mxvw.sel5.cloudtype.app/api',
  timeout: 5000,
  withCredentials: true,
});


export default axiosInstance