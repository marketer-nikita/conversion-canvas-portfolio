
import React from 'react';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Helping brands grow with paid ads that convert.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
              Data-backed strategies. Real results. Let's build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="mailto:nikita.gupta@example.com" 
                  className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Mail className="w-6 h-6 text-gray-700" />
                </a>
                <a 
                  href="https://linkedin.com/in/nikitaguptamarketing" 
                  className="p-3 bg-white/50 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Nikita Gupta - Performance Marketing Specialist"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">2</div>
                  <div className="text-sm text-gray-600">Years Exp</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-500">40%</div>
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
