
import React from "react";
import { ArrowLeft, Target, Users, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toolsConfig } from "@/config/tools";

const CaseStudyPage = () => {
  const navigate = useNavigate();

  // Map tools used in case study to their config data
  const getToolConfig = (toolName: string) => {
    const toolMappings: { [key: string]: string } = {
      "Facebook Ads Manager": "Meta Ads Manager",
      "LinkedIn Campaign Manager": "LinkedIn Ads",
      "Canva": "Canva",
      "Figma": "Figma", // This might not exist in config, will fallback to emoji
      "Google Analytics 4": "Google Analytics 4",
      "Factors.ai": "Factors.ai"
    };
    
    const mappedName = toolMappings[toolName] || toolName;
    return toolsConfig.find(tool => tool.name === mappedName);
  };

  const caseStudyTools = [
    { name: "Facebook Ads Manager", fallbackIcon: "📘" },
    { name: "LinkedIn Campaign Manager", fallbackIcon: "💼" },
    { name: "Canva", fallbackIcon: "🎨" },
    { name: "Figma", fallbackIcon: "🎯" },
    { name: "Google Analytics 4", fallbackIcon: "📊" },
    { name: "Factors.ai", fallbackIcon: "🔍" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-pink-400 to-purple-400 h-1 w-24 rounded-full mb-6"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              B2B Fintech Awareness & Lead Quality Campaign
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Scaling visibility and lead quality for a supply chain finance platform targeting MSMEs & SMEs
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our client is a leading supply chain finance platform that helps MSMEs and SMEs unlock working capital 
              by converting their confirmed invoices into immediate cash flow. Operating in a highly competitive fintech 
              landscape, they needed to establish trust and generate high-quality leads while building brand awareness 
              among key decision makers.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Low-Quality Inbound Leads</h3>
              <p className="text-gray-600">Most leads were unqualified prospects without decision-making authority or genuine financing needs.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No CXO Visibility</h3>
              <p className="text-gray-600">The brand lacked awareness among C-level executives and key financial decision makers.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Weak Trust in Competitive Space</h3>
              <p className="text-gray-600">Establishing credibility in a crowded fintech market with skeptical business owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy & Targeting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategy & Targeting
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Split</h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold text-blue-900 mb-3">Facebook Ads</h4>
                  <p className="text-blue-700">Targeted business owners through interests like Finance, Startups, Small Business, and Entrepreneurship</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <h4 className="text-xl font-semibold text-purple-900 mb-3">LinkedIn Campaign Manager</h4>
                  <p className="text-purple-700">Reached decision makers with titles like CFO, Finance Director, Business Owner, and Managing Director</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Targeting Criteria</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">CXO Level</h4>
                    <p className="text-gray-600">C-suite executives and senior management roles</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Revenue Range</h4>
                    <p className="text-gray-600">Companies with ₹10L - ₹50Cr annual revenue</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Geography</h4>
                    <p className="text-gray-600">Major metro cities and tier-2 business hubs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative & Messaging */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Creative & Messaging
            </h2>
          </div>
          
          <div className="space-y-8">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-900 text-center italic border-l-4 border-gradient-to-b from-pink-400 to-purple-400 pl-6">
              "Unlock early cash on confirmed invoices"
            </blockquote>
            
            <blockquote className="text-2xl md:text-3xl font-light text-gray-900 text-center italic border-l-4 border-gradient-to-b from-pink-400 to-purple-400 pl-6">
              "When businesses lack capital, growth slows — change that"
            </blockquote>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Messaging Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-pink-500 font-semibold">Trust</div>
                  <div className="text-gray-600 text-sm">Established credibility</div>
                </div>
                <div>
                  <div className="text-purple-500 font-semibold">Speed</div>
                  <div className="text-gray-600 text-sm">Quick approvals</div>
                </div>
                <div>
                  <div className="text-pink-500 font-semibold">Growth</div>
                  <div className="text-gray-600 text-sm">Business scaling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Results & Metrics
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">87%</div>
              <div className="text-gray-600">Lead Quality Score</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📉</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">45%</div>
              <div className="text-gray-600">CPL Reduction</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200%</div>
              <div className="text-gray-600">CXO Follower Growth</div>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💡</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Strong</div>
              <div className="text-gray-600">Brand Recall</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tools Used
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {caseStudyTools.map((tool, index) => {
              const toolConfig = getToolConfig(tool.name);
              
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {toolConfig?.logo ? (
                      <img
                        src={toolConfig.logo}
                        alt={tool.name}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{tool.fallbackIcon}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">{tool.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Takeaway */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-light text-gray-900 italic leading-relaxed">
            "Even without remarketing or CRM lists, this campaign proved the power of persona-led awareness to drive qualified inbound demand."
          </blockquote>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
