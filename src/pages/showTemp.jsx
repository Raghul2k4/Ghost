import React, { useState, useEffect } from 'react';
import GamePopup from './GamePop';
import gamesData from "../assets/JSON/Details.json";
import img from "../assets/ghostimg.jpg";

const ParentComponent = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const combinedGames = [...gamesData.action, ...gamesData.adventure];
    setGames(combinedGames);
    setIsLoading(false);
  }, []);

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-10 flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for a game..."
        />
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
          GameZone
        </h1>
        <p className="text-gray-400 text-lg font-medium">
          Discover and dive into new adventures.
        </p>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {filteredGames.map((game, index) => (
          <div
            key={index}
            onClick={() => setSelectedGame(game)}
            className="relative overflow-hidden rounded-xl bg-[#1a1a1a] shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-64 object-cover transition-opacity duration-300"
              src={game.image || img}
              alt={game.name}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 p-4 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white mb-2">
                {game.name}
              </h3>
              <div className="text-gray-300 text-sm flex justify-between">
                <span className="text-yellow-400 font-medium">⭐ {game.rating}</span>
                <span className="font-light">🎮 {game.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedGame && (
        <GamePopup
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      )}
    </div>
  );
};

export default ParentComponent;
