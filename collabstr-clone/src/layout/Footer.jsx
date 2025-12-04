import React from 'react';

const Footer = () => {
  const columns = [
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Resource Hub', href: '/resources' },
        { label: 'Affiliate Program', href: '/affiliate' },
        { label: 'TikTok Ebook For Brands', href: '/ebooks/tiktok-for-brands' },
        { label: '2025 Influencer Marketing Report', href: '/reports/2025-influencer-marketing' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { label: 'Influencer Price Calculator', href: '/tools/price-calculator' },
        { label: 'Instagram Fake Follower Checker', href: '/tools/ig-fake-checker' },
        { label: 'TikTok Fake Follower Checker', href: '/tools/tiktok-fake-checker' },
        { label: 'Instagram Engagement Rate Calculator', href: '/tools/ig-engagement' },
        { label: 'TikTok Engagement Rate Calculator', href: '/tools/tiktok-engagement' },
        { label: 'Influencer Campaign Brief Template', href: '/templates/campaign-brief' },
        { label: 'Influencer Contract Template', href: '/templates/contract' },
        { label: 'Influencer Analytics & Tracking', href: '/analytics' },
        { label: 'Instagram Reels Downloader', href: '/tools/ig-reels-downloader' },
        { label: 'TikTok Video Downloader', href: '/tools/tiktok-downloader' },
      ],
    },
    {
      title: 'Discover',
      links: [
        { label: 'Find Influencers', href: '/discover' },
        { label: 'Top Influencers', href: '/discover/top' },
        { label: 'Search Influencers', href: '/search' },
        { label: 'Buy Shoutouts', href: '/shoutouts' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'How It Works', href: '/how-it-works' },
        { label: 'Frequently Asked Questions', href: '/faq' },
      ],
    },
  ];

  return (
    <>
      <div className="border-t border-gray-200" />
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-gray-900 font-semibold text-lg mb-6">{col.title}</h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
