import React from "react";

const CategorySection = () => {
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
  );
};

export default CategorySection;