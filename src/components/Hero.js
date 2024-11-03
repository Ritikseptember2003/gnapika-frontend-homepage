import React from 'react';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 p-8 lg:p-16 overflow-hidden font-serif"> 
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-yellow-400 to-white opacity-20 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-yellow-400 to-white opacity-20 rounded-full translate-x-1/4 translate-y-1/4"></div>
      
      <div className="lg:flex items-center z-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4"> 
            Experience the <span className="text-red-500">Harmonious Fusion</span> of Indian Tradition and Modern Elegance
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mt-2">
            What are you looking for?
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start mt-6 space-x-2 space-y-2">
            {['Name Plates', 'Photo Frame', 'Keychains', 'Miniatures', 'Wooden Panels', 'Wall Hangings', 'Wooden Boxes'].map((item) => (
              <button key={item} className="px-4 py-2 border border-black text-black rounded-full bg-transparent hover:bg-black hover:text-white hover:border-transparent transition duration-300">
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center lg:justify-start mt-6 space-x-2">
            <div className="h-0.5 w-8 bg-gray-700"></div> 
            <a href="#explore-all" className="text-black text-lg hover:text-red-500 font-normal"> 
              Explore all
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-16">
          <img src={heroImage} alt="Decorative bowl" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
