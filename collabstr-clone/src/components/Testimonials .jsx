import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <h2 className="text-[34px] font-semibold text-gray-900 mb-12">
        250,000+ Brands Work With Influencers on Collabstr
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Testimonial 1 */}
        <div className="flex flex-col">
          {/* Quote Icon */}
          <svg className="w-12 h-12 text-pink-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
          
          {/* Title */}
          <h3 className="text-[20px] font-semibold text-gray-900 italic mb-4">
            5 stars from a creator and a brand
          </h3>
          
          {/* Description */}
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
            I've used Collabstr from both the Creator side and the Brand side! It is extremely user-friendly and has lead to some great relationships with creators/brands I wouldn't have been connected to otherwise. Love the platform!
          </p>
          
          {/* Author */}
          <p className="text-[15px] text-gray-900 italic font-medium mt-auto">
            Layla - Influencer & Founder
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col">
          {/* Quote Icon */}
          <svg className="w-12 h-12 text-pink-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
          
          {/* Title */}
          <h3 className="text-[20px] font-semibold text-gray-900 italic mb-4">
            Best platform to connect with influencers
          </h3>
          
          {/* Description */}
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
            Best platform to connect with influencers and content creators. I've signed up to many platforms, collabstr is the easiest to use and gives the best results for my brand.
          </p>
          
          {/* Author */}
          <p className="text-[15px] text-gray-900 italic font-medium mt-auto">
            Myriam - Founder of BBeyond
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col">
          {/* Quote Icon */}
          <svg className="w-12 h-12 text-pink-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
          
          {/* Title */}
          <h3 className="text-[20px] font-semibold text-gray-900 italic mb-4">
            Great way to generate content
          </h3>
          
          {/* Description */}
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
            Been using Collabstr to generate content for our seasonal clothing lines. Super easy for us to search for relevant influencers and pay them. We save at least 10-20 hours a month on this.
          </p>
          
          {/* Author */}
          <p className="text-[15px] text-gray-900 italic font-medium mt-auto">
            Courtney - Marketer
          </p>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;