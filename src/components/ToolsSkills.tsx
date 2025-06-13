
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ToolsSkills = () => {
  const tools = [
    {
      name: "Google Ads",
      description: "Paid search & display campaigns",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
    },
    {
      name: "Meta Ads", 
      description: "Social ads across Facebook & Instagram",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
    },
    {
      name: "LinkedIn Ads",
      description: "B2B lead generation campaigns", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
    },
    {
      name: "SEMrush",
      description: "Competitor & keyword research",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop"
    },
    {
      name: "Canva",
      description: "Creatives for ads and branding",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
    },
    {
      name: "MS Clarity",
      description: "Heatmaps & user behavior tracking",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop"
    },
    {
      name: "Factors.ai",
      description: "B2B attribution & funnel analysis",
      logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop"
    },
    {
      name: "Google Analytics 4",
      description: "Website traffic & event tracking",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
    },
    {
      name: "Zoho Campaigns",
      description: "Email marketing & automation", 
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop"
    },
    {
      name: "Apollo.io",
      description: "Lead discovery & enrichment",
      logo: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=100&h=100&fit=crop"
    },
    {
      name: "VWO Tool",
      description: "A/B testing & conversion optimization",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop"
    },
    {
      name: "Google Ads Editor",
      description: "Bulk ad editing & offline sync",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-favicon-2015.png"
    }
  ];

  return (
    <section id="tools-skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                      <p className="text-xs text-gray-600 leading-relaxed">{tool.description}</p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-center">
                    <p className="font-semibold">{tool.name}</p>
                    <p className="text-sm text-gray-600">{tool.description}</p>
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
