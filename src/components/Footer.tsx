import React from "react";
import { Heart, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { profileConfig } from "@/config/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {profileConfig.name}
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Performance marketer passionate about data-driven growth, lead
            generation, and media buying across fintech, healthcare, and B2B
            platforms.
          </p>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href={`mailto:${profileConfig.email}`}
              className="flex items-center text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              <Mail size={18} className="mr-2" />
              {profileConfig.email}
            </a>
            <a
              href={`tel:${profileConfig.phone.replace(/\s+/g, "")}`}
              className="flex items-center text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              <Phone size={18} className="mr-2" />
              {profileConfig.phone}
            </a>
            <div className="flex items-center text-gray-300">
              <MapPin size={18} className="mr-2" />
              {profileConfig.location}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={profileConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profileConfig.email}`}
              className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Services */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {profileConfig.services.map((service, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {profileConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for
            performance marketing excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
