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

const SearchSection = () => {
  const [platform, setPlatform] = useState("any");

  return (
    <div className="max-w-6xl mx-auto px-6 mb-12">

      {/* Compact Search Bar */}
      <div className="bg-white rounded-[32px] p-2 shadow-search flex items-center gap-2">

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
              className="w-full text-gray-500 bg-transparent border-0 outline-0 p-0 text-sm"
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
  );
};

export default SearchSection;
