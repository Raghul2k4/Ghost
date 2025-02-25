import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-green-400 tracking-tight leading-tight">
          Unlock Exclusive Savings
        </h1>
        <h2 className="text-3xl mt-4 text-gray-300">Gaming Deals & Discounts</h2>
      </div>

      {/* Best Offers Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
        {/* 30% Off Card */}
        <div className="group relative rounded-3xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/1003/987/595/pubg-player-unknown-battleground-players-hd-wallpaper-thumb.jpg"
            alt="Offer Background"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="relative p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-4xl font-bold">
                  30% <span className="text-sm">OFF</span>
                </p>
                <p className="mt-2 text-gray-300">Limited Time</p>
              </div>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full mt-6">
              Claim Now
            </button>
          </div>
        </div>

        {/* 20% Off Card */}
        <div className="group relative rounded-3xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://pcoptimizedsettings.com/wp-content/uploads/2024/04/compress_GTA-V-1024x576-1.jpg"
            alt="Offer Background"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="relative p-8 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-4xl font-bold">
                  20% <span className="text-sm">OFF</span>
                </p>
                <p className="mt-2 text-gray-300">Exclusive Deal</p>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 font-semibold py-3 px-6 rounded-full mt-6">
              Get Offer
            </button>
          </div>
        </div>

        {/* Best Deal Card */}
        <div className="group relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-r from-green-600 to-green-800 transition-transform transform hover:scale-105">
          <div className="relative p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-4xl font-bold">Best Deal</p>
                <p className="mt-2 text-gray-300">Top Pick</p>
              </div>
            </div>
            <button className="bg-green-900 hover:bg-green-800 font-semibold py-3 px-6 rounded-full mt-6">
              View Deal
            </button>
          </div>
        </div>

        {/* Summer Deal Card */}
        <div className="group relative rounded-3xl shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://img.goodfon.com/wallpaper/big/1/ea/lost-in-random-igralnyi-kubik-devochka-sushchestva.webp"
            alt="Offer Background"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-red-700 opacity-70"></div>
          <div className="relative p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-4xl font-bold">Summer Sale</p>
                <p className="mt-2 text-gray-300">Hot Offers</p>
              </div>
            </div>
            <button className="bg-red-800 hover:bg-red-900 font-semibold py-3 px-6 rounded-full mt-6">
              Explore Sale
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-400">
        <p className="text-lg">Your #1 Source for Gaming Deals</p>
      </div>
    </div>
  );
}

export default App;