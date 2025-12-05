import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CreatorCard from '../components/CreatorCard';
import { creatorsData } from '../data/creatorsData';

const FeaturedPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Link>

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Featured Creators</h1>
                    <p className="text-gray-600">Hire top influencers across all platforms</p>
                </div>

                {/* 6 Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {creatorsData.map((creator, index) => (
                        <CreatorCard key={index} creator={creator} index={index} type="featured" />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FeaturedPage;
