import React, { useState } from "react";
import { Search } from "lucide-react";
import FilterButton from "../components/FilterButton";
import PlatformDropdown from "../components/PlatformDropdown";

const PLATFORMS = [
    { value: "any", label: "Any" },
    { value: "instagram", label: "Instagram" },
    { value: "tiktok", label: "TikTok" },
    { value: "ugc", label: "User Generated Content" },
    { value: "youtube", label: "YouTube" },
    { value: "twitter", label: "Twitter" },
    { value: "twitch", label: "Twitch" },
    { value: "amazon", label: "Amazon" },
];

const HomeHeroSection = () => {
    const [platform, setPlatform] = useState("any");

    return (
        <>
            {/* Hero Title */}
            <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                <h1 className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-[2.6rem] md:text-5xl leading-tight tracking-tight mb-3">
                    Influencer Marketing Made Easy
                </h1>

                <p className="text-gray-500 text-lg leading-relaxed max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                    Find and hire top Instagram, TikTok, YouTube, and UGC influencers to create unique content for your brand
                </p>
            </div>

            {/* Search Section */}
            <div className="max-w-6xl mx-auto px-6 mb-12">
                {/* Compact Search Bar */}
                <div className="bg-white rounded-[32px] p-2 shadow-[0_10px_28px_rgba(16,24,40,0.06),0_2px_8px_rgba(16,24,40,0.04)] lg:shadow-[0_14px_40px_rgba(16,24,40,0.07),0_6px_20px_rgba(16,24,40,0.04)] flex items-center gap-2">
                    {/* Inputs */}
                    <div className="flex-1 flex items-center gap-4">
                        {/* Platform (custom dropdown) */}
                        <div className="flex-1">
                            <PlatformDropdown
                                options={PLATFORMS}
                                value={platform}
                                onChange={(v) => setPlatform(v)}
                            />
                        </div>

                        {/* Divider */}
                        <div className="w-px h-8 bg-gray-200" />

                        {/* Category */}
                        <div className="flex-1 px-4 py-2">
                            <label className="block text-[11px] font-medium text-gray-500 mb-1">
                                Category
                            </label>
                            <input
                                type="text"
                                placeholder="Enter keywords, niches or categories"
                                className="w-full text-gray-500 bg-transparent border-0 outline-0 p-0 text-sm placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Search Button */}
                    <button className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-black transition-shadow shadow-sm">
                        <Search size={16} />
                    </button>
                </div>

                {/* Filters Row */}
                <div className="mt-6 flex flex-wrap gap-3 items-center">
                    <FilterButton label="Content Type" />
                    <FilterButton label="Followers" />
                    <FilterButton label="Location" />
                    <FilterButton label="Price" />
                    <FilterButton label="Gender" />
                    <FilterButton label="Age" isPremium />
                    <FilterButton label="Ethnicity" isPremium />
                    <FilterButton label="Language" isPremium />

                    <button className="text-gray-600 text-sm underline hover:text-gray-900 ml-2">
                        Clear All
                    </button>
                </div>
            </div>

            {/* Press Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <p className="text-center text-gray-400 text-sm font-medium mb-12">
                    As seen in
                </p>

                <div className="flex items-center justify-center gap-16 flex-wrap">
                    {/* BuzzFeed */}
                    <div className="text-gray-300 font-bold text-3xl tracking-tight">
                        BuzzFeed
                    </div>

                    {/* Bloomberg */}
                    <div className="text-gray-300 font-bold text-3xl tracking-tight">
                        Bloomberg
                    </div>

                    {/* The New York Times */}
                    <div className="text-gray-400 font-serif text-2xl">
                        The New York Times
                    </div>

                    {/* Forbes */}
                    <div className="text-gray-300 font-serif text-4xl tracking-wide">
                        Forbes
                    </div>

                    {/* Shopify */}
                    <div className="flex items-center gap-2">
                        <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.5 8.5C28.4 8.4 24.3 8.2 24.3 8.2C24.3 8.2 21.2 5.2 20.8 4.8C20.4 4.4 19.7 4.5 19.4 4.6C19.4 4.6 18.7 4.8 17.5 5.2C17.3 4.6 17 3.9 16.5 3.2C15.5 1.8 14.1 1.1 12.5 1.1C12.4 1.1 12.3 1.1 12.2 1.1C12.1 0.9 12 0.7 11.8 0.6C11.2 0 10.4 -0.2 9.5 0.1C7.7 0.7 5.9 2.3 4.5 4.7C3.5 6.4 2.7 8.5 2.5 10.2C0.4 10.9 0 11 0 11C0 11 0 11.1 0 11.4C0 11.6 0 19.6 0 19.6L19.8 22.5V4.4C19.8 4.4 28.6 8.6 28.5 8.5ZM15.8 5.9C14.9 6.2 13.9 6.5 12.8 6.8C12.8 5.6 12.6 4.1 12 2.8C13.9 3.1 15.1 4.8 15.8 5.9ZM12.5 7C11.1 7.4 9.6 7.8 8.1 8.3C8.5 6.8 9.3 5.3 10.3 4.3C10.7 3.9 11.2 3.5 11.7 3.2C12.4 4.4 12.6 5.8 12.5 7ZM9.8 1.2C10.2 1.2 10.5 1.3 10.8 1.5C10.3 1.8 9.7 2.2 9.2 2.7C7.8 4.1 6.8 6.2 6.4 8.2L4 8.9C4.6 6.5 6.8 1.9 9.8 1.2Z" fill="#95BF47" />
                            <path d="M28.5 8.5C28.4 8.4 24.3 8.2 24.3 8.2C24.3 8.2 21.2 5.2 20.8 4.8C20.6 4.6 20.3 4.5 20 4.5V22.5L32 19.6C32 19.6 28.6 8.6 28.5 8.5Z" fill="#5E8E3E" />
                            <path d="M12.5 11.5L11 16.5C11 16.5 9.8 15.8 8.3 15.8C6.2 15.8 6.1 17.1 6.1 17.4C6.1 19.3 10.9 20 10.9 24.5C10.9 28 8.5 30 5.5 30C2 30 0.3 27.8 0.3 27.8L1.3 24.3C1.3 24.3 3.1 25.9 4.8 25.9C5.9 25.9 6.4 25 6.4 24.3C6.4 21.8 2.5 21.8 2.5 17.7C2.5 14.3 5 11 9.8 11C11.7 11 12.5 11.5 12.5 11.5Z" fill="white" />
                        </svg>
                        <span className="text-gray-400 font-bold text-2xl tracking-wide">
                            shopify
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSection;
