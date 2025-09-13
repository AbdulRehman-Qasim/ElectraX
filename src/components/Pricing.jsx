import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  // Monthly base prices
  const prices = {
    free: 0,
    student: 6.99,
    master: 299,
  };

  // Calculate displayed price
  const getPrice = (plan) => {
    if (billing === "monthly") {
      return `€${prices[plan]} / month`;
    } else {
      return `€${(prices[plan] * 12).toFixed(2)} / year`;
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Pricing Section */}
      <section
        className="
          flex-grow bg-gray-50 px-6 sm:px-10 lg:px-16 py-8
          overflow-auto md:overflow-hidden
        "
      >
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Choose Your Plan
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Flexible pricing for every electrician — from learners to professionals
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center items-center mb-8">
          <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-semibold transition ${
                billing === "monthly" ? "bg-yellow-500 text-black" : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 text-sm font-semibold transition ${
                billing === "yearly" ? "bg-yellow-500 text-black" : "text-gray-600"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-yellow-500 transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Free Plan</h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              {getPrice("free")}
            </p>
            <ul className="text-left space-y-2 mb-4">
              {[
                "AI-powered electrical code lookup",
                "Basic project management tools",
                "Community forum access",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full border border-gray-300 text-gray-900 py-2 rounded-md font-semibold hover:bg-gray-100 transition text-sm">
              Start Free
            </button>
          </div>

          {/* Student Electrician (Most Popular) */}
          <div className="relative bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-yellow-500 transition">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Student Electrician
            </h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              {getPrice("student")}
            </p>
            <ul className="text-left space-y-2 mb-4">
              {[
                "All Free Plan features",
                "Advanced circuit design tools",
                "Priority customer support",
                "Access to premium training modules",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-400 transition text-sm">
              Get Student Plan
            </button>
          </div>

          {/* Master Electrician */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-transparent hover:border-yellow-500 transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Master Electrician</h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              {getPrice("master")}
            </p>
            <ul className="text-left space-y-2 mb-4">
              {[
                "All Student Electrician features",
                "Unlimited project storage",
                "Dedicated account manager",
                "Early access to new features",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition text-sm">
              Get Master Plan
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="text-base text-gray-700 font-medium">
            All plans include expert AI support designed for UK electricians.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
