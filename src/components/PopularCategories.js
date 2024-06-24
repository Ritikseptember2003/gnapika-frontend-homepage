import React from 'react';
import category1 from '../assets/category1.png';
import category2 from '../assets/category2.png';
import category3 from '../assets/category3.png';
import category4 from '../assets/category4.png';
import category5 from '../assets/category5.png';
import category6 from '../assets/category6.png';
import category7 from '../assets/category7.png';
import category8 from '../assets/category8.png';

const categories = [
  { name: 'Simple', image: category1 },
  { name: 'Keychains', image: category2 },
  { name: 'Antiques', image: category3 },
  { name: 'Wood Display', image: category4 },
  { name: 'Hanging', image: category5 },
  { name: 'Photo Frames', image: category6 },
  { name: 'Indo-Western', image: category7 },
  { name: 'Sets', image: category8 },
];

const PopularCategories = () => {
  return (
    <section className="py-16 bg-gray-50 font-serif"> 
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <h2 className="text-3xl font-bold mx-4">Popular Categories</h2>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 flex items-end justify-center text-white text-xl font-normal bg-black bg-opacity-50 p-4">
                {category.name.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
