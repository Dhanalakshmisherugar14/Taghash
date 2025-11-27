import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/70 backdrop-blur-md px-8 py-4 sticky top-0 z-[1000] font-sans border-b border-gray-200">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="Taghash Logo" 
            className="h-16 w-auto object-contain" 
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6 list-none m-0 p-0 items-center whitespace-nowrap">
          <li><a href="#hero" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline">Home</a></li>
          <li><a href="#overview" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline">Overview</a></li>
          <li><a href="#timeline" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline">Timeline</a></li>
          <li><a href="#category" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline">Category</a></li>
          <li><a href="#requirements" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline">Requirements</a></li>
     
          <li><a href="#contact" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline">Contact</a></li>
        </ul>

        {/* Right Side: Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-transparent border border-gray-200 px-6 py-2.5 rounded-lg font-medium text-gray-700 cursor-pointer flex items-center gap-2 transition-all duration-300 text-[0.9rem] hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 hover:-translate-y-[1px] hover:shadow-md group">
             Start Now <span className="text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-8 flex flex-col gap-4">
          <a href="#hero" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#overview" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline" onClick={() => setIsOpen(false)}>Overview</a>
          <a href="#timeline" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline" onClick={() => setIsOpen(false)}>Timeline</a>
          <a href="#category" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline" onClick={() => setIsOpen(false)}>Category</a>
          <a href="#requirements" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline" onClick={() => setIsOpen(false)}>Requirements</a>
    
          <a href="#contact" className="text-gray-500 font-normal text-[0.9rem] transition-colors duration-300 hover:text-blue-700 no-underline" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-2.5 rounded-lg font-medium cursor-pointer flex items-center gap-2 transition-all duration-300 text-[0.9rem] shadow-md hover:shadow-lg hover:-translate-y-[1px] group w-full justify-center">
            Start Now <span className="text-[1.1rem] transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">&rarr;</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;