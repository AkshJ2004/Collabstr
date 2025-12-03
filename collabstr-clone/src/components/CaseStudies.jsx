import React from "react";

const CaseStudies = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h2 className="text-[34px] font-semibold text-gray-900 mb-8">
        Case Studies
      </h2>

      {/* Case Study Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 - Wealthsimple */}
        <div className="relative rounded-2xl overflow-hidden h-[380px] group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=800&fit=crop"
            alt="Wealthsimple Case Study"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-white text-[22px] font-semibold leading-tight">
              Wealthsimple Launches 'Wealthsimple Cash' With Instagram and TikTok Influencers on Collabstr
            </h3>
          </div>
        </div>

        {/* Card 2 - Numi */}
        <div className="relative rounded-2xl overflow-hidden h-[380px] group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=800&fit=crop"
            alt="Numi Case Study"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-white text-[22px] font-semibold leading-tight">
              Numi Generates 50,000+ Impressions for New Spring Collection with Collabstr
            </h3>
          </div>
        </div>

        {/* Card 3 - Advertising Agency */}
        <div className="relative rounded-2xl overflow-hidden h-[380px] group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=800&fit=crop"
            alt="Advertising Agency Case Study"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-white text-[22px] font-semibold leading-tight">
              Advertising Agency Gets 100+ Influencers Per Month on Autopilot with Collabstr
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;