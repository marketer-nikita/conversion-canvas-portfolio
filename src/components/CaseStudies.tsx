import React from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudiesConfig } from "@/config/caseStudies";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real campaigns across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesConfig.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
            >
              <div className="h-32 bg-gradient-to-br from-pink-400 to-purple-400 relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-1">
                      {study.industry}
                    </div>
                    <h3 className="text-lg font-bold">{study.client}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Challenge
                    </h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Solution
                    </h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-pink-50 rounded-lg p-2">
                          <div className="text-sm font-semibold text-pink-600">
                            {result.metric}
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {result.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
