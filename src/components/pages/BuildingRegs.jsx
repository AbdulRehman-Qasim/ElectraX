import React from "react";
import { FaBuilding, FaDownload } from "react-icons/fa";

export default function BuildingRegs() {
  const documents = [
    { name: "Approved Document P", title: "Electrical Safety - Dwellings", current: true },
    { name: "Approved Document B", title: "Fire Safety", current: true },
    { name: "Approved Document L", title: "Conservation of Fuel and Power", current: true },
    { name: "Approved Document M", title: "Access to and Use of Buildings", current: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Building Regulations</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Approved Documents</h2>
            <p className="text-gray-600 mt-1">Access the latest UK building regulations relevant to electrical installations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {documents.map((doc, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:border-yellow-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full text-gray-700 mr-4">
                  <FaBuilding className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{doc.name}</h3>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">Active Version</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6 font-medium">{doc.title}</p>
              <button className="w-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm transition-all">
                <FaDownload className="mr-2" /> Download PDF
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
