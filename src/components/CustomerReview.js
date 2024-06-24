import React from 'react';
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png';

const CustomerReview = () => (
  <section className="py-16 bg-gray-50 flex justify-center font-serif"> 
    <div className="relative bg-white border border-black rounded-none shadow-lg p-8 w-10/12 md:w-5/6 lg:w-4/5">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8">
      
        <div className="flex flex-row space-x-4 mb-4 lg:mb-0">
          <img
            src={customer1}
            alt="Customer 1"
            className="w-48 h-48 md:w-64 md:h-64 rounded-none shadow-lg object-cover"
          />
          <img
            src={customer2}
            alt="Customer 2"
            className="w-48 h-48 md:w-64 md:h-64 rounded-none shadow-lg object-cover"
          />
        </div>
     
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-8 border-t-16 border-transparent border-t-gray-400"></div>
     
        <div className="flex flex-col items-center text-center lg:text-left max-w-md">
          <h2 className="text-3xl font-semi-boldbold mb-4">Customer Review</h2>
          <p className="text-lg italic text-gray-600 mb-4">
            "Really liked the Product's Quality and Finishing. I highly Recommend Gnapika to my friends."
          </p>
          <p className="text-lg font-semi-bold text-gray-800 self-end">- Kadala Sahithi</p>
          <button className="mt-4 px-4 py-2 border border-black text-black rounded-full bg-transparent hover:bg-black hover:text-white hover:border-transparent transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CustomerReview;
