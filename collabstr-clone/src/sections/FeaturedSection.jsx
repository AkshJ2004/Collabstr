import React from 'react';
import CreatorCard from '../components/CreatorCard';
import { creatorsData } from '../data/creatorsData';

const FeaturedSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-16">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Featured</h2>
          <p className="text-gray-600 text-sm">Hire top influencers across all platforms</p>
        </div>
        <button className="text-sm font-medium text-gray-900 hover:text-gray-700">
          See All
        </button>
      </div>

      {/* Creator Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {creatorsData.map((creator, index) => (
          <CreatorCard key={index} creator={creator} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;