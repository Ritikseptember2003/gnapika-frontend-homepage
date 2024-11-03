import React, { useEffect, useState } from 'react';
import { getCartItems, deleteCartItem } from '../api';

const CartPage = () => {
  const [cart, setCart] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true); 
      try {
        const items = await getCartItems(); 
        setCart(items); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveItem = async (itemId) => {
    try {
      await deleteCartItem(itemId);
      setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  if (loading) {
    return <p className="text-lg text-gray-700">Loading your cart...</p>;
  }

  const totalPrice = cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-16 bg-gray-100 shadow-md font-serif">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h2>
        {cart.length > 0 ? (
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item._id} 
                className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Price: ₹{parseFloat(item.price).toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg text-gray-700">Quantity: {item.quantity}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Total: ₹{(parseFloat(item.price) * item.quantity).toLocaleString('en-IN')}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item._id)} // Call remove handler
                    className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-700">Your cart is empty.</p>
        )}
        {cart.length > 0 && (
          <div className="flex justify-between items-center mt-10">
            <h3 className="text-xl font-semibold text-gray-900">
              Grand Total: ₹{totalPrice.toLocaleString('en-IN')}
            </h3>
            <button className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;