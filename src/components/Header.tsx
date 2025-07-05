import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
            <Scissors className="h-8 w-8 text-yellow-500" />
            <span>Elite Cuts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-yellow-500 ${
                  isActive(item.path) ? 'text-yellow-500' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <Link
            to="/booking"
            className="hidden lg:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200"
          >
            Book Now
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-yellow-500 hover:bg-gray-700 ${
                    isActive(item.path) ? 'text-yellow-500 bg-gray-700' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 mt-4 text-gray-900 bg-yellow-500 hover:bg-yellow-400 rounded-md font-medium transition-colors duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;