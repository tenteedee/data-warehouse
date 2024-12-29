import api from './axios';

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

export const login = async (username: string): Promise<LoginResponse> => {
    const response = await api.post('/auth/login', { username });
    return response.data;
};