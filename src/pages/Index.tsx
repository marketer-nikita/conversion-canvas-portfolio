
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Industries from '@/components/Industries';
import CaseStudies from '@/components/CaseStudies';
import Certifications from '@/components/Certifications';
import ToolsSkills from '@/components/ToolsSkills';
import Experience from '@/components/Experience';
// import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-lavender-50 to-mint-50" style={{
      background: 'linear-gradient(135deg, #fdf2f8 0%, #f0f4ff 50%, #f0fdf4 100%)'
    }}>
      <Navbar />
      <Hero />
      <Industries />
      <About />
      <CaseStudies />
      <Certifications />
      <ToolsSkills />
      <Experience />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
