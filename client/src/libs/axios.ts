import axios from 'axios'
import { useAuthStore } from '../store/auth'

const authApi = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true // Para recibir la cabecera
})

authApi.interceptors.request.use((config: any) => {
  const token = useAuthStore.getState().token;
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});


export default authApi