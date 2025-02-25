import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import profile from "../../assets/profile-circle.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold text-green-400 tracking-wider transition-transform duration-300 hover:scale-110">
              <Link to="/">GHOST</Link>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "About", "Wishlist", "Categories"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative text-lg font-semibold text-white hover:text-green-400 transition-all duration-300"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Profile Image (Clickable) */}
            <Link to="/profile" className="ml-4">
              <img
                src={profile}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-green-400 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes className="h-7 w-7 text-green-400" /> : <FaBars className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links with Animation */}
        <div
          className={`md:hidden bg-gray-900 rounded-md overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"
          }`}
        >
          {["Home", "About", "Wishlist", "Categories", "Profile"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block px-6 py-3 text-white text-center hover:bg-gray-700 rounded-md transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
