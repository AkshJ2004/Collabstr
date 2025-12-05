import React from "react";

const SocialProof = () => {
    const YoutubeIcon = (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10 15.5l6-3.5-6-3.5v7z" />
            <path d="M23.5 6.5s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1C17.5 3 12 3 12 3h-.1s-5.5 0-8.6.1c-.4 0-1.3 0-2.1 1C.7 4.8.5 6.5.5 6.5S0 8.5 0 10.6v2.8c0 2 .5 4 .5 4.9C7 18.8 12 19 12 19s5.5-.1 8.6-.7c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.5-2 .5-4.1v-2.7c0-2.1-.5-4.1-.5-4.1z" />
        </svg>
    );

    return (
        <>
            {/* Trusted Brands Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-left mb-12">
                    <h2 className="text-[34px] font-semibold text-gray-900 leading-tight mb-4">
                        Trusted by 250,000+ Brands
                    </h2>
                    <p className="text-[17px] text-gray-600">
                        View collaborations from brands like Wealthsimple, Hopper, Deezer, and more.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {[
                        "https://images.unsplash.com/photo-1516715094483-75da06b28c6d?w=400&h=700&fit=crop",
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=700&fit=crop",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=700&fit=crop",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=700&fit=crop",
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=700&fit=crop",
                    ].map((src, index) => (
                        <div key={index} className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-gray-100">
                            <img
                                src={src}
                                alt={`Creator content ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                {YoutubeIcon}
                                <span className="text-white text-sm font-medium">YT</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Brand Logos */}
                <div className="flex items-center justify-between max-w-5xl mx-auto mt-16 px-8 flex-wrap gap-8">
                    <div className="text-gray-300 font-semibold text-3xl tracking-tight">
                        Wealthsimple
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2 20h3l9-9 9 9h3l-12-12L2 20z" />
                        </svg>
                        <span className="text-gray-300 font-semibold text-3xl tracking-tight">ClickUp</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <svg className="w-8 h-8 text-gray-300" viewBox="0 0 40 40" fill="currentColor">
                            <path d="M20 8c-2 0-3.5 1.5-3.5 3.5v2c0 1.5 1 2.5 2.5 3.5v-2c0-.5.5-1 1-1s1 .5 1 1v2c1.5-1 2.5-2 2.5-3.5v-2C23.5 9.5 22 8 20 8zm-7 10c-2 0-3.5 1.5-3.5 3.5v8c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-8c0-2-1.5-3.5-3.5-3.5zm14 0c-2 0-3.5 1.5-3.5 3.5v8c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-8c0-2-1.5-3.5-3.5-3.5z" />
                        </svg>
                        <span className="text-gray-300 font-medium text-3xl tracking-tight">hopper</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <svg className="w-12 h-12 text-gray-300" viewBox="0 0 60 60" fill="none">
                            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1.5" />
                            <ellipse cx="30" cy="30" rx="28" ry="14" stroke="currentColor" strokeWidth="1.5" />
                            <ellipse cx="30" cy="30" rx="14" ry="28" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="30" y1="2" x2="30" y2="58" stroke="currentColor" strokeWidth="1.5" />
                            <line x1="2" y1="30" x2="58" y2="30" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M15 15 L45 45 M15 45 L45 15" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <span className="text-gray-400 text-[10px] font-semibold tracking-[0.15em]">UNITED NATIONS</span>
                    </div>

                    <div className="flex items-center">
                        <svg className="w-10 h-12 text-gray-300" viewBox="0 0 40 50" fill="currentColor">
                            <path d="M8 45 Q8 20 12 10 Q15 5 20 5 Q25 5 28 10 Q32 20 32 45 L28 45 Q28 22 26 14 Q24 8 20 8 Q16 8 14 14 Q12 22 12 45 Z" />
                        </svg>
                        <span className="text-gray-300 font-bold text-2xl -ml-1">McDonald's</span>
                    </div>
                </div>
            </div>

            {/* Case Studies Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-[34px] font-semibold text-gray-900 mb-8">
                    Case Studies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

            {/* Testimonials Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-[34px] font-semibold text-gray-900 mb-12">
                    250,000+ Brands Work With Influencers on Collabstr
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col">
                        <svg className="w-12 h-12 text-pink-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>

                        <h3 className="text-[20px] font-semibold text-gray-900 italic mb-4">
                            5 stars from a creator and a brand
                        </h3>

                        <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                            I've used Collabstr from both the Creator side and the Brand side! It is extremely user-friendly and has lead to some great relationships with creators/brands I wouldn't have been connected to otherwise. Love the platform!
                        </p>

                        <p className="text-[15px] text-gray-900 italic font-medium mt-auto">
                            Layla - Influencer & Founder
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <svg className="w-12 h-12 text-pink-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>

                        <h3 className="text-[20px] font-semibold text-gray-900 italic mb-4">
                            Best platform to connect with influencers
                        </h3>

                        <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                            Best platform to connect with influencers and content creators. I've signed up to many platforms, collabstr is the easiest to use and gives the best results for my brand.
                        </p>

                        <p className="text-[15px] text-gray-900 italic font-medium mt-auto">
                            Myriam - Founder of BBeyond
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <svg className="w-12 h-12 text-pink-400 mb-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>

                        <h3 className="text-[20px] font-semibold text-gray-900 italic mb-4">
                            Great way to generate content
                        </h3>

                        <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                            Been using Collabstr to generate content for our seasonal clothing lines. Super easy for us to search for relevant influencers and pay them. We save at least 10-20 hours a month on this.
                        </p>

                        <p className="text-[15px] text-gray-900 italic font-medium mt-auto">
                            Courtney - Marketer
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialProof;
