
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      name: "Fundamentals of Digital Marketing",
      platform: "Google Digital Garage",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png",
      skills: ["Digital Marketing", "SEO", "Analytics", "Strategy"],
      verified: true,
      link: "https://drive.google.com/file/d/1-2o0NSkN-SNnR6XV7yT_H98_HA_BxdN2/view?usp=drivesdk"
    },
    {
      name: "Google Ads Search Certification",
      platform: "Google",
      date: "2023", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png",
      skills: ["Search Ads", "Keywords", "Campaign Management", "Optimization"],
      verified: true,
      link: "https://skillshop.credential.net/7e3f3896-e432-4540-a2dd-737549810a96#acc.a7vNcAJV"
    },
    {
      name: "Google Ads Display Certification",
      platform: "Google",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png", 
      skills: ["Display Ads", "Targeting", "Creative Strategy", "Remarketing"],
      verified: true,
      link: "https://skillshop.credential.net/8be5eb6f-3d76-4e42-af31-5d33c6915f92#acc.X2nO5fby"
    },
    {
      name: "Google Analytics Certification (GA4)",
      platform: "Google",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png",
      skills: ["GA4 Setup", "Conversion Tracking", "Attribution", "Reports"],
      verified: true,
      link: "https://skillshop.credential.net/c176115e-ded3-48d5-800b-1f81920a1400"
    },
    {
      name: "Meta Marketing Professional",
      platform: "Meta",
      date: "2023", 
      logo: "/src/assets/image/Meta_Platforms_Inc._logo.svg",
      skills: ["Facebook Ads", "Instagram Ads", "Creative Strategy", "Analytics"],
      verified: true
    },
    {
      name: "LinkedIn Marketing Professional",
      platform: "LinkedIn",
      date: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      skills: ["B2B Targeting", "Lead Gen", "Sponsored Content", "ABM"],
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
                <div className="flex items-center gap-2">
                  {cert.verified && (
                    <div className="flex items-center text-green-600 text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Verified
                    </div>
                  )}
                  {cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors p-1"
                      title="View Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
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
