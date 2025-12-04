import React from "react";
import { Star, Youtube } from "lucide-react";

const YouTubeUGCSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      
      {/* YouTube Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[28px] font-semibold text-gray-900">YouTube</h2>
            <p className="text-gray-500 text-[15px]">Hire YouTube influencers</p>
          </div>
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* YouTube Card 1 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
                alt="Luke Mizel"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-900/90 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-medium">
                  <span className="text-yellow-400">👑</span> Top Creator
                </span>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <Youtube size={14} className="text-red-600" />
                  999.0k
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <Youtube size={14} className="text-red-600" />
                  999.0k
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Luke Mizel</span>
                  <Star size={12} fill="#FDB022" stroke="#FDB022" />
                  <span className="text-sm font-medium text-gray-900">5.0</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Ugc Pro, Short-Form Content E...</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$2,400</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">San Diego, CA, US</p>
          </div>

          {/* YouTube Card 2 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=600&fit=crop"
                alt="Oleksa"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-900/90 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-medium">
                  <span className="text-yellow-400">👑</span> Top Creator
                </span>
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-medium">
                  ⚡ Responds Fast
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <Youtube size={14} className="text-red-600" />
                  90.2k
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Oleksa</span>
                  <Star size={12} fill="#FDB022" stroke="#FDB022" />
                  <span className="text-sm font-medium text-gray-900">5.0</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Skincare Influencer, Ugc Crea...</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$450</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">Los Angeles, CA, US</p>
          </div>

          {/* YouTube Card 3 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop"
                alt="Theo De Blic"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <Youtube size={14} className="text-red-600" />
                  110.0k
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Theo De Blic</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Professional Athlete - World ...</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$7,000</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">Chambery, FR</p>
          </div>

          {/* YouTube Card 4 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop"
                alt="Louise Barnard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <Youtube size={14} className="text-red-600" />
                  92.8k
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Louise Barnard</span>
                  <Star size={12} fill="#FDB022" stroke="#FDB022" />
                  <span className="text-sm font-medium text-gray-900">5.0</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Model, Beauty And Skin Care E...</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$2,250</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">Miami, FL, US</p>
          </div>

        </div>
      </div>

      {/* User Generated Content Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-[28px] font-semibold text-gray-900">User Generated Content</h2>
            <p className="text-gray-500 text-[15px]">Purchase high-quality UGC</p>
          </div>
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* UGC Card 1 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop"
                alt="Hollie"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-900/90 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-medium">
                  <span className="text-yellow-400">👑</span> Top Creator
                </span>
                <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-medium">
                  ⚡ Responds Fast
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <span className="text-xs">📷</span> UGC
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Hollie</span>
                  <Star size={12} fill="#FDB022" stroke="#FDB022" />
                  <span className="text-sm font-medium text-gray-900">4.9</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Health, Fitness And Wellness ...</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$50</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">Cardiff, CRF, GB</p>
          </div>

          {/* UGC Card 2 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=600&fit=crop"
                alt="Peixi Kwee"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <span className="text-xs">📷</span> UGC
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Peixi Kwee</span>
                  <Star size={12} fill="#FDB022" stroke="#FDB022" />
                  <span className="text-sm font-medium text-gray-900">4.8</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Luxury Fashion, Beauty, Lifes...</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$150</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">New York, NY, US</p>
          </div>

          {/* UGC Card 3 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop"
                alt="Daniela Rae"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <span className="text-xs">📷</span> UGC
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Daniela Rae</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Travel, Outdoors, Lifestyle 🌸</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$50</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">Vancouver, BC, CA</p>
          </div>

          {/* UGC Card 4 */}
          <div className="flex flex-col">
            <div className="relative rounded-xl overflow-hidden h-[280px] mb-3">
              <img
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop"
                alt="Dani Guillory"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-gray-900/90 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 font-medium">
                  <span className="text-yellow-400">👑</span> Top Creator
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="bg-white rounded-md px-2 py-1 text-xs font-medium flex items-center gap-1">
                  <span className="text-xs">📷</span> UGC
                </span>
                <div className="flex items-center gap-1 bg-white/90 rounded-md px-2 py-1">
                  <span className="text-sm font-semibold text-gray-900">Dani Guillory</span>
                  <Star size={12} fill="#FDB022" stroke="#FDB022" />
                  <span className="text-sm font-medium text-gray-900">5.0</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <p className="text-[15px] text-gray-900 font-medium">Fashion, Self Care, Lifestyle</p>
              <p className="text-[15px] font-semibold text-gray-900 whitespace-nowrap ml-3">$50</p>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">Los Angeles, CA, US</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default YouTubeUGCSection;