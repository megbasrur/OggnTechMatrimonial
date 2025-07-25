import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Shield, Users, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-800 border-t border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 group mb-4">
              <div className="relative">
                <Heart className="w-8 h-8 transition-all duration-300 text-yellow-300 group-hover:scale-110 group-hover:text-yellow-200" 
                fill="currentColor" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                PerfectMatch
              </span>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Connecting hearts and creating lasting relationships through our trusted matchmaking service. <br /> Your perfect match awaits.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-red-700/50 text-gray-200 hover:text-yellow-300 hover:bg-red-700 transition-all duration-300 hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-red-700/50 text-gray-200 hover:text-yellow-300 hover:bg-red-700 transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-red-700/50 text-gray-200 hover:text-yellow-300 hover:bg-red-700 transition-all duration-300 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#why"
                  className="flex items-center space-x-2 text-gray-200 hover:text-yellow-300 transition-all duration-300 group text-sm"
                >
                  <Shield className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Why Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="flex items-center space-x-2 text-gray-200 hover:text-yellow-300 transition-all duration-300 group text-sm"
                >
                  <Users className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Our Process</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="flex items-center space-x-2 text-gray-200 hover:text-yellow-300 transition-all duration-300 group text-sm"
                >
                  <Star className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Premium Matchmaking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Profile Consultation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Relationship Coaching
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-yellow-300 transition-all duration-300 text-sm"
                >
                  Dating Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-200 group">
                <div className="p-2 rounded-lg bg-red-700/50 group-hover:bg-red-700 transition-all duration-300">
                  <Mail className="w-4 h-4 text-yellow-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-300">hello@perfectmatch.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-200 group">
                <div className="p-2 rounded-lg bg-red-700/50 group-hover:bg-red-700 transition-all duration-300">
                  <Phone className="w-4 h-4 text-yellow-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-200 group">
                <div className="p-2 rounded-lg bg-red-700/50 group-hover:bg-red-700 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-gray-300">123 Love Street, Romance City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;