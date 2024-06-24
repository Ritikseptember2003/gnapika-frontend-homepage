import React from 'react';
import logo from '../assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-50 shadow-md relative">
      <div className="flex items-center ml-4">
        <img src={logo} alt="Logo" className="h-16 sm:h-20 md:h-24" /> 
      </div>
      <nav className="flex space-x-8 text-lg font-semibold text-gray-900"> 
        <a href="#hero" className="hover:text-red-500">Home</a>
        <a href="#about" className="hover:text-red-500">About Us</a>
        <a href="#products" className="hover:text-red-500">Products</a>
        <div className="relative flex items-center">
          <a href="#custom" className="hover:text-red-500 mr-2">Custom</a>
          <span className="text-sm text-white bg-red-500 rounded-full px-2 py-0.5">New</span>
        </div>
        <a href="#contact" className="hover:text-red-500">Contact Us</a>
      </nav>
      <div className="flex items-center space-x-4 text-2xl mr-4">
        <button className="text-gray-600 hover:text-red-500">
          <i className="far fa-heart"></i>
        </button>
        <button className="text-gray-600 hover:text-red-500">
          <i className="far fa-user"></i>
        </button>
        <div className="relative">
          <button className="text-gray-600 hover:text-red-500">
            <i className="fas fa-shopping-bag"></i>
          </button>
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs text-white bg-red-500 rounded-full px-2">4</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
