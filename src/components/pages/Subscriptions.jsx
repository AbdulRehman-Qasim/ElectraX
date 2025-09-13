import React, { useState } from "react";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function Subscriptions() {
  const [billing, setBilling] = useState("monthly");

  const prices = {
    free: 0,
    professional: 12.99,
    business: 29.99,
  };

  const getPrice = (plan) => {
    if (billing === "monthly") {
      return `£${prices[plan]}/month`;
    } else {
      return `£${(prices[plan] * 12).toFixed(2)}/year`;
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-white">

{/* Navbar */}
<div className="w-full flex justify-between items-center px-2 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
  <h1 className="text-lg font-bold text-black">Subscriptions</h1>
  <span className="bg-yellow-500 text-white px-5 py-1 rounded-full text-xs font-semibold">
    Free Plan
  </span>
  <h1 className="text-lg font-bold text-blue-700">Electra X</h1>
</div>




      {/* Body */}
      <div className="flex-grow px-6 sm:px-10 lg:px-16 py-8 overflow-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Choose Your Plan
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Start Free – Upgrade Anytime. Cancel Anytime.
          </p>

          {/* ✅ Toggle Switch */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-md font-semibold text-sm ${billing === "monthly"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-2 rounded-md font-semibold text-sm ${billing === "yearly"
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-700"
                }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-yellow-500 transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">FREE</h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              {getPrice("free")}
            </p>
            <div className="text-left mb-4">
              <p className="font-semibold mb-2">What's Included:</p>
              <ul className="space-y-2">
                {[
                  "10 questions per day",
                  "Basic BS 7671 lookup",
                  "Simple troubleshooting",
                  "Email support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600 mb-25">
              Perfect for:{" "}
              <span className="font-medium">Students & apprentices</span>
            </p>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-400 transition text-sm">
              Active
            </button>
          </div>

          {/* Professional Plan */}
          <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-yellow-500 transition">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              PROFESSIONAL
            </h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              {getPrice("professional")}
            </p>
            <div className="text-left mb-4">
              <p className="font-semibold mb-2">What's Included:</p>
              <ul className="space-y-2">
                {[
                  "Unlimited questions",
                  "Complete BS 7671 database",
                  "Part P compliance checks",
                  "Cable calculations",
                  "Advanced troubleshooting",
                  "Report generation",
                  "Priority support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Perfect for:{" "}
              <span className="font-medium">Working electricians</span>
            </p>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-400 transition text-sm">
              Choose Professional
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-yellow-500 transition">
            <h3 className="text-lg font-bold text-gray-900 mb-2">BUSINESS</h3>
            <p className="text-2xl font-extrabold text-gray-800 mb-4">
              {getPrice("business")}
            </p>
            <div className="text-left mb-4">
              <p className="font-semibold mb-2">What's Included:</p>
              <ul className="space-y-2">
                {[
                  "Everything in Professional",
                  "Team accounts (up to 5 users)",
                  "Custom reports with branding",
                  "API access",
                  "Phone support",
                  "Team management",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-gray-600 mb-11">
              Perfect for:{" "}
              <span className="font-medium">Electrical companies</span>
            </p>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-400 transition text-sm">
              Choose Business
            </button>
          </div>
        </div>

        {/* ✅ Footer Section (2 columns) */}
        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <p className="text-gray-700 text-lg font-bold mb-3">
              All Plans Include:
            </p>
            <ul className="space-y-2">
              {[
                "UK electrical codes (BS 7671, Part P)",
                "Mobile app access",
                "Regular updates",
                "Cancel anytime",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-left">
            <p className="font-bold text-black mb-4">
              Start Free – Upgrade Anytime
            </p>

            <div className="inline-flex items-center justify-center bg-blue-100 text-blue-700 font-medium px-5 py-2 rounded-full mb-4">
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              30-day money-back guarantee
            </div>

            <p className="text-gray-700 font-semibold mb-2">
              Accept Payment Methods
            </p>

            <div className="bg-gray-100 p-4 rounded-lg flex flex-col md:flex-row gap-4">
              <div className="border rounded-lg px-6 py-3 shadow-sm bg-white flex-1 text-center">
                Credit Card <br />
                <span className="text-gray-600 text-sm">Visa, Mastercard</span>
              </div>
              <div className="border rounded-lg px-6 py-3 shadow-sm bg-white flex-1 text-center">
                PayPal <br />
                <span className="text-gray-600 text-sm">Secure & Fast</span>
              </div>
              <div className="border rounded-lg px-6 py-3 shadow-sm bg-white flex-1 text-center">
                Direct Debit <br />
                <span className="text-gray-600 text-sm">
                  UK Bank Transfer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
