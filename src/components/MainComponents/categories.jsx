import xbox from "../../assets/xbox.png";
import pc from "../../assets/pc-digital-store-icon-v2.png";
import console from "../../assets/console.png";
import gamesCover from "../../assets/GamesCover.png";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-5xl font-extrabold mb-12 tracking-tight leading-tight">
          Dive into Gaming Universes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="#"
            className="group relative overflow-hidden rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="relative p-8 flex items-center justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
              <h2 className="text-3xl font-semibold z-10 relative">XBOX GAMES</h2>
              <img
                src={xbox}
                alt="Xbox type games"
                className="w-1/3 h-auto z-10 relative"
              />
            </div>
          </Link>

          <Link
            to="#"
            className="group relative overflow-hidden rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="relative p-8 flex items-center justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
              <h2 className="text-3xl font-semibold z-10 relative">PC GAMES</h2>
              <img
                src={pc}
                alt="PC type games"
                className="w-1/3 h-auto z-10 relative"
              />
            </div>
          </Link>

          <Link
            to="#"
            className="group relative overflow-hidden rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="relative p-8 flex items-center justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
              <h2 className="text-3xl font-semibold z-10 relative">
                CONSOLE GAMES
              </h2>
              <img
                src={console}
                alt="Console games"
                className="w-1/3 h-auto z-10 relative"
              />
            </div>
          </Link>

          <Link
            to="#"
            className="group relative overflow-hidden rounded-3xl shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="relative p-8 flex items-center justify-between">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl"></div>
              <h2 className="text-3xl font-semibold z-10 relative">
                GAME COVERS
              </h2>
              <img
                src={gamesCover}
                alt="Games cover"
                className="w-1/3 h-auto z-10 relative"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;