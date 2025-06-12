
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-4 max-w-sm animate-fade-in">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-gray-900">Ready to grow your business?</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Let's discuss how performance marketing can drive results for your business.
          </p>
          <button
            onClick={scrollToContact}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
          >
            Start Conversation
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-gradient-to-r from-pink-400 to-purple-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-xl"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingCTA;
