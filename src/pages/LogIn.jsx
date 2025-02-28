import React, { useState, useEffect } from "react";
import img from "../assets/green.jpg";

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [details, setDetails] = useState(false);

  const darkBtn = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`relative max-w-screen max-h-screen ${darkMode ? "bg-gray-900" : "bg-black"}`}>
      {/* Background Image */}
      <img 
        src={img} 
        className="absolute overflow-hidden top-0 left-0 h-screen w-screen z-0 object-cover" 
        alt="background" 
      />

      {/* Right Side Panel */}
      <div className={`absolute top-0 right-0 h-screen w-2/5 rounded-lg z-50 ${darkMode ? "text-black bg-white" : "text-white bg-black bg-opacity-60"}`}>
        {/* Initial Panel */}
        {!details && (
          <div className="flex flex-col justify-center items-center h-full">
            <h6 className="text-3xl font-serif mb-6">HEY GAMER</h6>
            <button 
              onClick={darkBtn} 
              className="mb-8 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Toggle Dark Mode
            </button>
            <div className="flex gap-4">
              <button 
                onClick={() => setDetails(true)} 
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Login
              </button>
              <button 
                onClick={() => setDetails(true)} 
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
              >
                Sign In
              </button>
            </div>
          </div>
        )}

        {/* Login/Signup Form */}
        {details && (
          <div className="flex flex-col justify-center items-center h-full p-8">
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 mb-6 border text-black border-gray-300 rounded-lg"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mb-6 border text-black border-gray-300 rounded-lg"
            />
            <button className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
