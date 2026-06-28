import React from "react";
import { FaSearch, FaBookOpen } from "react-icons/fa";

export default function BS7671QuickRef() {
  const sections = [
    { title: "Part 4: Protection for Safety", desc: "Covers electric shock, thermal effects, and voltage disturbances." },
    { title: "Part 5: Selection and Erection", desc: "Guidelines on wiring systems, switchgear, and earthing." },
    { title: "Part 6: Inspection and Testing", desc: "Initial verification, periodic inspection, and certification." },
    { title: "Part 7: Special Installations", desc: "Bathrooms, swimming pools, solar PV systems, and more." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Title Bar */}
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">BS 7671 Quick Reference</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Regulations</h2>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-yellow-500 focus-within:border-transparent transition-all">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="e.g. 411.3.2.2 or 'Bathroom zones'"
              className="w-full bg-transparent border-none outline-none text-sm text-gray-700"
            />
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-4">Common Sections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((sec, idx) => (
            <div key={idx} className="flex items-start p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="bg-yellow-100 p-3 rounded-lg text-yellow-600 mr-4">
                <FaBookOpen className="text-xl" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{sec.title}</h4>
                <p className="text-sm text-gray-600">{sec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
