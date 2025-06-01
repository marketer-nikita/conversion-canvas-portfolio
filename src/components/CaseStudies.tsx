
import React from 'react';
import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Fintech Lead Generation Campaign",
      client: "CreditFlow Solutions",
      industry: "Fintech",
      description: "Developed a comprehensive Google Ads strategy for a B2B fintech company specializing in credit management solutions.",
      challenge: "High competition and expensive keywords in the financial services sector",
      solution: "Implemented long-tail keyword strategy with advanced audience targeting",
      results: [
        { metric: "Cost Per Lead", value: "45%", change: "decrease" },
        { metric: "Lead Quality Score", value: "60%", change: "increase" },
        { metric: "Conversion Rate", value: "3.2%", change: "to" },
        { metric: "Monthly Leads", value: "180+", change: "generated" }
      ],
      image: "photo-1563013544-824ae1b704d3"
    },
    {
      title: "Healthcare Provider Growth",
      client: "WellCare Medical Group",
      industry: "Healthcare",
      description: "Meta Ads campaign targeting patients seeking specialized healthcare services in major metropolitan areas.",
      challenge: "Strict compliance requirements and sensitive audience targeting",
      solution: "Created compliant ad copy with geo-targeted campaigns and custom audiences",
      results: [
        { metric: "Patient Appointments", value: "250%", change: "increase" },
        { metric: "Cost Per Acquisition", value: "35%", change: "decrease" },
        { metric: "Return on Ad Spend", value: "4.2x", change: "achieved" },
        { metric: "New Patients", value: "320+", change: "acquired" }
      ],
      image: "photo-1576091160399-112ba8d25d1f"
    },
    {
      title: "Background Verification Scale-Up",
      client: "SecureCheck Pro",
      industry: "Background Verification",
      description: "Scaled Google Ads campaigns for B2B background verification services targeting HR departments and recruitment agencies.",
      challenge: "Niche market with limited search volume and high competition",
      solution: "Developed multi-platform strategy combining Google Ads with LinkedIn campaigns",
      results: [
        { metric: "Enterprise Clients", value: "150%", change: "increase" },
        { metric: "Monthly Revenue", value: "$85K", change: "generated" },
        { metric: "Market Share", value: "12%", change: "captured" },
        { metric: "Client Retention", value: "94%", change: "achieved" }
      ],
      image: "photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
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
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
            >
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-400 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${study.image}?w=400&h=200&fit=crop`}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
                      {study.industry}
                    </div>
                    <h3 className="text-xl font-bold">{study.client}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{study.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Challenge:</h5>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">Solution:</h5>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {study.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-pink-500 mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {result.metric}
                      </div>
                    </div>
                  ))}
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
