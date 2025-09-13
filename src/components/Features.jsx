import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import your feature images (replace with your actual asset paths)
import feature1 from "../assets/investigation.png";
import feature2 from "../assets/task.png";
import feature3 from "../assets/screwdriver.png";

export default function Features() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Features Section */}
      <section
        id="features"
        className="flex-grow bg-white px-6 sm:px-10 lg:px-16 py-12 overflow-y-auto md:overflow-hidden"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Key Features
          </h2>
          <p className="text-lg text-gray-600">
            Smart tool designed for UK electricians
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={feature1}
              alt="Feature 1"
              className="w-26 h-26 md:w-32 md:h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
            />
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-yellow-500 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500 mb-2">
                BS 7671 Code Experts
              </h3>
              <p className="text-gray-600 text-sm">
                Get instant wiring regulations summaries and compliance guidance.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={feature2}
              alt="Feature 2"
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
            />
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-yellow-500 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500 mb-2">
                Inspection Assistant
              </h3>
              <p className="text-gray-600 text-sm">
                Upload images to verify compliance and inspections in seconds.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src={feature3}
              alt="Feature 3"
              className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-blue-600 shadow-md"
            />
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-yellow-500 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-500 mb-2">
                Troubleshooting Help
              </h3>
              <p className="text-gray-600 text-sm">
                Describe issues or upload images to receive AI-powered solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16 px-4">
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            ElectraX simplifies compliance, inspections, and troubleshooting —
            anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
