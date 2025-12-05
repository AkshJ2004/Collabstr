import React from "react";

const CampaignsTracking = () => {
    return (
        <>
            {/* Campaigns Section */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* RIGHT SIDE — TEXT */}
                    <div className="max-w-[580px] order-2 lg:order-2">
                        {/* Button */}
                        <button className="px-10 py-3.5 rounded-full font-bold text-lg bg-gradient-to-r from-pink-400 via-pink-300 to-purple-500 text-white shadow-[0_10px_25px_rgba(139,92,246,0.18)] active:translate-y-0.5 transition duration-150">
                            Campaigns
                        </button>

                        {/* Title */}
                        <h2 className="text-[34px] font-semibold text-gray-900 leading-tight mt-6">
                            Post Campaigns and Have 350,000+ Influencers Come to You
                        </h2>

                        {/* Set Targeting */}
                        <div className="mt-10">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                                Set Targeting
                            </h3>
                            <p className="text-[17px] text-gray-600 leading-relaxed">
                                Specify demographics including niche, location and following size of
                                the influencers you want to target.
                            </p>
                        </div>

                        {/* Post Campaign */}
                        <div className="mt-10">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                                Post Campaign
                            </h3>
                            <p className="text-[17px] text-gray-600 leading-relaxed">
                                Centralize your images, requirements, and more in a campaign brief
                                sent to 350,000 influencers.
                            </p>
                        </div>

                        {/* Influencers Apply */}
                        <div className="mt-10">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                                Influencers Apply
                            </h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                Targeted influencers submit their pricing, and you choose who to
                                collaborate with.
                            </p>
                        </div>
                    </div>

                    {/* LEFT SIDE — IMAGES */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-1">
                        {/* TOP IMAGE */}
                        <div className="w-[620px] rounded-2xl overflow-hidden shadow-xl z-10 ml-6">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
                                className="w-full h-full object-cover"
                                alt="Analytics dashboard preview"
                            />
                        </div>

                        {/* BOTTOM IMAGE */}
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

            {/* Track Section */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT SIDE — TEXT */}
                    <div className="max-w-[580px]">
                        {/* Button */}
                        <button className="px-10 py-3.5 rounded-full font-bold text-lg bg-gradient-to-r from-pink-400 via-pink-300 to-purple-500 text-white shadow-[0_10px_25px_rgba(139,92,246,0.18)] active:translate-y-0.5 transition duration-150">
                            Track
                        </button>

                        {/* Title */}
                        <h2 className="text-[36px] font-semibold text-gray-900 leading-tight mt-6">
                            Track Post Analytics and Performance in Real Time
                        </h2>

                        {/* One-Click Tracking */}
                        <div className="mt-10">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                                One-Click Tracking
                            </h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                Track Instagram, TikTok, and YouTube content in real time from a single
                                dashboard. Say goodbye to manual tracking and messy spreadsheets.
                            </p>
                        </div>

                        {/* Advanced Analytics */}
                        <div className="mt-10">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                                Advanced Analytics & Reporting
                            </h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                Analyze content performance over time, including impressions, engagement
                                and more. Organize performance by campaign and effortlessly build reports.
                            </p>
                        </div>

                        {/* Fully Automated */}
                        <div className="mt-10">
                            <h3 className="text-[20px] font-semibold text-gray-900 mb-2">
                                Fully Automated
                            </h3>
                            <p className="text-[16px] text-gray-600 leading-relaxed">
                                Metrics are updated every 24 hours, ensuring performance data is always
                                up-to-date.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE — IMAGES */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-1">
                        {/* TOP IMAGE */}
                        <div className="w-[620px] rounded-2xl overflow-hidden shadow-xl z-10 ml-6">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
                                className="w-full h-full object-cover"
                                alt="Analytics dashboard preview"
                            />
                        </div>

                        {/* BOTTOM IMAGE */}
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
        </>
    );
};

export default CampaignsTracking;
