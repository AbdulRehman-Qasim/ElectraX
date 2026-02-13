import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import logo1 from "../../assets/logo1.png"; // adjust path as needed

export default function DashboardHome() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      console.log("User asked:", input);
      setInput(""); // clear after sending
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-2 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Dashboard</h1>
        <h1 className="text-lg font-bold text-blue-700">Electra X</h1>
      </div>

      {/* Body */}
      <div className="flex flex-col items-center justify-start flex-1 px-4 py-6">
        {/* Ask Question Box */}
        <div className="w-full max-w-md flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Write anything..."
            className="flex-1 text-sm bg-transparent border-none outline-none focus:ring-0"
          />
          <FaPaperPlane
            className="text-blue-600 text-lg cursor-pointer ml-2"
            onClick={handleSend}
          />
        </div>

        {/* Logo */}
        <img src={logo1} alt="Logo" className="w-45 h-45 mb-6" />

        {/* Text */}
        <h2 className="text-xl font-bold text-gray-800 text-center">
          May I help you ?
        </h2>
      </div>
    </div>
  );
}
