import React from "react";
import { Star, Instagram } from "lucide-react";

const InfluencerCard = ({
  img,
  topCreator,
  respondsFast,
  followers,
  name,
  rating,
  category,
  location,
  price,
}) => {
  return (
    <div className="w-[310px] flex flex-col">
      {/* Image */}
      <div className="relative w-full h-[330px] rounded-xl overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {topCreator && (
            <span className="badge">
              <span className="emoji">👑</span> Top Creator
            </span>
          )}
          {respondsFast && (
            <span className="badge badge-green">
              <span className="emoji">⚡</span> Responds Fast
            </span>
          )}
        </div>
      </div>

      {/* Followers + Name + Rating */}
      <div className="flex items-center gap-2 mt-2 text-[14px] font-medium text-gray-900">
        <span className="flex items-center gap-1 text-gray-600 text-[13px]">
          <Instagram size={14} />
          {followers}
        </span>
        <span className="font-semibold">{name}</span>
        <span className="flex items-center gap-1 text-gray-600">
          <Star size={14} className="text-yellow-400" />
          {rating}
        </span>
      </div>

      {/* Category / Description */}
      <div className="mt-1 text-[15px] text-gray-900 font-medium">
        {category}
      </div>

      {/* Location / Price */}
      <div className="flex justify-between items-center mt-1">
        <p className="text-gray-500 text-[13px]">{location}</p>
        <p className="font-semibold text-gray-900 text-[15px]">${price}</p>
      </div>
    </div>
  );
};

export default InfluencerCard;
