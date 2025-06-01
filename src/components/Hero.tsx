
import React from 'react';
import { ArrowRight, TrendingUp, Target, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Performance Marketing
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                That Drives Results
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Specializing in Google Ads, Meta Ads, and B2B lead generation with 2 years of proven success 
              across fintech, healthcare, and background verification industries.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center"
            >
              Let's Work Together
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Case Studies
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">ROI Optimization</h3>
              <p className="text-gray-600">Maximizing returns through data-driven campaign strategies</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Target className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Precision Targeting</h3>
              <p className="text-gray-600">Advanced audience segmentation for optimal reach</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
              <p className="text-gray-600">Quality B2B leads that convert into customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
