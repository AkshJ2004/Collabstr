import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import InfluencerCard from '../components/InfluencerCard';
import { instagramData } from '../data/instagramData';

const InstagramPage = () => {
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Instagram Influencers</h1>
                    <p className="text-gray-600">Hire Instagram influencers for your brand</p>
                </div>

                {/* 6 Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {instagramData.map((influencer, index) => (
                        <InfluencerCard
                            key={index}
                            index={index}
                            type="instagram"
                            img={influencer.img}
                            topCreator={influencer.topCreator}
                            respondsFast={influencer.respondsFast}
                            followers={influencer.followers}
                            name={influencer.name}
                            rating={influencer.rating}
                            category={influencer.category}
                            location={influencer.location}
                            price={influencer.price}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default InstagramPage;
