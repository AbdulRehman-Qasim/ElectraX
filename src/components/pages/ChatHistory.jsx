import { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";

export default function ChatHistory() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All" },
    { name: "Last 7 days" },
    { name: "Last Month" },
    { name: "Starred", icon: <FaStar className="inline ml-1 text-yellow-500" /> },
  ];

  const todayChats = [
    { id: 1, title: "Meeting Notes", text: "Discussed project deadlines...", time: "9:45 AM" },
    { id: 2, title: "Client Feedback", text: "They requested UI changes...", time: "2:10 PM" },
  ];

  const yesterdayChats = [
    { id: 3, title: "Daily Standup", text: "Today’s focus is bug fixing...", time: "10:00 AM" },
    { id: 4, title: "Backend API", text: "Auth service refactoring...", time: "12:45 PM" },
    { id: 5, title: "Frontend Updates", text: "Added new dashboard cards...", time: "3:20 PM" },
    { id: 6, title: "Bug Report", text: "Critical issue found in login...", time: "5:40 PM" },
    { id: 7, title: "Deployment", text: "Production deployment done...", time: "8:15 PM" },
    { id: 8, title: "Design Review", text: "Reviewed new wireframes...", time: "9:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
<div className="w-full flex justify-between items-center px-2 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
  <h1 className="text-lg font-bold text-black">Chat History</h1>
  <h1 className="text-lg font-bold text-blue-700">Electra X</h1>
</div>


      {/* Search bar */}
<div className="px-4 mt-4">
  <div className="flex items-center w-full bg-white rounded-full px-3 py-2 shadow-sm">
    <FaSearch className="text-gray-500 mr-2" />
    <input
      type="text"
      placeholder="Search chats..."
      className="w-full bg-transparent outline-none focus:ring-0 focus:outline-none border-none"
    />
  </div>
</div>


      {/* Filter buttons */}
      <div className="flex justify-between px-4 mt-4 gap-2">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`flex-1 py-2 px-3 rounded-full border transition ${
              activeFilter === filter.name
                ? "bg-blue-400 text-white border-blue-500"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {filter.name} {filter.icon}
          </button>
        ))}
      </div>

      {/* Chat Sections */}
      <div className="px-4 mt-6">
        {/* Today */}
        <h2 className="font-semibold text-gray-700 mb-2">Today</h2>
        <div className="space-y-3">
          {todayChats.map((chat) => (
            <div
              key={chat.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
            >
              <div>
                <h3 className="font-semibold">{chat.title}</h3>
                <p className="text-sm text-gray-500">{chat.text}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{chat.time}</p>
                <span className="text-xl text-gray-400">{">"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Yesterday */}
        <h2 className="font-semibold text-gray-700 mt-6 mb-2">Yesterday</h2>
        <div className="space-y-3">
          {yesterdayChats.map((chat) => (
            <div
              key={chat.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm  hover:shadow-md cursor-pointer"
            >
              <div>
                <h3 className="font-semibold">{chat.title}</h3>
                <p className="text-sm text-gray-500">{chat.text}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">{chat.time}</p>
                <span className="text-xl text-gray-400">{">"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-6 mb-10">
          <button className="px-6 py-2 rounded-full border border-blue-500 bg-white text-blue-600 font-medium hover:bg-blue-50">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
