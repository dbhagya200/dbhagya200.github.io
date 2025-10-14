
import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaBars, FaGithub } from 'react-icons/fa';
import logo from '../../public/img/bg3.png';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'resume', 'services', 'portfolio', 'contact'];
      const scrollY = window.pageYOffset + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
    // { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://x.com/bhagya_dil14146', icon: FaTwitter, name: 'Twitter' },
    { href: 'https://www.facebook.com/sanduni.bhagya.904', icon: FaFacebook, name: 'Facebook' },
    { href: 'https://github.com/dbhagya200', icon: FaGithub, name: 'GitHub' },
    { href: 'https://www.linkedin.com/in/dilini-bhagya-warnekulasooriya/', icon: FaLinkedin, name: 'LinkedIn' }
  ];

  return (
    
    <header 
      id="home" 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'h-20 bg-black/90' 
          : 'h-screen flex items-center'
      }`}
    >
      <div className={`container mx-auto px-4 h-full ${isScrolled ? 'flex items-center justify-between' : 'flex items-center justify-left'}`}>
        
        {!isScrolled ? (
          // Fullscreen header when not scrolled
          <div className="ml-15">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
              <a href="#home" className="text-white hover:text-white">
                Dilini Bhagya
              </a>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-raleway">
              I'm a passionate{' '}
              <span className="text-white border-b-2 border-[#18d26e] pb-1">
                Full-Stack Developer
              </span>{' '}
              
            </h2>

            <nav className="mb-12">
              <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-poppins">
                {navItems.map((item) => (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      className={`text-base md:text-lg transition-colors relative py-2 ${
                        activeSection === item.href.replace('#', '')
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.href.replace('#', '') && (
                        <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#18d26e] transition-all duration-300"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex justify-left gap-3 social-links">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#118a49] transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-sm md:text-base" />
                  </a>
                );
              })}
            </div>
          </div>
        ) : (
          // Compact header when scrolled
          <div className="flex items-center justify-between w-full">
            <h1 className="text-xl md:text-2xl font-bold text-white font-poppins">
              <img
                src={logo}
                alt="Logo"
                className="inline-block w-13 h-13 mr-1 p-1 rounded-full object-cover "
              />
              <a href="#header" className="text-white hover:text-white">
                Dilini Bhagya
              </a>
            </h1>

            <nav>
              <div className="flex items-center">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-6 font-poppins">
                  {navItems.map((item) => (
                    <li key={item.href} className="relative">
                      <a
                        href={item.href}
                        className={`transition-colors relative py-2 ${
                          activeSection === item.href.replace('#', '')
                            ? 'text-white'
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                        {activeSection === item.href.replace('#', '') && (
                          <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#18d26e] transition-all duration-300"></span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Mobile menu button */}
                <button
                  className="md:hidden text-white text-xl ml-4"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <FaBars />
                </button>
              </div>

              {/* Mobile menu */}
              {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 border-t border-white/20 backdrop-blur-sm">
                  <ul className="space-y-1 p-4 font-poppins">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className={`block px-4 py-3 rounded-md transition-colors ${
                            activeSection === item.href.replace('#', '')
                              ? 'text-[#18d26e] bg-white/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;