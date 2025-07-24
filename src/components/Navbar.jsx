import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Users, Shield, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-red-800 shadow-lg border-b border-red-800' 
        : 'bg-red-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Heart className="w-8 h-8 transition-all duration-300 text-yellow-300 group-hover:scale-110 group-hover:text-yellow-200" 
              fill="currentColor" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text text-transparent transition-all duration-300">
              PerfectMatch
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#why"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                isScrolled 
                  ? 'text-gray-200 hover:text-yellow-300 hover:bg-red-800/50' 
                  : 'text-gray-100 hover:text-yellow-200 hover:bg-red-800/50'
              }`}
            >
              <Shield className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Why Us</span>
            </a>

            <a
              href="#process"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                isScrolled 
                  ? 'text-gray-200 hover:text-yellow-300 hover:bg-red-800/50' 
                  : 'text-gray-100 hover:text-yellow-200 hover:bg-red-800/50'
              }`}
            >
              <Users className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Process</span>
            </a>

            <a
              href="#testimonials"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                isScrolled 
                  ? 'text-gray-200 hover:text-yellow-300 hover:bg-red-800/50' 
                  : 'text-gray-100 hover:text-yellow-200 hover:bg-red-800/50'
              }`}
            >
              <Star className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Testimonials</span>
            </a>
            
            {/* Login Button */}
            <button className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group" onClick={()=>navigate('/login')}>
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-200 hover:bg-red-800/50' 
                  : 'text-gray-100 hover:bg-red-800/50'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-red-700">
            <a
              href="#why"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-200 hover:text-yellow-300 hover:bg-red-800/50 transition-all duration-300 group"
            >
              <Shield className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Why Us</span>
            </a>

            <a
              href="#process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-200 hover:text-yellow-300 hover:bg-red-800/50 transition-all duration-300 group"
            >
              <Users className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Process</span>
            </a>

            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-200 hover:text-yellow-300 hover:bg-red-800/50 transition-all duration-300 group"
            >
              <Star className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-medium">Testimonials</span>
            </a>

            <div className="px-4 pt-2">
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"  onClick={()=>navigate('/login')}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;