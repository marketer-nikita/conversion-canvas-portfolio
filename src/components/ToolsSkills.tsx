import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toolsConfig } from "@/config/tools";

const ToolsSkills = () => {
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
    <section
      id="tools-skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
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
            {toolsConfig.map((tool, index) => (
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
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">
                        {tool.name}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(
                          tool.proficiency
                        )}`}
                      >
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
