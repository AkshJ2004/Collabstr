import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ClosingSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is Influencer Marketing?",
            answer: "Influencer marketing is a form of marketing that focuses on using key leaders to drive your brand's message to the larger market. Rather than marketing directly to a large group of consumers, you instead pay influencers to get out the word for you. Influencers are individuals who have the power to affect purchase decisions of others because of their authority, knowledge, position, or relationship with their audience."
        },
        {
            question: "How Does Influencer Marketing Work?",
            answer: "Influencer marketing works by partnering with content creators who have established credibility and a dedicated following on social media platforms. Brands collaborate with these influencers to promote their products or services through authentic content. The process typically involves: 1) Identifying the right influencers for your brand, 2) Reaching out and negotiating terms, 3) The influencer creates and shares content featuring your product, 4) Measuring the campaign's performance through engagement metrics and conversions."
        },
        {
            question: "Why is Influencer Marketing Important?",
            answer: "Influencer marketing is important because it helps brands reach targeted audiences in an authentic way. Consumers trust recommendations from people they follow and admire more than traditional advertising. Benefits include: increased brand awareness, improved credibility, higher engagement rates, access to niche audiences, better ROI compared to traditional advertising, and the ability to create authentic content that resonates with your target market."
        },
        {
            question: "How Can I Find the Right Influencers for My Brand?",
            answer: "Finding the right influencers involves several key steps: 1) Define your campaign goals and target audience, 2) Research influencers in your niche using platforms like Collabstr, 3) Analyze their engagement rates, audience demographics, and content quality, 4) Check their authenticity and past brand collaborations, 5) Consider micro-influencers for better engagement and affordability, 6) Review their values and ensure they align with your brand. Use Collabstr's search filters to narrow down by platform, category, location, and follower count."
        },
        {
            question: "What Are the Benefits of Influencer Marketing for My brand?",
            answer: "Influencer marketing offers numerous benefits: 1) Enhanced brand awareness and reach to new audiences, 2) Increased trust and credibility through authentic recommendations, 3) Higher engagement rates compared to traditional ads, 4) Improved SEO and website traffic, 5) Cost-effective compared to traditional advertising, 6) Access to high-quality user-generated content, 7) Better targeting of niche audiences, 8) Measurable ROI through tracking and analytics, 9) Faster purchasing decisions from consumers, 10) Long-term partnerships that build brand loyalty."
        },
        {
            question: "How Much Does Influencer Marketing Cost?",
            answer: "Influencer marketing costs vary widely depending on several factors: platform, follower count, engagement rate, content type, and campaign duration. Generally: Nano-influencers (1K-10K followers) charge $10-$100 per post, Micro-influencers (10K-50K) charge $100-$500, Mid-tier influencers (50K-500K) charge $500-$5,000, Macro-influencers (500K-1M) charge $5,000-$10,000, and Mega-influencers (1M+) can charge $10,000+. On Collabstr, you can find influencers at various price points with transparent pricing, and there are no upfront platform fees."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* FAQ Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between py-6 text-left group transition-colors"
                            >
                                <h3 className="text-[18px] font-semibold text-gray-900 pr-8">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    {openIndex === index ? (
                                        <Minus size={22} className="text-gray-500" />
                                    ) : (
                                        <Plus size={22} className="text-gray-500" />
                                    )}
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="pb-6 pr-12">
                                    <p className="text-[16px] text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}

                            {index < faqs.length - 1 && (
                                <div className="border-b border-gray-200" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-[36px] md:text-[42px] font-bold text-gray-900 mb-6 leading-tight">
                        Ready to Get Started with Influencer Marketing?
                    </h2>

                    <p className="text-[18px] text-gray-600 mb-10 max-w-2xl mx-auto">
                        Join 250,000+ brands and creators using Collabstr to create amazing content and grow their businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="px-8 py-4 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-[0_10px_30px_rgba(139,92,246,0.25)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.35)] transition-all duration-200 transform hover:-translate-y-0.5">
                            Get Started Free
                        </button>

                        <button className="px-8 py-4 bg-white text-gray-900 font-semibold text-lg rounded-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClosingSection;
