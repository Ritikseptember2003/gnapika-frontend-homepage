import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PopularCategories from './components/PopularCategories';
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer';
import CustomerReview from './components/CustomerReview';
import CartPage from './components/CartPage';

function App() {
  const [cartCount, setCartCount] = useState(0); // State for cart count

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCount} />
        <Hero />
        <FeaturedProducts setCartCount={setCartCount} />
        <PopularCategories />
        <PopularProducts />
        <CustomerReview />
        <Footer />
      </div>

      <Routes>
        <Route path="/cart" element={<CartPage />} /> {/* Route for CartPage */}
      </Routes>
    </Router>
  );
}

export default App;
