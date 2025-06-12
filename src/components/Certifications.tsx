
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Google Ads Certified",
      platform: "Google",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png",
      skills: ["Search Ads", "Display Ads", "Shopping", "Video"],
      verified: true
    },
    {
      name: "Meta Marketing Professional",
      platform: "Meta",
      date: "2023", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      skills: ["Facebook Ads", "Instagram Ads", "Creative Strategy", "Analytics"],
      verified: true
    },
    {
      name: "Google Analytics 4 Certified",
      platform: "Google",
      date: "2022",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png", 
      skills: ["GA4 Setup", "Conversion Tracking", "Attribution", "Reports"],
      verified: true
    },
    {
      name: "LinkedIn Marketing Professional",
      platform: "LinkedIn",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      skills: ["B2B Targeting", "Lead Gen", "Sponsored Content", "ABM"],
      verified: true
    },
    {
      name: "HubSpot Content Marketing",
      platform: "HubSpot",
      date: "2022",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
      skills: ["Content Strategy", "SEO", "Lead Nurturing", "Analytics"],
      verified: true
    },
    {
      name: "Salesforce Marketing Cloud",
      platform: "Salesforce", 
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      skills: ["Email Marketing", "Automation", "Segmentation", "Reporting"],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications from leading marketing platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center mr-4 p-2">
                    <img 
                      src={cert.logo} 
                      alt={cert.platform}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600 text-sm">{cert.platform} • {cert.date}</p>
                  </div>
                </div>
                {cert.verified && (
                  <div className="flex items-center text-green-600 text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Verified
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
