import React, { useState, useEffect } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Multi Color Net Embroidered Bowls Set',
    price: '₹27,200',
    image: image1,
  },
  {
    id: 2,
    name: 'Green Quilted Wooden Bench',
    price: '₹17,500',
    image: image2,
  },
  {
    id: 3,
    name: 'Yellow Silk Blend Floral Embroidered Products',
    price: '₹12,500',
    image: image3,
  },
  {
    id: 4,
    name: 'Wine Pure Banaras Wooden Phone Case Set',
    price: '₹10,500',
    image: image4,
  },
];

const FeaturedProducts = ({ setCartCount }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to CartPage

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
      setCartCount(storedCart.length);
    }
  }, [setCartCount]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    navigate('/cart'); // Navigate to CartPage after adding an item
  };

  const renderCart = () => {
    return cart.map(item => (
      <div key={item.id}>
        <p>
          {item.name} - {item.price} - Quantity: {item.quantity}
        </p>
      </div>
    ));
  };

  return (
    <>
      <section className="py-16 bg-gray-100 shadow-md font-serif">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="#" className="text-lg text-gray-800 hover:text-gray-600 transition duration-300 flex items-center">
              View All <span className="ml-2">&rarr;</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product.id} className="text-center bg-white p-4 rounded-lg shadow-lg">
                <div className="relative w-full h-80 mb-4 overflow-hidden rounded-t-lg">
                  <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-normal mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-lg text-gray-700">{product.price}</p>
                  <button 
                    className="px-4 py-2 bg-pink-50 text-gray-800 border border-gray-300 rounded-full hover:bg-pink-100 hover:text-gray-900 transition duration-300"
                    onClick={() => addToCart(product)} // Add product to cart
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          {cart.length > 0 ? renderCart() : <p>Your cart is empty.</p>}
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
