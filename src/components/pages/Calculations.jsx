import React from "react";
import { FaCalculator, FaBolt, FaGripLines, FaShieldAlt } from "react-icons/fa";

export default function Calculations() {
  const tools = [
    { name: "Voltage Drop Calculator", icon: <FaBolt />, desc: "Calculate voltage drop across cables." },
    { name: "Cable Sizing", icon: <FaGripLines />, desc: "Determine appropriate cable sizes based on load." },
    { name: "Max Zs Calculator", icon: <FaShieldAlt />, desc: "Find maximum permitted earth fault loop impedance." },
    { name: "Diversity Calculator", icon: <FaCalculator />, desc: "Apply diversity factors to estimate max demand." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">UK Calculations</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Electrical Engineering Tools</h2>
          <p className="text-gray-600 mt-2">Precision calculation utilities compliant with BS 7671.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col items-center text-center cursor-pointer hover:-translate-y-1">
              <div className="bg-yellow-500 p-4 rounded-full text-black mb-4 shadow-md">
                <span className="text-2xl">{tool.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
