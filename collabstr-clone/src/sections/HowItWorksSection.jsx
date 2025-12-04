import React from "react";

const HowItWorksSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-12">

          {/* Updated Button — paste this */}
          <div className="flex items-start gap-4">
            <button
              className="px-10 py-3.5 rounded-full font-bold text-lg leading-none
                         bg-gradient-to-r from-pink-400 via-pink-300 to-purple-500
                         text-white shadow-[0_10px_25px_rgba(139,92,246,0.18)]
                         flex items-center justify-center whitespace-nowrap
                         transform active:translate-y-0.5 transition-shadow duration-150
                         focus:outline-none"
              style={{ textShadow: "0 1px 0 rgba(0,0,0,0.12)" }}
            >
              Search
            </button>
          </div>

          {/* Title */}
          <h2 className="text-[32px] font-semibold text-gray-900 leading-tight">
            Find and Hire Influencers in Seconds on the Marketplace
          </h2>

          {/* Points */}
          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
              Search Influencers
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Search thousands of vetted Instagram, TikTok, and YouTube influencers.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
              Purchase & Chat Securely
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Safely purchase and communicate through Collabstr. We hold your payment until
              the work is completed.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
              Receive Quality Content
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              Receive your high-quality content from influencers directly through the platform.
            </p>
          </div>
        </div>

{/* LEFT SIDE — IMAGES MOVED HERE */}
<div className="relative flex justify-center lg:justify-end order-1 lg:order-1">

  {/* TOP IMAGE — moved slightly right */}
  <div className="w-[620px] rounded-2xl overflow-hidden shadow-xl z-10 ml-6">
    <img
      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
      className="w-full h-full object-cover"
      alt="Analytics dashboard preview"
    />
  </div>

  {/* BOTTOM IMAGE — moved slightly left */}
  <div className="absolute top-[140px] -right-12 w-[520px] rounded-2xl overflow-hidden shadow-2xl z-20">
    <img
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop"
      className="w-full h-full object-cover"
      alt="Workspace team collaboration"
    />
  </div>
</div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
