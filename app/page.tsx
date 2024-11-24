'use client'
import React from 'react';
import HeroSection from './components/herosection';
import Available from './components/available';
import MentalHealthSection from './components/MentalHealth';
import WhyChooseSection from './components/WhyChooseSection';
import AboutSection from './components/about';
import FeedbackSection from './components/FeedbackSection';
import EnquiryForm from '@/app/EnquiryForm/page';



const App = () => {
  return (
    <div>
    
      <HeroSection />
      <Available />
      <MentalHealthSection />
      <WhyChooseSection />
      <AboutSection />
      <FeedbackSection />
      < EnquiryForm />
      
      
    
    </div>
  );
};

export default App;
