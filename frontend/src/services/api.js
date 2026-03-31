import axios from 'axios';
import { getTenant } from './mapper';
//const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081/api';

export const getSample = async (tenant) => {
  try {
    const response = await axios.get(`${getTenant(tenant)}/sample`);
    return response.data;
  } catch (error) {
    console.error('Error getSample', error);
    throw error;
  }
};

export const getAllRegister = async (tenant) => {
  try {
    const response = await axios.get(`${getTenant(tenant)}/getregister`);
    return response.data;
  } catch (error) {
    console.error('Error getSample', error);
    throw error;
  }
};

export const register1 = async (data, tenant) => {
  try {
    const response = await axios.post(`${getTenant(tenant)}/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error register1', error);
    throw error;
  }
};
