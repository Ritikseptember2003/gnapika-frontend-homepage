import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PopularCategories from './components/PopularCategories';
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer';
import CustomerReview from './components/CustomerReview';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
      <PopularCategories />
      <PopularProducts />
      <CustomerReview />
      <Footer />
    </div>
  );
}

export default App;
