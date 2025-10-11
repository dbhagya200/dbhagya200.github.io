import React from 'react';
import { FaBasketballBall, FaFile, FaTachometerAlt, FaGlobe, FaSlidersH, FaArchway } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: FaBasketballBall,
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'
    },
    {
      icon: FaFile,
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
    },
    {
      icon: FaTachometerAlt,
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    {
      icon: FaGlobe,
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
    },
    {
      icon: FaSlidersH,
      title: 'Dele cardo',
      description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur'
    },
    {
      icon: FaArchway,
      title: 'Divera don',
      description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black/90 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Services</h2>
          <div className="w-20 h-px bg-green-400 inline-block mb-4"></div>
          <p className="text-3xl font-bold text-white uppercase">My Services</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white/8 rounded-lg p-12 text-center hover:bg-green-500 transition-all duration-300 group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto flex items-center justify-center group-hover:bg-white transition-colors relative">
                    <IconComponent className="text-2xl text-white group-hover:text-green-500 transition-colors" />
                    <div className="absolute -inset-2 bg-white/15 rounded-lg -z-10 group-hover:bg-green-400 transition-colors"></div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-white">
                  <a href="#" className="hover:text-white">
                    {service.title}
                  </a>
                </h4>
                <p className="text-gray-300 group-hover:text-white">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;