import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-3 bg-white border-b border-gray-200">
        {/* Lightning Icon + Text */}
        <div className="flex items-center space-x-2">
          <BoltIcon className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-extrabold text-black">ElectraX</span>
        </div>

        {/* Nav Links (desktop only) */}
        <ul className="hidden md:flex gap-8 font-semibold text-black">
          <li>
            <Link to="/features" className="no-underline text-black hover:text-gray-700">
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="no-underline text-black hover:text-gray-700">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/support" className="no-underline text-black hover:text-gray-700">
              Support
            </Link>
          </li>
        </ul>

        {/* CTA Button (desktop only) */}
        <Link
          to="/signup"
          className="hidden md:inline-block no-underline bg-blue-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-600 transition ml-4"
        >
          Get Started Free
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Slide-in Sidebar */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
            {/* Branding */}
            <div className="flex items-center space-x-2 mb-6">
              <BoltIcon className="h-7 w-7 text-yellow-500" />
              <span className="text-xl font-extrabold text-black">ElectraX</span>
            </div>

            {/* Close button */}
            <button
              className="text-2xl font-bold mb-6 self-end"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* Menu Links */}
            <Link
              to="/features"
              className="no-underline text-black font-semibold py-2 hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="no-underline text-black font-semibold py-2 hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/support"
              className="no-underline text-black font-semibold py-2 hover:text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
