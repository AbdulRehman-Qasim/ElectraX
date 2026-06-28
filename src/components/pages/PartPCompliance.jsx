import React from "react";
import { FaFileSignature, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export default function PartPCompliance() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Part P Compliance</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="flex items-center space-x-4 mb-8">
          <FaFileSignature className="text-3xl text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Compliance Checker</h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-800">Is your work notifiable?</h3>
            <p className="text-sm text-gray-500">Answer the following questions to check if you need to notify building control.</p>
          </div>
          <div className="p-6 space-y-4">
            <label className="flex items-start space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="mt-1 h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
              <div>
                <span className="block font-medium text-gray-900">Installation of a new consumer unit</span>
                <span className="block text-sm text-gray-500">Replacing or installing a completely new fuse box.</span>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="mt-1 h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
              <div>
                <span className="block font-medium text-gray-900">Installation of a new circuit</span>
                <span className="block text-sm text-gray-500">Whether at low voltage or extra-low voltage.</span>
              </div>
            </label>
            
            <label className="flex items-start space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <input type="checkbox" className="mt-1 h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500" />
              <div>
                <span className="block font-medium text-gray-900">Work in a special location</span>
                <span className="block text-sm text-gray-500">Any addition or alteration to existing circuits in a bathroom, swimming pool, or sauna.</span>
              </div>
            </label>
          </div>
          
          <div className="bg-yellow-50 p-6 border-t border-yellow-100 flex items-start">
            <FaExclamationTriangle className="text-yellow-600 text-xl mr-3 mt-1" />
            <div>
              <h4 className="font-bold text-yellow-800">Notification Required</h4>
              <p className="text-sm text-yellow-700 mt-1">If any of the above apply, the work is notifiable in England and Wales under Part P of the Building Regulations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
