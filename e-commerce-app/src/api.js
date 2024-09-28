import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your API URL

export const fetchCustomers = () => axios.get(`${API_URL}/customers`);
export const fetchOrders = () => axios.get(`${API_URL}/orders`);
export const fetchCartItems = () => axios.get(`${API_URL}/cart`);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/customers/${id}`);
