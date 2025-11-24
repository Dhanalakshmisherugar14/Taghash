import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
   <footer id="contact" className="w-full bg-[#e6efff] border-t border-blue-200 text-gray-700">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo + About */}
          <div className="text-center md:text-left">
            <div className="flex-shrink-0 flex items-center cursor-pointer justify-center md:justify-start">
              <img 
                src={Logo} 
                alt="Taghash Logo" 
                className="h-16 w-auto object-contain" 
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
            <p className="text-sm leading-6 text-gray-600">
              Accreditation and compliance, made simple and secure.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a href="#" className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition">
                <FaGlobe size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex justify-center md:justify-center">
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#hero" className="hover:text-blue-600 transition">Home</a></li>
                <li><a href="#track-deadline" className="hover:text-blue-600 transition">Track Deadlines</a></li>
                <li><a href="#learn-compliance" className="hover:text-blue-600 transition">Learn Standards</a></li>
                <li><a href="#resources" className="hover:text-blue-600 transition">Resources</a></li>
                <li><a href="#accessibility-terms" className="hover:text-blue-600 transition">Accessibility Terms</a></li>
                <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left md:pl-20">
            <h3 className="font-semibold text-gray-900 mb-4">Mail Us</h3>
            <div className="flex items-start gap-2 text-sm justify-center md:justify-start">
              <EnvelopeIcon className="h-5 text-gray-500" />
              <p className="text-gray-600">compliance@taghash.com</p>
            </div>
            <div className="flex items-start gap-2 text-sm justify-center md:justify-start mt-2">
              <PhoneIcon className="h-5 text-gray-500" />
              <p className="text-gray-600">+91 800 123 4567</p>
            </div>
          </div>

          {/* Newsletter Input */}
          
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-gray-600">
          <p className="text-xs md:text-sm text-center md:text-left">© 2025 taghash Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0 justify-center text-sm">
            <a href="#" className="hover:text-blue-600 transition">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms</a>
            <a href="#" className="hover:text-blue-600 transition">Security</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
