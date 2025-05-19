import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_ARBITER_API_BASE_URL;
export const getEvents = async (organizationToken: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/widget/ticker/${organizationToken}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};