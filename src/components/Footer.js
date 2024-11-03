import React from 'react';
import logo from '../assets/logo.png';
import instagramImage1 from '../assets/image9.png';
import instagramImage2 from '../assets/image10.png';
import instagramImage3 from '../assets/image11.png';
import instagramImage4 from '../assets/image12.png';

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-800 py-10 font-serif">
      <div className="container mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 relative">
          <div className="lg:pr-8">
            <h2 className="text-xl font-semibold mb-4">
              Subscribe to <span className="text-red-500">our newsletter</span> and get updates on <span className="text-red-500">new arrivals</span>
            </h2>
            <div className="flex items-center bg-white rounded-full border border-black px-4 py-2 shadow-md max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your email address"
                className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:border-white rounded-l-full bg-transparent placeholder-gray-400 text-gray-700"
              />
              <button className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:pl-8">
            <h2 className="text-xl font-semibold mb-4">
              Follow us on Instagram
            </h2>
            <div className="grid grid-cols-4 gap-0.5">
              <img src={instagramImage1} alt="Instagram 1" className="w-28 h-28 object-cover" />
              <img src={instagramImage2} alt="Instagram 2" className="w-28 h-28 object-cover" />
              <img src={instagramImage3} alt="Instagram 3" className="w-28 h-28 object-cover" />
              <img src={instagramImage4} alt="Instagram 4" className="w-28 h-28 object-cover" />
            </div>
          </div>
          <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"></div>
        </div>

    
        <div className="border-t border-gray-300 mb-8"></div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <img src={logo} alt="Gnapika Logo" className="h-16 mb-4" />
            <p className="text-sm text-gray-600">
              We are a products brand that offers the best of contemporary, ethnic Indian fashion, and fusion-wear styles.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Wooden
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Non-wood
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Virtual
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">Vastram</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">
                  Payment Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">My Account</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">Login</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">Shopping Bag</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">Wishlist</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">Order Tracking</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition duration-300 ease-in-out">Order History</a>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="border-t border-gray-300 mt-8 pt-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2007 - 2023 Gnapika All Rights Reserved.
          </p>
          <p className="text-sm text-gray-600">
            We Ship Across the World
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
