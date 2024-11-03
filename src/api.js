import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cart';

export const getCartItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error; 
  }
};

export const addCartItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    console.error("Error adding item to cart:", error);
    throw error; 
  }
};

export const updateCartItem = async (id, item) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, item); 
    return response.data;
  } catch (error) {
    console.error(`Error updating cart item with ID ${id}:`, error); 
    throw error; 
  }
};

export const deleteCartItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); 
    return response.data;
  } catch (error) {
    console.error(`Error deleting cart item with ID ${id}:`, error); 
    throw error; 
  }
};

export const clearCart = async () => {
  try {
    const response = await axios.delete(`${API_URL}/clear`);
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error; 
  }
};
