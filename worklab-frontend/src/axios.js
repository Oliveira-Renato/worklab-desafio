import axios from "axios";

// Cria uma instância do cliente Axios com uma configuração base
const axiosClient = axios.create({
    // Define a URL base para todas as requisições, utilizando uma variável de ambiente
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

export default axiosClient;
