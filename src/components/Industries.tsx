
import React from "react";
import { industriesConfig } from "@/config/industries";

const Industries = () => {
  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries I've Worked In
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven performance across diverse verticals with measurable business
            impact
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* First row - 3 cards */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
            {industriesConfig.slice(0, 3).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 w-full sm:w-96"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {industry.industry}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">{industry.description}</p>

                <div className="bg-pink-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-pink-600">
                    {industry.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
            {industriesConfig.slice(3, 5).map((industry, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 w-full sm:w-96"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {industry.industry}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">{industry.description}</p>

                <div className="bg-pink-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-pink-600">
                    {industry.result}
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

export default Industries;
