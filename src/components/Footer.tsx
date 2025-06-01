
import React from 'react';
import { Heart, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Alex Morgan
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Performance marketing specialist helping businesses grow through data-driven campaigns 
              and strategic optimization across Google Ads, Meta Ads, and B2B lead generation.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:alex.morgan@example.com" 
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+15551234567" 
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/alexmorgan" 
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Google Ads Management</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Meta Ads Campaigns</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">B2B Lead Generation</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Conversion Optimization</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Analytics & Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Fintech</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Healthcare</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">Background Verification</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">B2B SaaS</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors duration-200">E-commerce</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Alex Morgan. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> for performance marketing excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
