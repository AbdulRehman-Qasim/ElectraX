import { useState } from "react";
import {
  FaMicrophone,
  FaPaperPlane,
  FaShieldAlt,
  FaThLarge,
  FaBuilding,
  FaHome,
  FaPlug,
  FaLink,
  FaPaperclip,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
import Logo from "../../assets/logo.png"; // ✅ adjust path if needed

export default function ChatPage() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    console.log("User sent:", input);
    setInput("");
  };

  const questions = [
    "What's the difference between AFCI breaker and a GFCI breaker?",
    "What size of wire do I need for a 50 AMP circuit?",
    "Can I use Romex wire in a commercial job?",
  ];

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Navbar */}
  <div className="w-full flex justify-between items-center px-2 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
    <span className="bg-yellow-500 text-white px-5 py-1 rounded-full text-xs font-semibold">
      Free Plan
    </span>
    <h1 className="text-lg font-bold text-blue-700">Electra X</h1>
  </div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full flex-1 overflow-hidden px-4 py-4">
        {/* Upgrade Plan */}
        <button
          onClick={() => alert("Upgrade Plan clicked!")}
          className="mb-2 px-4 py-1.5 border-2 border-red-500 bg-yellow-100 text-red-600 rounded-full font-medium hover:bg-yellow-200 transition"
        >
          🔺 Upgrade Plan
        </button>

        {/* ✅ Logo */}
        <img src={Logo} alt="ElectraX Logo" className="h-12 w-auto mb-4" />

        {/* Logo & Welcome */}
        <h1 className="text-lg md:text-xl font-bold text-black text-center">
          Hey Muhammad Sarmad, Welcome to{" "}
          <span className="text-blue-700">ElectraX</span>
        </h1>
        <p className="text-gray-600 text-center mt-2 max-w-2xl text-sm md:text-base">
          I'm <span className="font-semibold">ElectraX</span> — your tireless,
          expert AI electrician with BS 7671 wiring regulations mastery and
          practical installations wisdom. Let’s power up your electrical
          knowledge! ⚡
        </p>

        {/* Cards Row */}
        <div className="mt-6 w-full max-w-2xl">
          <div className="grid grid-cols-3 gap-3 md:flex md:flex-row md:justify-between">
            <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md cursor-pointer">
              <FaShieldAlt className="text-blue-500 text-xl mb-1" />
              <span className="text-xs font-medium">Part P Check</span>
            </div>

            <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md cursor-pointer">
              <FaThLarge className="text-green-500 text-xl mb-1" />
              <span className="text-xs font-medium">Ring Circuit</span>
            </div>

            <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md cursor-pointer">
              <FaBuilding className="text-purple-500 text-xl mb-1" />
              <span className="text-xs font-medium">Consumer Unit</span>
            </div>

            <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md cursor-pointer col-span-1">
              <FaHome className="text-orange-500 text-xl mb-1" />
              <span className="text-xs font-medium">Bathroom Zone</span>
            </div>

            <div className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow hover:shadow-md cursor-pointer col-span-1">
              <FaPlug className="text-red-500 text-xl mb-1" />
              <span className="text-xs font-medium">Cable Sizing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section Fixed at Bottom */}
      <div className="w-full sticky bottom-0 bg-white pt-2">
        <div className="flex flex-col bg-gray-100 rounded-xl shadow-sm px-4 py-2 border mx-4 mb-4">
          {/* First line: Input + send */}
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-2" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Write anything..."
              className="flex-1 text-sm bg-transparent border-none outline-none focus:ring-0"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              <FaPaperPlane />
            </button>
          </div>

          {/* Second line: icons inside input box */}
          <div className="flex items-center justify-between mt-2 px-1">
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-blue-500">
                <FaPaperclip size={18} />
              </button>
              <button className="text-gray-600 hover:text-blue-500">
                <FaLink size={18} />
              </button>
            </div>
            <button className="text-gray-600 hover:text-blue-500">
              <FaMicrophone size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Predefined Questions */}
      <div className="w-full bg-white py-3 hidden md:flex justify-center space-x-3">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => setInput(q)}
            className="flex items-center bg-gray-50 px-3 py-2 rounded-md shadow hover:shadow-md border text-xs font-medium text-gray-700 transition"
          >
            <FaQuestionCircle className="text-blue-500 mr-2" />
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
