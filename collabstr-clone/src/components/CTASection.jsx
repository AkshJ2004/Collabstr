import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with grid of influencer images */}
          <div className="absolute inset-0 bg-gray-900">
            <div className="grid grid-cols-6 gap-4 p-8 opacity-60">
              {/* Row 1 */}
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              
              {/* Row 2 */}
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
              <div className="aspect-square bg-gray-700 rounded-lg"></div>
            </div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 px-12 py-20">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold text-white mb-6">
                Find and Hire Influencers
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Search Instagram, TikTok, and YouTube influencers.
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Search Influencers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;