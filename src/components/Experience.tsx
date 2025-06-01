
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Performance Marketing Specialist",
      company: "DigitalGrowth Agency",
      period: "2023 - Present",
      location: "Remote",
      description: "Leading performance marketing campaigns for B2B and B2C clients across multiple industries.",
      achievements: [
        "Increased client ROI by 40% through advanced campaign optimization",
        "Managed $500K+ in monthly ad spend across Google and Meta platforms",
        "Developed automated bidding strategies reducing CPA by 25%",
        "Created comprehensive reporting dashboards for client transparency"
      ]
    },
    {
      role: "Digital Marketing Associate",
      company: "TechStart Solutions",
      period: "2022 - 2023",
      location: "New York, NY",
      description: "Focused on Google Ads management and lead generation for fintech and healthcare clients.",
      achievements: [
        "Generated 200+ qualified leads monthly for B2B clients",
        "Achieved 3.5x ROAS on Google Ads campaigns",
        "Implemented conversion tracking and attribution modeling",
        "Collaborated with sales teams to optimize lead quality"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through hands-on campaign management and strategic optimization
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                  <div className="flex items-center text-blue-600 font-semibold mb-2">
                    <Briefcase size={18} className="mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{exp.description}</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
