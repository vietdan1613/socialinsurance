import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081/api';

export const getSample = async () => {
  try {
    const response = await axios.get(`${API_URL}/sample`);
    return response.data;
  } catch (error) {
    console.error('Error getSample', error);
    throw error;
  }
};

export const register1 = async () => {
  try {
    const response = await axios.get(`${API_URL}/register`);
    return response.data;
  } catch (error) {
    console.error('Error register1', error);
    throw error;
  }
};

export const register2 = async () => {
  try {
    const response = await axios.get(`${API_URL}/register2`);
    return response.data;
  } catch (error) {
    console.error('Error register2', error);
    throw error;
  }
};