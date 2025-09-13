import React from "react";
import heroImage from "../assets/MockupLandingPage.png";
import Footer from "./Footer";
import Navbar from "./Navbar"; // ✅ Import the Navbar component

export default function LandingPage() {
  return (
    <div className="font-sans h-screen flex flex-col overflow-hidden">
      {/* ✅ Reuse Navbar */}
      <Navbar />

      {/* Hero Section (fills space between navbar + footer) */}
      <section className="flex-grow flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 md:py-16 bg-gray-50 overflow-hidden">
        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-3">
            Your AI Electrical Assistant for UK Standards
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Trusted by UK electricians, inspectors, and students. <br />
            Get instant, accurate answers to all your electrical questions.
          </p>

          {/* Input + CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-3 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="px-2 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-2 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <a
              href="/signup"
              className="no-underline bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold text-sm hover:bg-yellow-400 transition w-full sm:w-auto text-center"
            >
              Get Started for Free
            </a>
          </div>

          {/* Trial text */}
          <p className="text-sm text-gray-700">
            Start your free trial. No credit card required
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 md:mt-0">
          <img
            src={heroImage}
            alt="ElectraX Preview"
            className="max-w-full md:max-w-[490px] h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
