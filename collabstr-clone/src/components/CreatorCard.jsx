import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const CreatorCard = ({ creator, index = 0, type = 'featured' }) => {
  return (
    <Link to={`/creator/${type}/${index}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="relative">
          <img
            src={creator.image}
            alt={creator.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {creator.isTopCreator && (
              <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={12} fill="white" />
                Top Creator
              </span>
            )}
            {creator.respondsFast && (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                ⚡ Responds Fast
              </span>
            )}
          </div>
          <div className="absolute bottom-3 left-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 text-sm">
            <span className="text-gray-900">{creator.followers}</span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">{creator.name}</h3>
            <div className="flex items-center gap-1">
              <Star size={14} fill="#FDB022" stroke="#FDB022" />
              <span className="text-sm font-medium text-gray-900">{creator.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">{creator.category}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">{creator.location}</span>
            <span className="text-lg font-bold text-gray-900">{creator.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CreatorCard;