import React from 'react';
import logo from '../assets/logo.png';
import { Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:py-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Branding - Left */}
          <div className="space-y-5 text-center md:text-left">
            <img src={logo} alt="Taghash" className="h-12 mx-auto md:mx-0" />

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Accreditation and compliance, made simple and secure.
            </p>
            
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources - Center */}
          <div className="mx-auto text-center md:text-left">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#track-deadline" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Track Deadlines
                </a>
              </li>
              <li>
                <a href="#learn-compliance" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Learn Standards
                </a>
              </li>
              <li>
                <a href="#resources" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Resources
                </a>
              </li>
              <li>
                <a href="#accessibility-terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Accessibility Terms
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact - Right */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="mailto:compliance@taghash.com" 
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  compliance@taghash.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="tel:+918001234567" 
                  className="text-sm hover:text-white transition-colors duration-300"
                >
                  +91 800 123 4567
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            © 2025 Taghash Pvt Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;