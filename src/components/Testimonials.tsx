
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "CreditFlow Solutions",
      content: "Alex transformed our lead generation strategy completely. The quality of leads improved dramatically, and our cost per acquisition dropped by 45%. Their expertise in fintech marketing is exceptional.",
      rating: 5,
      image: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Dr. Michael Chen",
      role: "Practice Manager",
      company: "WellCare Medical Group",
      content: "Working with Alex was a game-changer for our practice. They understood the healthcare compliance requirements perfectly and delivered results that exceeded our expectations. 250% increase in patient appointments!",
      rating: 5,
      image: "photo-1582750433449-648ed127bb54"
    },
    {
      name: "Jennifer Rodriguez",
      role: "CEO",
      company: "SecureCheck Pro",
      content: "Alex's strategic approach to our B2B campaigns was impressive. They helped us capture 12% market share in just 6 months. Their understanding of our niche market was spot-on.",
      rating: 5,
      image: "photo-1438761681033-6461ffad8d80"
    },
    {
      name: "David Thompson",
      role: "Founder",
      company: "TechStart Solutions",
      content: "As Alex's former colleague, I can attest to their dedication and expertise. They consistently delivered outstanding results and their analytical approach to campaign optimization is remarkable.",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear what clients say about working with me
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Quote className="w-12 h-12 text-blue-600 opacity-20" />
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <img 
                src={`https://images.unsplash.com/${testimonials[currentIndex].image}?w=100&h=100&fit=crop&crop=face`}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].role}
                </div>
                <div className="text-blue-600 font-semibold">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
