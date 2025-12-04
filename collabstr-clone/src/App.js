import React from 'react';
import Header from './layout/Header';
import HeroSection from './sections/HeroSection';
import SearchSection from './sections/SearchSection';
import FeaturedSection from './sections/FeaturedSection';
import CardSection from './sections/CardSection';
import CategorySection from './sections/CategorySection';  
import PressSection from './sections/PressSection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import Track from './sections/Track';
import Campaigns from './sections/Campaigns';
import TrustedBrands from './sections/TrustedBrands';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials ';
import YouTubeUGCSection from './sections/YouTubeUGCSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import Footer from './layout/Footer';

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
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;