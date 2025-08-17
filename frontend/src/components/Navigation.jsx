import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h3 className="font-serif font-bold text-2xl text-black mb-0">
              À La Braise
            </h3>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-900 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('concept')}
                className="text-gray-900 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Notre Concept
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-900 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                La Carte
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-900 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-900 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact info desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>06 03 10 37 92</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Montpellier</span>
            </div>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-black p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-gray-900 hover:text-black px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('concept')}
                className="block w-full text-left text-gray-900 hover:text-black px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Notre Concept
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left text-gray-900 hover:text-black px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                La Carte
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-gray-900 hover:text-black px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-900 hover:text-black px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <div className="border-t pt-2">
                <div className="flex items-center px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>06 03 10 37 92</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;