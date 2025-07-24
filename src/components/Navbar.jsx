// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-200">PerfectMatch</div>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#why" className="hover:text-red-700">Why Us</a>
          <a href="#process" className="hover:text-green-700">Process</a>
          <a href="#testimonials" className="hover:text-yellow-600">Testimonials</a>
          <button className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
