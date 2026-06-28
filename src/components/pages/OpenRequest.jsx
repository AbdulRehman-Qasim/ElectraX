import React from "react";
import { FaInbox, FaPlus, FaCircle } from "react-icons/fa";

export default function OpenRequest() {
  const requests = [
    { id: "REQ-001", title: "Clarification on Zone 1 wiring", status: "Open", date: "2026-06-25" },
    { id: "REQ-002", title: "Feature request: R1+R2 Calculator", status: "In Progress", date: "2026-06-26" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="w-full flex justify-between items-center px-4 py-4 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Open Requests</h1>
        <h1 className="text-lg font-bold text-yellow-500">Electra X</h1>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">My Tickets</h2>
            <p className="text-gray-500">Manage your active support requests.</p>
          </div>
          <button className="flex items-center bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-sm font-semibold transition-colors">
            <FaPlus className="mr-2" /> New Request
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">Request ID</th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">Title</th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">Date</th>
                <th className="py-4 px-6 text-sm font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((req, idx) => (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{req.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{req.title}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">{req.date}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        req.status === "Open" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        <FaCircle className="mr-1.5 text-[8px]" /> {req.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-12 text-center text-gray-500">
                    <FaInbox className="text-4xl text-gray-300 mx-auto mb-3" />
                    No open requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
