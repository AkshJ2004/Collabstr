import Header from '../layout/Header';
import HomeHeroSection from '../sections/HomeHeroSection';
import DiscoverSection from '../sections/DiscoverSection';
import FeaturesShowcase from '../sections/FeaturesShowcase';
import CampaignsTracking from '../sections/CampaignsTracking';
import SocialProof from '../sections/SocialProof';
import YouTubeUGCSection from '../sections/YouTubeUGCSection';
import ClosingSection from '../sections/ClosingSection';
import Footer from '../layout/Footer';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <HomeHeroSection />
            <DiscoverSection />
            <FeaturesShowcase />
            <CampaignsTracking />
            <SocialProof />
            <YouTubeUGCSection />
            <ClosingSection />
            <Footer />
        </div>
    );
};

export default HomePage;
