import React from "react";
import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Page Not Found</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <FaGhost className="text-7xl text-gray-300 mb-6 animate-bounce" />
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">404</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Oops! The page you are looking for seems to have disconnected. Let's get you back on the grid.
        </p>
        <Link 
          to="/dashboard" 
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
