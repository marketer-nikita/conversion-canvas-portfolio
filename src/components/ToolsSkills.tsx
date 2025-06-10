
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ToolsSkills = () => {
  const tools = [
    {
      name: "Google Ads",
      category: "Paid Advertising",
      proficiency: "Expert",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
    },
    {
      name: "Meta Ads Manager", 
      category: "Social Advertising",
      proficiency: "Expert",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
    },
    {
      name: "Google Analytics 4",
      category: "Analytics",
      proficiency: "Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
    },
    {
      name: "LinkedIn Ads",
      category: "B2B Advertising", 
      proficiency: "Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    {
      name: "HubSpot",
      category: "Marketing Automation",
      proficiency: "Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg"
    },
    {
      name: "Salesforce",
      category: "CRM",
      proficiency: "Intermediate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "Canva",
      category: "Creative Design",
      proficiency: "Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
    },
    {
      name: "Zapier",
      category: "Automation",
      proficiency: "Intermediate", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Zapier_logo.svg"
    },
    {
      name: "Hotjar",
      category: "User Analytics",
      proficiency: "Intermediate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Hotjar_Logo.svg"
    },
    {
      name: "Unbounce",
      category: "Landing Pages",
      proficiency: "Advanced",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop"
    },
    {
      name: "SEMrush",
      category: "SEO & Research",
      proficiency: "Intermediate",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop"
    },
    {
      name: "Ahrefs",
      category: "SEO Analysis",
      proficiency: "Intermediate", 
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop"
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-green-100 text-green-800";
      case "Advanced":
        return "bg-blue-100 text-blue-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools & Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient across the marketing technology stack
          </p>
        </div>
        
        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] border border-gray-100 cursor-pointer group">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        <img 
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">{tool.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(tool.proficiency)}`}>
                        {tool.proficiency}
                      </span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">
                    <p className="font-semibold">{tool.name}</p>
                    <p className="text-sm text-gray-600">{tool.category}</p>
                    <p className="text-sm">{tool.proficiency} Level</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ToolsSkills;
