import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://[2402:800:63a8:8872:c8fe:4ea0:dfd9:cc8e]:8081/api';

export const getSample = async () => {
  try {
    const response = await axios.get(`${API_URL}/sample`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sample data', error);
    throw error;
  }
};
