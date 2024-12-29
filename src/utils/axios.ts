import axios from 'axios';

const api = axios.create({ baseURL: 'https://api-test-web.agiletech.vn' });

api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            localStorage.getItem('refreshToken')
        ) {
            originalRequest._retry = true;
            try {
                const response = await axios.post('/auth/refreshToken', {
                    refreshToken: localStorage.getItem('refreshToken'),
                });
                const { accessToken } = response.data;
                localStorage.setItem('accessToken', accessToken);
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/signin';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;