
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Target, DollarSign, TrendingUp, Users, BarChart3, Eye, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const tools = [
    'Facebook Ads Manager',
    'LinkedIn Campaign Manager', 
    'Canva',
    'Figma',
    'Google Sheets',
    'Meta Ads Reporting'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section 
        id="hero" 
        data-section
        className={`pt-32 pb-20 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          visibleSections.includes('hero') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              B2B Fintech Awareness & Lead Quality Campaign
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Scaling visibility and lead quality for a supply chain finance platform targeting MSMEs & SMEs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-lg">
              <Target className="w-8 h-8 text-pink-500" />
              <div className="text-left">
                <div className="text-sm text-gray-600">Lead Quality Score</div>
                <div className="text-2xl font-bold text-gray-900">87%</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-lg">
              <DollarSign className="w-8 h-8 text-green-500" />
              <div className="text-left">
                <div className="text-sm text-gray-600">Cost per Lead</div>
                <div className="text-2xl font-bold text-gray-900">Reduced</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <div className="text-left">
                <div className="text-sm text-gray-600">LinkedIn CXO Followers</div>
                <div className="text-2xl font-bold text-gray-900">Increased</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        id="overview" 
        data-section
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-200 ${
          visibleSections.includes('overview') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A B2B fintech platform enabling early working capital via invoice discounting needed better CXO visibility and qualified inbound leads.
            </p>
          </Card>
        </div>
      </section>

      {/* Challenge Section */}
      <section 
        id="challenge" 
        data-section
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-300 ${
          visibleSections.includes('challenge') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-red-50 border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-6 h-6 text-red-500" />
                <h3 className="font-semibold text-gray-900">Lead Quality</h3>
              </div>
              <p className="text-gray-700">Poor inbound lead quality</p>
            </Card>
            
            <Card className="p-6 bg-orange-50 border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-orange-500" />
                <h3 className="font-semibold text-gray-900">Brand Recall</h3>
              </div>
              <p className="text-gray-700">Weak brand recall among finance heads</p>
            </Card>
            
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-6 h-6 text-yellow-600" />
                <h3 className="font-semibold text-gray-900">Acquisition Funnel</h3>
              </div>
              <p className="text-gray-700">No structured paid acquisition funnel</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Campaign Strategy Section */}
      <section 
        id="strategy" 
        data-section
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-purple-50 transition-all duration-700 delay-400 ${
          visibleSections.includes('strategy') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Campaign Strategy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <Card className="p-8 bg-white shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Targeting Strategy</h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Facebook TOFU Ads</h4>
                  <p className="text-blue-800 text-sm">Age 25–50, India, Interests in Finance, Startups, Entrepreneurship</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">LinkedIn Awareness Ads</h4>
                  <p className="text-purple-800 text-sm">CXO/VPs in Finance, Companies $10M–$1B+, India</p>
                </div>
              </div>
            </Card>

            {/* Right Column */}
            <Card className="p-8 bg-white shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Creative Approach</h3>
              
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm">4 ad variants per platform</Badge>
                <Badge variant="outline" className="text-sm">Creative differentiation by sector</Badge>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Messaging Examples:</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
                      <p className="text-gray-800 italic">"Unlock early cash on confirmed invoices"</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                      <p className="text-gray-800 italic">"When businesses lack capital, growth slows — change that"</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section 
        id="results" 
        data-section
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-500 ${
          visibleSections.includes('results') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Lead Quality Score</h3>
              </div>
              <p className="text-3xl font-bold text-green-800 mb-2">87%</p>
              <p className="text-green-700">(client-verified)</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-900">Performance</h3>
              </div>
              <p className="text-blue-800">High CTR, low CPC across platforms</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-purple-900">LinkedIn Growth</h3>
              </div>
              <p className="text-purple-800">Strong follower growth among finance decision-makers</p>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-bold text-pink-900">Brand Recall</h3>
              </div>
              <p className="text-pink-800">Improved brand recall through message consistency</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section 
        id="tools" 
        data-section
        className={`py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 transition-all duration-700 delay-600 ${
          visibleSections.includes('tools') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tools & Platforms Used</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="p-4 bg-white hover:shadow-lg transition-shadow duration-200">
                <p className="text-center font-medium text-gray-800">{tool}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Takeaway Section */}
      <section 
        id="takeaway" 
        data-section
        className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-700 delay-700 ${
          visibleSections.includes('takeaway') ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Key Takeaway</h2>
            <p className="text-lg text-gray-800 text-center italic leading-relaxed">
              "This campaign showed that intent-driven targeting—even without CRM or remarketing—can drive strong brand lift and lead quality in a competitive fintech space."
            </p>
          </Card>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => navigate('/#case-studies')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
