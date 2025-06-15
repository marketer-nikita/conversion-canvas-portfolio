import React from "react";
import {
  Award,
  Briefcase,
  TrendingUp,
  Target,
  Users,
  BarChart,
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "Performance Media Buying", level: 95, icon: Target },
    { name: "Full-Funnel Campaign Strategy", level: 90, icon: Users },
    { name: "Conversion Rate Optimization (CRO)", level: 85, icon: Briefcase },
    { name: "Analytics & Attribution", level: 92, icon: BarChart },
    { name: "Automation & Reporting", level: 80, icon: BarChart },
  ];

  const highlights = [
    { number: "40%", label: "Avg ROI Increase" },
    { number: "100K+", label: "Monthly Ad Spend" },
    { number: "30%", label: "CPA Reduction" },
    { number: "200+", label: "Leads Generated" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate performance marketer with 2 years of hands-on
            experience driving growth for businesses across multiple industries.
          </p>
        </div>

        {/* Performance Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl"
            >
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {highlight.number}
              </div>
              <div className="text-gray-600 text-sm">{highlight.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 text-pink-400 mr-3" />
                My Journey
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  I'm a performance marketer with a sharp eye for ROAS and a
                  deep curiosity for user behavior. Over the past 2 years, I've
                  worked with both startups and established brands to run paid
                  campaigns that drive real business outcomes — not just clicks.
                </p>
                <p>
                  Currently, I'm leveling up through Young Urban Project's
                  performance marketing cohort, expanding my expertise in
                  full-funnel strategy, creative testing, and advanced media
                  buying.
                </p>
                <p>
                  Whether it's scaling Google Ads for a fintech product or
                  acquiring high-intent leads for a healthcare client, I'm
                  driven by performance — and purpose.
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Award className="w-6 h-6 text-purple-400 mr-3" />
                Core Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <skill.icon className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
