
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Google Ads Certified",
      issuer: "Google",
      date: "2023",
      description: "Search, Display, Shopping, and Video advertising",
      skills: ["Campaign Management", "Bid Strategies", "Audience Targeting", "Performance Analysis"],
      verified: true
    },
    {
      name: "Meta Certified Marketing Professional",
      issuer: "Meta",
      date: "2023",
      description: "Facebook and Instagram advertising expertise",
      skills: ["Creative Strategy", "Audience Building", "Campaign Optimization", "Analytics"],
      verified: true
    },
    {
      name: "Google Analytics 4 Certified",
      issuer: "Google",
      date: "2022",
      description: "Advanced analytics and conversion tracking",
      skills: ["Data Analysis", "Attribution Modeling", "Custom Reports", "Goal Tracking"],
      verified: true
    },
    {
      name: "LinkedIn Marketing Professional",
      issuer: "LinkedIn",
      date: "2023",
      description: "B2B advertising and lead generation",
      skills: ["B2B Targeting", "Lead Gen Forms", "Sponsored Content", "Account-Based Marketing"],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuously learning and staying certified in the latest marketing technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                {cert.verified && (
                  <div className="flex items-center text-green-600 text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Verified
                  </div>
                )}
              </div>
              
              <p className="text-gray-700 mb-4">{cert.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Skills & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HubSpot", "Salesforce", "Zapier", "Hotjar",
              "Unbounce", "Optimizely", "SEMrush", "Ahrefs"
            ].map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span className="font-medium text-gray-800">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
