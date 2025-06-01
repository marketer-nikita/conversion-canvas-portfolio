
import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          {/* Name and Title */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Alex Morgan
            </h3>
            <p className="text-gray-600">
              Performance Marketing Specialist
            </p>
          </div>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a 
              href="mailto:alex.morgan@example.com" 
              className="flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              <Mail size={16} className="mr-2" />
              alex.morgan@example.com
            </a>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              Remote / New York, NY
            </div>
          </div>
          
          {/* Social Link */}
          <div className="flex justify-center">
            <a 
              href="https://linkedin.com/in/alexmorgan" 
              className="inline-flex items-center text-gray-600 hover:text-pink-500 transition-colors duration-200"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Alex Morgan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
