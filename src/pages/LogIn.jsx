import React, { useState, useEffect } from "react";
import img from "../assets/green.jpg";

const Login = () => {
  const fullWord = "Hello, Gamer!"; 
  const [displayWord, setDisplayWord] = useState(""); 
  const [darkMode, setDarkMode] = useState(false);
  const [details, setDetails] = useState(false);

  const darkBtn = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullWord.length) {
        setDisplayWord((prev) => prev + fullWord[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);
  

  return (
    <div className={`relative max-w-screen max-h-screen ${darkMode ? "bg-gray-900" : "bg-black"}`}>
      {/* Background Image */}
      <img 
        src={img} 
        className="absolute overflow-hidden top-0 left-0 h-screen w-screen z-0 object-cover" 
        alt="background" 
      />

      {/* Right Side Panel */}
      <div
        className={
          darkMode 
            ? "absolute top-0 right-0 h-screen w-2/5 text-black bg-white rounded-lg z-50"
            : "absolute top-0 right-0 h-screen w-2/5 text-white bg-black bg-opacity-60 rounded-lg z-50"
        }
      >
        {/* Initial Panel */}
        {!details && (
          <div className="flex flex-col justify-center items-center h-full">
            <h6 className="text-3xl font-serif mb-6">HEY GAMER</h6>
            {/* Toggle Dark Mode Button */}
            <button 
              onClick={darkBtn} 
              className="mb-8 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Toggle Dark Mode
            </button>
            {/* Login and Signin Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={() => setDetails(true)} 
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Login
              </button>
              <button 
                onClick={() => setDetails(true)} 
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
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
              className="w-full p-3 mb-6 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 mb-6 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button 
              onClick={() => {}} 
              className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {/* Typing Effect Text */}
      <div className="absolute bottom-10 left-10">
        {/* <div 
          className="text-green-500" 
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          {displayWord}
        </div> */}
      </div>
    </div>
  );
};

export default Login;
