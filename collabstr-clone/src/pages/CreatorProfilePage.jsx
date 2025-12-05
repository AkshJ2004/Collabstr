import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Share2, Heart, ChevronDown, ChevronUp, Instagram, Youtube, Lock, Play, Plus, Camera } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { creatorsData } from '../data/creatorsData';
import { instagramData } from '../data/instagramData';

const CreatorProfilePage = () => {
    const { id, type } = useParams();
    const [selectedPackage, setSelectedPackage] = useState(0);
    const [activeTab, setActiveTab] = useState('All');
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Get creator data based on type and id
    const allCreators = type === 'instagram' ? instagramData : creatorsData;
    const creator = allCreators[parseInt(id)] || allCreators[0];

    // Sample packages data
    const packages = [
        { id: 1, name: '1 Instagram Reel (60 Seconds)', price: 200, category: 'Instagram' },
        { id: 2, name: '2 Instagram Reels (60 Seconds)', price: 400, category: 'Instagram' },
        { id: 3, name: '3 Instagram Reels (60 Seconds)', price: 600, category: 'Instagram' },
        { id: 4, name: '1 UGC Product Photo', price: 50, category: 'UGC' },
        { id: 5, name: '1 UGC Product Video (60 Seconds)', price: 200, category: 'UGC' },
        { id: 6, name: '3 UGC Product Videos (60 Seconds)', price: 500, category: 'UGC' },
    ];

    // Sample portfolio images
    const portfolioItems = [
        { type: 'video', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop' },
        { type: 'video', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop' },
        { type: 'video', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop' },
        { type: 'video', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop' },
        { type: 'video', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=400&fit=crop' },
        { type: 'image', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop' },
    ];

    // FAQ data
    const faqs = [
        { question: 'Who is your audience?', answer: 'My audience is primarily young women aged 18-34 who are interested in fashion, beauty, and lifestyle content.' },
        { question: 'What brands have you worked with?', answer: 'I have collaborated with brands like Nike, Sephora, Revolve, and many more fashion and beauty companies.' },
    ];

    // Related categories
    const relatedCategories = [
        'Find Instagram Influencers',
        'Find UGC Influencers',
        'Find Fashion Influencers',
        'Find Beauty Influencers',
        'Find Lifestyle Influencers',
    ];

    const filteredPackages = activeTab === 'All'
        ? packages
        : packages.filter(p => p.category === activeTab);

    // Get creator name and other details
    const creatorName = creator.name || 'Creator';
    const creatorImage = creator.image || creator.img || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400';
    const creatorCategory = creator.category || 'Content Creator';
    const creatorLocation = creator.location || 'United States';
    const creatorRating = creator.rating || 5.0;
    const creatorPrice = creator.price?.toString().replace('$', '') || '200';

    // Gallery images
    const galleryImages = [
        creatorImage,
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=400&fit=crop',
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Category Title & Actions */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-medium text-gray-900">{creatorCategory}</h1>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                            <Share2 size={18} />
                            <span>Share</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                            <Heart size={18} />
                            <span>Save</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Left Content */}
                    <div className="flex-1">
                        {/* Photo Gallery */}
                        <div className="grid grid-cols-3 gap-2 mb-8 rounded-xl overflow-hidden">
                            <div className="col-span-1 row-span-1">
                                <img
                                    src={galleryImages[0]}
                                    alt="Gallery 1"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                            <div className="col-span-1">
                                <img
                                    src={galleryImages[1]}
                                    alt="Gallery 2"
                                    className="w-full h-[300px] object-cover"
                                />
                            </div>
                            <div className="col-span-1 relative">
                                <img
                                    src={galleryImages[2]}
                                    alt="Gallery 3"
                                    className="w-full h-[300px] object-cover"
                                />
                                <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                                    <span className="grid grid-cols-2 gap-0.5">
                                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></span>
                                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></span>
                                    </span>
                                    Show All Photos
                                </button>
                            </div>
                        </div>

                        {/* Creator Info */}
                        <div className="flex items-start gap-4 mb-6">
                            <img
                                src={creatorImage}
                                alt={creatorName}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h2 className="text-xl font-semibold text-gray-900">{creatorName}</h2>
                                    <div className="flex items-center gap-1">
                                        <Star size={16} fill="#FDB022" stroke="#FDB022" />
                                        <span className="font-medium">{creatorRating}</span>
                                    </div>
                                    <span className="text-blue-600 text-sm">· 5 Reviews</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-2">{creatorLocation}</p>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-full text-sm hover:bg-gray-50">
                                        <Instagram size={14} />
                                        <span className="text-blue-500">Followers</span>
                                    </button>
                                    <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-full text-sm hover:bg-gray-50">
                                        <Youtube size={14} />
                                        <span className="text-red-500">Followers</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Top Creator Badge */}
                        <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-lg">👑</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">{creatorName} is a Top Creator</h3>
                                <p className="text-gray-600 text-sm">Top creators have completed multiple orders and have a high rating from brands.</p>
                            </div>
                        </div>

                        {/* Bio */}
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Hello! My name is {creatorName.split(' ')[0]}, I am a {creatorCategory.toLowerCase()} content creator! I have made UGC videos, brand videos, & I also have a lifestyle YouTube channel. I love to create and edit content. I love engaging an audience & I'm passionate about all things self care, fashion and lifestyle!
                        </p>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-8"></div>

                        {/* Packages Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Packages</h2>

                            {/* Tabs */}
                            <div className="flex gap-8 border-b border-gray-200 mb-6">
                                {['All', 'Instagram', 'UGC'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`pb-3 text-sm font-medium transition-colors ${activeTab === tab
                                                ? 'text-gray-900 border-b-2 border-gray-900'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Package List */}
                            <div className="space-y-3">
                                {filteredPackages.map((pkg, index) => (
                                    <div
                                        key={pkg.id}
                                        onClick={() => setSelectedPackage(index)}
                                        className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${selectedPackage === index
                                                ? 'border-pink-500 bg-pink-50/30'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Camera size={20} className="text-gray-600" />
                                            <span className="font-medium text-gray-900">{pkg.name}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-gray-900">${pkg.price}</span>
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPackage === index
                                                    ? 'border-pink-500 bg-gradient-to-r from-pink-500 to-purple-500'
                                                    : 'border-gray-300'
                                                }`}>
                                                {selectedPackage === index && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Negotiate Package */}
                                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                            💬
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-900">Negotiate a Package</span>
                                            <p className="text-gray-500 text-sm">Tailor a collaboration to your needs: propose custom terms, pricing, or requirements.</p>
                                        </div>
                                    </div>
                                    <Plus size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-8"></div>

                        {/* Analytics Section */}
                        <div className="mb-8 relative">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Analytics</h2>

                            {/* Blurred Content */}
                            <div className="relative">
                                <div className="blur-sm pointer-events-none">
                                    {/* Platform Tabs */}
                                    <div className="flex gap-6 mb-6">
                                        <span className="flex items-center gap-2 text-gray-900 font-medium">
                                            <Instagram size={16} /> Instagram
                                        </span>
                                        <span className="text-gray-400">TikTok</span>
                                        <span className="text-gray-400">YouTube</span>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex gap-12 mb-8">
                                        <div>
                                            <p className="text-3xl font-bold text-gray-900">1.5M</p>
                                            <p className="text-gray-500 text-sm">Followers</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-gray-900">250k</p>
                                            <p className="text-gray-500 text-sm">Average Views</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-gray-900">5.07%</p>
                                            <p className="text-gray-500 text-sm">Engagement</p>
                                        </div>
                                    </div>

                                    {/* Charts */}
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-4">Audience Location</h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-blue-400 rounded"></div>
                                                    <span className="text-sm text-gray-600">40%</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 h-2 bg-blue-300 rounded" style={{ width: '60%' }}></div>
                                                    <span className="text-sm text-gray-600">25%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-4">Audience Age</h4>
                                            <div className="flex items-end gap-2 h-20">
                                                {[40, 80, 60, 45, 30, 20].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-blue-400 rounded-t" style={{ height: `${h}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gender Chart */}
                                    <div className="mt-8">
                                        <h4 className="font-medium text-gray-900 mb-4">Audience Gender</h4>
                                        <div className="w-24 h-24 rounded-full border-8 border-blue-400 border-r-gray-200"></div>
                                    </div>
                                </div>

                                {/* Unlock Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-gray-900 text-white px-6 py-4 rounded-xl flex items-center gap-3 shadow-xl">
                                        <Lock size={20} />
                                        <span>Create a free account to unlock analytics for 350,000+ creators</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-8"></div>

                        {/* Portfolio Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Portfolio</h2>
                            <div className="grid grid-cols-3 gap-3">
                                {portfolioItems.map((item, index) => (
                                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group">
                                        <img
                                            src={item.image}
                                            alt={`Portfolio ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {item.type === 'video' && (
                                            <div className="absolute bottom-3 left-3">
                                                <Play size={24} fill="white" stroke="white" className="drop-shadow-lg" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-8"></div>

                        {/* FAQ Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQ</h2>
                            <div className="space-y-0">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100">
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                            className="w-full flex items-center justify-between py-4 text-left"
                                        >
                                            <span className="font-medium text-gray-900">{faq.question}</span>
                                            {expandedFaq === index ? (
                                                <ChevronUp size={20} className="text-gray-500" />
                                            ) : (
                                                <Plus size={20} className="text-gray-500" />
                                            )}
                                        </button>
                                        {expandedFaq === index && (
                                            <p className="pb-4 text-gray-600">{faq.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-8"></div>

                        {/* Related Categories */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Categories</h2>
                            <div className="flex flex-wrap gap-2">
                                {relatedCategories.map((category, index) => (
                                    <Link
                                        key={index}
                                        to="/"
                                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        {category}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sticky Sidebar */}
                    <div className="w-[350px] flex-shrink-0">
                        <div className="sticky top-8">
                            <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
                                <p className="text-3xl font-bold text-gray-900 mb-4">${creatorPrice}</p>

                                {/* Package Dropdown */}
                                <div className="relative mb-4">
                                    <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-gray-300">
                                        <div className="flex items-center gap-2">
                                            <Camera size={18} className="text-gray-600" />
                                            <span className="text-sm">{packages[selectedPackage]?.name || '1 Instagram Reel (60 Seconds)'}</span>
                                        </div>
                                        <ChevronDown size={18} className="text-gray-500" />
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full py-3.5 bg-gradient-to-r from-pink-500 to-red-400 text-white font-medium rounded-xl hover:opacity-90 transition-opacity mb-4">
                                    Add to Cart
                                </button>

                                <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-4">
                                    <span className="flex-1 h-px bg-gray-200"></span>
                                    <span>or</span>
                                    <span className="flex-1 h-px bg-gray-200"></span>
                                </div>

                                <button className="w-full text-center font-medium text-gray-900 underline hover:text-gray-700">
                                    Negotiate a Package
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CreatorProfilePage;
