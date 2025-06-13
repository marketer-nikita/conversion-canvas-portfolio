
import React from "react";
import {
  Building2,
  Heart,
  Shield,
  TrendingUp,
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      name: "Fintech",
      icon: TrendingUp,
      description: "Payment platforms, lending apps, crypto exchanges",
      results: "25% CPA reduction",
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Telehealth platforms, medical devices, wellness apps",
      results: "300+ qualified leads",
    },
    {
      name: "B2B SaaS",
      icon: Building2,
      description: "Enterprise software, productivity tools, analytics",
      results: "40% ROI increase",
    },
    {
      name: "Background Verification",
      icon: Shield,
      description: "Identity verification, compliance solutions",
      results: "200+ monthly leads",
    },
    {
      name: "E-commerce",
      icon: Building2,
      description: "Online retail platforms, marketplace solutions",
      results: "35% conversion boost",
    },
  ];

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
            {industries.slice(0, 3).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 w-full sm:w-80"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {industry.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">{industry.description}</p>

                <div className="bg-pink-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-pink-600">
                    {industry.results}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 2 cards */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-6">
            {industries.slice(3, 5).map((industry, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 w-full sm:w-80"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {industry.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">{industry.description}</p>

                <div className="bg-pink-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-pink-600">
                    {industry.results}
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
