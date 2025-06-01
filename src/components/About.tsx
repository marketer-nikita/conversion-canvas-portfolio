
import React from 'react';
import { Award, Briefcase, TrendingUp, Target, Users, BarChart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Google Ads', level: 95, icon: Target },
    { name: 'Meta Ads', level: 90, icon: Users },
    { name: 'LinkedIn Ads', level: 85, icon: Briefcase },
    { name: 'Analytics', level: 92, icon: BarChart },
  ];

  const highlights = [
    { number: '40%', label: 'Avg ROI Increase' },
    { number: '500K+', label: 'Monthly Ad Spend' },
    { number: '25%', label: 'CPA Reduction' },
    { number: '200+', label: 'Leads Generated' },
  ];

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
        
        {/* Performance Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">{highlight.number}</div>
              <div className="text-gray-600 text-sm">{highlight.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-pink-400 mr-3" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Started as a digital marketing enthusiast and quickly specialized in performance marketing, 
                  focusing on Google Ads and Meta Ads platforms.
                </p>
                <p>
                  My data-driven approach has helped businesses achieve significant growth in lead generation 
                  and revenue optimization.
                </p>
                <p>
                  I thrive on the challenge of turning marketing spend into measurable business results, 
                  constantly testing and optimizing campaigns to achieve the best possible ROI.
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills & Expertise */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                Core Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <skill.icon className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-pink-400 mr-3" />
                <h4 className="text-xl font-semibold">Industries</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-pink-50 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-700">
                  Fintech
                </div>
                <div className="bg-purple-50 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-700">
                  Healthcare
                </div>
                <div className="bg-pink-50 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-700">
                  B2B SaaS
                </div>
                <div className="bg-purple-50 px-3 py-2 rounded-lg text-center text-sm font-medium text-gray-700">
                  Verification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
