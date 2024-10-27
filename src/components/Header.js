import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ cartCount }) => { // Accept cartCount as a prop
  return (
    <header className="flex justify-between items-center p-6 bg-gray-50 shadow-md relative">
      <div className="flex items-center ml-4">
        <img src={logo} alt="Logo" className="h-16 sm:h-20 md:h-24" />
      </div>
      <nav className="flex space-x-8 text-lg font-semibold text-gray-900">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/about" className="hover:text-red-500">About Us</Link>
        <Link to="/products" className="hover:text-red-500">Products</Link>
        <div className="relative flex items-center">
          <Link to="/custom" className="hover:text-red-500 mr-2">Custom</Link>
          <span className="text-sm text-white bg-red-500 rounded-full px-2 py-0.5">New</span>
        </div>
        <Link to="/contact" className="hover:text-red-500">Contact Us</Link>
        <Link to="/shopping" className="hover:text-red-500">Shopping</Link> {/* Link to the shopping page */}
      </nav>
      <div className="flex items-center space-x-4 text-2xl mr-4">
        <button className="text-gray-600 hover:text-red-500">
          <i className="far fa-heart"></i>
        </button>
        <button className="text-gray-600 hover:text-red-500">
          <i className="far fa-user"></i>
        </button>
        <div className="relative">
          <Link to="/cart">
            <button className="text-gray-600 hover:text-red-500">
              <i className="fas fa-shopping-bag"></i>
            </button>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs text-white bg-red-500 rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
