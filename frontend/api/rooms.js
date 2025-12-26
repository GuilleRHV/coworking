import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL+'/rooms';
export const getRooms = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
}