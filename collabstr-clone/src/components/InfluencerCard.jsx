import { Link } from "react-router-dom";
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
  index = 0,
  type = "instagram"
}) => {
  return (
    <Link to={`/creator/${type}/${index}`} className="block w-full min-w-[200px]">
      <div className="flex flex-col cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-[330px] rounded-xl overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {topCreator && (
              <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <span>👑</span> Top Creator
              </span>
            )}
            {respondsFast && (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <span>⚡</span> Responds Fast
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
            <Star size={14} className="text-yellow-400" fill="#FACC15" />
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
    </Link>
  );
};

export default InfluencerCard;
