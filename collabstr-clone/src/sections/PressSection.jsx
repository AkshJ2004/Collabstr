import React from "react";

const PressSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-center text-gray-400 text-sm font-medium mb-12">
        As seen in
      </p>

      <div className="flex items-center justify-center gap-16 flex-wrap">
        {/* BuzzFeed */}
        <div className="text-gray-300 font-bold text-3xl tracking-tight">
          BuzzFeed
        </div>

        {/* Bloomberg */}
        <div className="text-gray-300 font-bold text-3xl tracking-tight">
          Bloomberg
        </div>

        {/* The New York Times */}
        <div className="text-gray-400 font-serif text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
          The New York Times
        </div>

        {/* Forbes */}
        <div className="text-gray-300 font-serif text-4xl tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
          Forbes
        </div>

        {/* Shopify */}
        <div className="flex items-center gap-2">
          <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5 8.5C28.4 8.4 24.3 8.2 24.3 8.2C24.3 8.2 21.2 5.2 20.8 4.8C20.4 4.4 19.7 4.5 19.4 4.6C19.4 4.6 18.7 4.8 17.5 5.2C17.3 4.6 17 3.9 16.5 3.2C15.5 1.8 14.1 1.1 12.5 1.1C12.4 1.1 12.3 1.1 12.2 1.1C12.1 0.9 12 0.7 11.8 0.6C11.2 0 10.4 -0.2 9.5 0.1C7.7 0.7 5.9 2.3 4.5 4.7C3.5 6.4 2.7 8.5 2.5 10.2C0.4 10.9 0 11 0 11C0 11 0 11.1 0 11.4C0 11.6 0 19.6 0 19.6L19.8 22.5V4.4C19.8 4.4 28.6 8.6 28.5 8.5ZM15.8 5.9C14.9 6.2 13.9 6.5 12.8 6.8C12.8 5.6 12.6 4.1 12 2.8C13.9 3.1 15.1 4.8 15.8 5.9ZM12.5 7C11.1 7.4 9.6 7.8 8.1 8.3C8.5 6.8 9.3 5.3 10.3 4.3C10.7 3.9 11.2 3.5 11.7 3.2C12.4 4.4 12.6 5.8 12.5 7ZM9.8 1.2C10.2 1.2 10.5 1.3 10.8 1.5C10.3 1.8 9.7 2.2 9.2 2.7C7.8 4.1 6.8 6.2 6.4 8.2L4 8.9C4.6 6.5 6.8 1.9 9.8 1.2Z" fill="#95BF47"/>
            <path d="M28.5 8.5C28.4 8.4 24.3 8.2 24.3 8.2C24.3 8.2 21.2 5.2 20.8 4.8C20.6 4.6 20.3 4.5 20 4.5V22.5L32 19.6C32 19.6 28.6 8.6 28.5 8.5Z" fill="#5E8E3E"/>
            <path d="M12.5 11.5L11 16.5C11 16.5 9.8 15.8 8.3 15.8C6.2 15.8 6.1 17.1 6.1 17.4C6.1 19.3 10.9 20 10.9 24.5C10.9 28 8.5 30 5.5 30C2 30 0.3 27.8 0.3 27.8L1.3 24.3C1.3 24.3 3.1 25.9 4.8 25.9C5.9 25.9 6.4 25 6.4 24.3C6.4 21.8 2.5 21.8 2.5 17.7C2.5 14.3 5 11 9.8 11C11.7 11 12.5 11.5 12.5 11.5Z" fill="white"/>
          </svg>
          <span className="text-gray-400 font-bold text-2xl tracking-wide" style={{ fontFamily: 'sans-serif' }}>
            shopify
          </span>
        </div>
      </div>
    </div>
  );
};

export default PressSection;