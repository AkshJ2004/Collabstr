import React from "react";
import InfluencerCard from "../components/InfluencerCard";

const CardSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-10">
      <div className="flex justify-between mb-3">
        <div>
          <h2 className="text-[28px] font-semibold text-gray-900">Instagram</h2>
          <p className="text-gray-500 text-[15px]">
            Hire Instagram influencers
          </p>
        </div>

        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
          See All
        </button>
      </div>

      <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
        {/* CARD 1 */}
        <InfluencerCard
          img="https://images.unsplash.com/photo-1556909211-36987daf7a2d"
          topCreator
          respondsFast
          followers="50.0k"
          name="Mila"
          rating="5.0"
          category="Food And Fitness Content Cre..."
          location="Toronto, ON, CA"
          price="300"
        />

        {/* CARD 2 */}
        <InfluencerCard
          img="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          topCreator
          followers="1.4m"
          name="Content Machine"
          rating="5.0"
          category="Comedy Duo (500k)"
          location="Los Angeles, CA, US"
          price="15,000"
        />

        {/* CARD 3 */}
        <InfluencerCard
          img="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
          followers="54.8k"
          name="Daniela Rae"
          rating="5.0"
          category="Travel, Outdoors, Lifestyle 🌸"
          location="Vancouver, BC, CA"
          price="50"
        />

        {/* CARD 4 */}
        <InfluencerCard
          img="https://images.unsplash.com/photo-1517849845537-4d257902454a"
          followers="610.0k"
          name="Barbora Ondrackova"
          rating="4.8"
          category="Content Creator, Blogger & In..."
          location="Prague, CZ"
          price="500"
        />
      </div>
    </div>
  );
};

export default CardSection;
