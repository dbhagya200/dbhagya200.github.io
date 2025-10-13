import React, { useState } from 'react';
import { FaPlus, FaLink } from 'react-icons/fa';
// import cocothumb from '../../../public/img/cocothumb.png';
import guppyzone from '../../../public/img/Guppy-Zone.png';
import echocart from '../../../public/img/EchoCart.png';
import medicare from '../../../public/img/MediCare.png';
import notes from '../../../public/img/notes.png';
import logistics from '../../../public/img/logistics.png';

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const portfolioItems = [
    { id: 1, category: 'web', title: 'Cocothumb Project', image:'public/img/cocothumb.png',Link:'https://github.com/dbhagya200/cocothumb' },
    { id: 2, category: 'web', title: 'Guppy-Zone Spring-Boot Project', image: `(${guppyzone})`,Link:'https://github.com/dbhagya200/Guppy-Zone-Project-New' },
    { id: 3, category: 'web', title: 'EchoCart JavaEE Project', image: `(${echocart})`,Link:'https://github.com/dbhagya200/AAD-Assignment-1' },
    { id: 4, category: 'web', title: 'MediCare HTML/PHP Project', image: `(${medicare})`,Link:'https://github.com/Pathum456/bhagya_project' },
    { id: 5, category: 'app', title: 'Notes-App React-Native Project ', image: `(${notes})`,Link:'https://github.com/dbhagya200/MY-Notes-MobileApp' },
    { id: 6, category: 'web', title: 'Logistics-Management React Project', image: `(${logistics})`,Link:'https://github.com/dbhagya200/Logistics-Management-System-FrontEnd' },
    // { id: 7, category: 'card', title: 'Card 1', image: '' },
    // { id: 8, category: 'card', title: 'Card 3', image: '' },
    // { id: 9, category: 'web', title: 'Web 3', image: '' },
  ];

  const filters = [
    { key: '*', label: 'All' },
    { key: 'app', label: 'App' },
    // { key: 'card', label: 'Card' },
    { key: 'web', label: 'Web' },
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-black/90 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-m uppercase tracking-wider text-gray-400 mb-2">Portfolio</h2>
          <div className="w-20 h-px bg-green-400 inline-block mb-4"></div>
          <p className="text-3xl font-bold text-white uppercase">My Works</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 rounded-full p-1">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold uppercase text-sm ${
                  activeFilter === filter.key
                    ? 'bg-green-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-black/60 portfolio-item"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center p-8 portfolio-info">
                <div className="text-center translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 relative w-full">
                  
                  {/* Border Animation */}
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  <div className="absolute top-4 left-4 right-4 bottom-4 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                  
                  <h4 className="text-white text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300 uppercase text-sm">{item.category}</p>
                  <div className="flex justify-center gap-4 mt-4 portfolio-links">
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-green-300 transition-colors portfolio-lightbox"
                    >
                      <FaPlus />
                    </a>
                    <a
                      href={item.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-2xl hover:text-green-300 transition-colors portfolio-details-lightbox"
                    >
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;