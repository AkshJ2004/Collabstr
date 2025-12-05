import React from "react";
import { Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";
import InfluencerCard from "../components/InfluencerCard";
import { creatorsData } from "../data/creatorsData";

const DiscoverSection = () => {
    const categories = [
        {
            name: "Fashion",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
        },
        {
            name: "Music & Dance",
            image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
        },
        {
            name: "Beauty",
            image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop",
        },
        {
            name: "Travel",
            image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
        },
    ];

    return (
        <>
            {/* Featured Section */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Featured</h2>
                        <p className="text-gray-600 text-sm">Hire top influencers across all platforms</p>
                    </div>
                    <Link to="/featured" className="text-sm font-medium text-gray-900 hover:text-gray-700">
                        See All
                    </Link>
                </div>

                {/* Creator Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {creatorsData.slice(0, 4).map((creator, index) => (
                        <CreatorCard key={index} creator={creator} index={index} type="featured" />
                    ))}
                </div>
            </div>

            {/* Instagram Card Section */}
            <div className="max-w-7xl mx-auto px-6 mt-10">
                <div className="flex justify-between mb-3">
                    <div>
                        <h2 className="text-[28px] font-semibold text-gray-900">Instagram</h2>
                        <p className="text-gray-500 text-[15px]">
                            Hire Instagram influencers
                        </p>
                    </div>

                    <Link to="/instagram" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                        See All
                    </Link>
                </div>

                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
                    {/* CARD 1 */}
                    <InfluencerCard
                        index={0}
                        type="instagram"
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
                        index={1}
                        type="instagram"
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
                        index={2}
                        type="instagram"
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
                        index={3}
                        type="instagram"
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

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto px-6 mt-16 mb-12">
                <h2 className="text-[28px] font-semibold text-gray-900 mb-6">Categories</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative h-[220px] rounded-xl overflow-hidden cursor-pointer group"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <h3 className="absolute bottom-5 left-5 text-white text-xl font-semibold">
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default DiscoverSection;
