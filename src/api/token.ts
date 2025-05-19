import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_ARBITER_API_BASE_URL;
export const getOrganizationToken = async (organizationId: string, data: any) => {
    try {
        const url = `${API_BASE_URL}/widget/ticker/new/${organizationId}`;
        const response = await axios.post(url, data, {
            headers: { 'Content-Type': 'application/json' },
        });
        return response.data;
    } catch (error) {
        console.error('Error posting new ticker:', error);
        throw error;
    }
};
