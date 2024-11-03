import React from 'react';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Multi Color Net Embroidered Decor Set',
    price: '₹7,500',
    image: image5,
  },
  {
    id: 2,
    name: 'Embroidered Indian Wooden Mirror Bowls',
    price: '₹25,700',
    image: image6,
  },
  {
    id: 3,
    name: 'Green Wooden Embroidered Hooks Set',
    price: '₹22,800',
    image: image7,
  },
  {
    id: 4,
    name: 'Pink Silk Floral Embroidered Table Set',
    price: '₹11,500',
    image: image8,
  },
];

const PopularProducts = ({ addToCart }) => {

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section className="py-16 bg-gray-100 shadow-md font-serif">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <Link 
            to="#" 
            className="text-lg text-gray-800 hover:text-gray-600 transition duration-300 flex items-center" 
            aria-label="View all popular products"
          >
            View All <span className="ml-2">&rarr;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center bg-white p-4 rounded-lg shadow-lg">
              <div className="relative w-full h-80 mb-4 overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-normal mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <p className="text-lg text-gray-700">{product.price}</p>
                <button
                  className="px-4 py-2 bg-pink-50 text-gray-800 border border-gray-300 rounded-full hover:bg-pink-100 hover:text-gray-900 transition duration-300"
                  onClick={() => handleAddToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
