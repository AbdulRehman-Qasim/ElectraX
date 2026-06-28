import React from "react";
import { FaUserShield, FaExternalLinkAlt } from "react-icons/fa";

export default function CompetentPerson() {
  const schemes = [
    { name: "NICEIC", desc: "National Inspection Council for Electrical Installation Contracting", url: "#" },
    { name: "NAPIT", desc: "National Association of Professional Inspectors and Testers", url: "#" },
    { name: "ECA", desc: "Electrical Contractors' Association", url: "#" },
    { name: "Stroma", desc: "Stroma Certification Ltd", url: "#" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Competent Person Schemes</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-xl shadow-lg p-8 mb-8 text-black flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Scheme Membership</h2>
            <p className="text-yellow-900 max-w-lg">
              Being registered with a Competent Person Scheme allows you to self-certify your electrical work complies with Building Regulations.
            </p>
          </div>
          <FaUserShield className="text-6xl text-yellow-200 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemes.map((scheme, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{scheme.name}</h3>
              <p className="text-gray-600 mb-4 h-12">{scheme.desc}</p>
              <a href={scheme.url} className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors">
                Visit Website <FaExternalLinkAlt className="ml-2 text-sm" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
