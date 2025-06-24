
import React from "react";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { profileConfig } from "@/config/profile";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {profileConfig.tagline}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              {profileConfig.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${profileConfig.email}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 transition-all duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
              <a
                href={profileConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 p-2">
                <img
                  src="/lovable-uploads/02ece727-1d4b-407f-9ad8-81ad22872104.png"
                  alt={`${profileConfig.name} - ${profileConfig.title}`}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {profileConfig.experience.years}
                  </div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500">
                    {profileConfig.experience.roiBoost}
                  </div>
                  <div className="text-sm text-gray-600">ROI Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
