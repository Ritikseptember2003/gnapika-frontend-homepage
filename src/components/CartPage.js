// src/components/CartPage.js

import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const renderCartItems = () => {
    return cart.map(item => (
      <div key={item.id} className="flex justify-between items-center p-4 border-b">
        <p>{item.name} - {item.price} - Quantity: {item.quantity}</p>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length > 0 ? renderCartItems() : <p>Your cart is empty.</p>}
    </div>
  );
};

export default CartPage;
