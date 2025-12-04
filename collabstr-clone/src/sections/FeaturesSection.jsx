import React from "react";
import { DollarSign, CheckCircle, MessageCircle, Lock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <DollarSign size={28} className="text-pink-500" />,
      title: "No Upfront Cost",
      description: "Search influencers for free. No subscriptions, contracts, or hidden fees.",
    },
    {
      icon: <CheckCircle size={28} className="text-pink-500" />,
      title: "Vetted Influencers",
      description: "Every influencer is vetted by us. Always receive high-quality, professional content.",
    },
    {
      icon: <MessageCircle size={28} className="text-pink-500" />,
      title: "Instant Chat",
      description: "Instantly chat with influencers and stay in touch throughout the whole transaction.",
    },
    {
      icon: <Lock size={28} className="text-pink-500" />,
      title: "Secure Purchases",
      description: "Your money is held safely until you approve the influencer's work.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-[19px] font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;