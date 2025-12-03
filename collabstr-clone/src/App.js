import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import FeaturedSection from './components/FeaturedSection';
import CardSection from './components/CardSection';
import CategorySection from './components/CategorySection';  
import PressSection from './components/PressSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import Track from './components/Track';
import Campaigns from './components/Campaigns';
import TrustedBrands from './components/TrustedBrands';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials ';
import YouTubeUGCSection from './components/YouTubeUGCSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <SearchSection />
      <FeaturedSection />
      <CardSection />
      <CategorySection />  
      <PressSection />
      <HowItWorksSection />
      <FeaturesSection />
      <Campaigns />
      <Track />
      <TrustedBrands />
      <CaseStudies />
      <Testimonials />
      <YouTubeUGCSection />
    </div>
  );
}

export default App;