
import React from 'react';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate performance marketer with 2 years of hands-on experience driving growth 
            for businesses across multiple industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-700 mb-4">
                Started as a digital marketing enthusiast and quickly specialized in performance marketing, 
                focusing on Google Ads and Meta Ads platforms. My data-driven approach has helped businesses 
                achieve significant growth in lead generation and revenue optimization.
              </p>
              <p className="text-gray-700">
                I thrive on the challenge of turning marketing spend into measurable business results, 
                constantly testing and optimizing campaigns to achieve the best possible ROI.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h4 className="text-xl font-semibold">Expertise</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Google Ads (Search, Display, Shopping)</li>
                <li>• Meta Ads (Facebook & Instagram)</li>
                <li>• LinkedIn Ads for B2B campaigns</li>
                <li>• Conversion Rate Optimization</li>
                <li>• Analytics & Performance Tracking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-purple-600 mr-3" />
                <h4 className="text-xl font-semibold">Industries</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Fintech & Financial Services</li>
                <li>• Healthcare & Wellness</li>
                <li>• Background Verification</li>
                <li>• B2B SaaS Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
