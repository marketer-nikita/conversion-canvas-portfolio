import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experienceConfig } from "@/config/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through hands-on campaign management and
            strategic optimization
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-400 rounded-full"></div>

          <div className="space-y-8 md:space-y-12">
            {experienceConfig.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node - Only visible on md+ */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-pink-400 rounded-full z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  } md:w-1/2`}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center mb-2">
                        <Briefcase className="w-5 h-5 text-pink-400 mr-2" />
                        <span className="text-sm font-semibold text-pink-500">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                        {exp.role}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 text-sm md:text-base">
                      {exp.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                      {exp.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center p-2 md:p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg"
                        >
                          <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-pink-500 mx-auto mb-1" />
                          <div className="text-sm md:text-lg font-bold text-gray-900">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 text-xs md:text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
