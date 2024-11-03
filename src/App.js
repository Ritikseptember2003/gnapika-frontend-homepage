import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PopularCategories from './components/PopularCategories';
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer';
import CustomerReview from './components/CustomerReview';
import CartPage from './components/CartPage';
import { addCartItem, updateCartItem, deleteCartItem, getCartItems } from './api'; 

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); 

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const savedCart = await getCartItems();
        setCart(savedCart);
        setCartCount(savedCart.reduce((total, item) => total + item.quantity, 0));
        localStorage.setItem('cart', JSON.stringify(savedCart)); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []); 

  const addToCart = async (product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    let updatedCart;
  
    const quantity = existingProduct ? existingProduct.quantity + 1 : 1;
  
    const itemToAdd = {
      name: product.name,
      price: product.price.replace(/[^0-9.-]+/g, ''), 
      quantity: quantity,
      image: product.image,
      id: existingProduct ? existingProduct.id : undefined, 
    };
  
    console.log('Item to add:', itemToAdd); 
  
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.name === product.name ? { ...item, quantity } : item
      );

      await updateCartItem(existingProduct.id, { quantity }); 
    } else {
      updatedCart = [...cart, itemToAdd];
      const newItemResponse = await addCartItem(itemToAdd); 
      itemToAdd.id = newItemResponse.id;
    }
  
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  const handleRemoveItem = async (itemId) => {
    try {
      await deleteCartItem(itemId); 
      const updatedCart = cart.filter(item => item.id !== itemId); 
      setCart(updatedCart);
      setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0));
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FeaturedProducts addToCart={addToCart} />
                <PopularCategories />
                <PopularProducts addToCart={addToCart} />
                <CustomerReview />
                <Footer />
              </>
            }
          />
          <Route 
            path="/cart" 
            element={<CartPage cart={cart} onRemoveItem={handleRemoveItem} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;