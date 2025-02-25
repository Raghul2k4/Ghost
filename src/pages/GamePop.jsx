import React from 'react';

const GamePopup = ({ selectedGame, setSelectedGame }) => {
  if (!selectedGame) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-md">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl w-full max-w-sm relative transform transition-all duration-300 scale-100 hover:scale-105">
        <img
          src={selectedGame.image}
          alt={selectedGame.name}
          className="w-full h-56 object-cover rounded-md mb-4 shadow-md"
        />
        <h2 className="text-2xl font-semibold mb-2 text-blue-400 tracking-wide">
          {selectedGame.name}
        </h2>
        <p className="text-gray-300 text-base mb-3 leading-relaxed">
          {selectedGame.description}
        </p>
        <div className="grid grid-cols-2 gap-y-1 mb-4 text-sm">
          <span className="font-medium text-gray-200">Category:</span>
          <span className="text-gray-400">{selectedGame.category}</span>
          <span className="font-medium text-gray-200">Size:</span>
          <span className="text-gray-400">{selectedGame.size}</span>
          <span className="font-medium text-gray-200">Developer:</span>
          <span className="text-gray-400">{selectedGame.developer}</span>
          <span className="font-medium text-gray-200">Release Date:</span>
          <span className="text-gray-400">{selectedGame.releaseDate}</span>
          <span className="font-medium text-gray-200">Rating:</span>
          <span className="text-yellow-400">⭐ {selectedGame.rating}</span>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-full text-sm transition-colors duration-200"
            onClick={() => setSelectedGame(null)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePopup;