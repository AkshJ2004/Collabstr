import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import FeaturedSection from './components/FeaturedSection';
import CardSection from './components/CardSection';
import CategorySection from './components/CategorySection';  
import PressSection from './components/PressSection';
import FeaturesSection from './components/FeaturesSection';

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
      <FeaturesSection />
    </div>
  );
}

export default App;