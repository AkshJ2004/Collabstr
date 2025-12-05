import { auth } from './firebase';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper to get auth token
const getAuthToken = async () => {
    const user = auth.currentUser;
    if (user) {
        return await user.getIdToken();
    }
    return null;
};

// API request helper with auth
const apiRequest = async (endpoint, options = {}) => {
    const token = await getAuthToken();

    const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'API request failed');
    }

    return data;
};

// Auth API
export const authAPI = {
    verifyToken: () => apiRequest('/auth/verify'),
    syncUser: () => apiRequest('/auth/sync-user', { method: 'POST' }),
    getMe: () => apiRequest('/auth/me')
};

// Users API
export const usersAPI = {
    getAll: () => apiRequest('/users'),
    getById: (id) => apiRequest(`/users/${id}`),
    updateRole: (id, role) => apiRequest(`/users/${id}/role`, {
        method: 'PATCH',
        body: JSON.stringify({ role })
    }),
    updateProfile: (id, data) => apiRequest(`/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    })
};

// Health check
export const healthCheck = () => apiRequest('/health');

export default { authAPI, usersAPI, healthCheck };
