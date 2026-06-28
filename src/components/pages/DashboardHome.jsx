import { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaBolt, FaLightbulb, FaBook, FaStar } from "react-icons/fa";

export default function DashboardHome() {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      console.log("User asked:", input);
      setInput(""); 
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  const suggestions = [
    { title: "Part P Checks", text: "Requirements for bathrooms", icon: <FaBolt /> },
    { title: "Cable Sizing", text: "Calculate for 32A ring final", icon: <FaLightbulb /> },
    { title: "BS 7671", text: "Latest amendment highlights", icon: <FaBook /> },
  ];

  return (
    <div className="flex flex-col h-full relative overflow-hidden bg-slate-50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-yellow-300/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/10 blur-[100px] pointer-events-none" />

      {/* Top Bar */}
      <div className="hidden lg:flex w-full justify-between items-center px-8 py-4 border-b border-white/50 bg-white/40 backdrop-blur-xl absolute top-0 z-20">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          New Chat
        </h1>
        <div className="flex items-center gap-2 bg-yellow-100/80 border border-yellow-200 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          AI ACTIVE
        </div>
      </div>

      {/* Chat Area / Greeting */}
      <div className="flex-1 overflow-y-auto px-4 pb-56 relative z-10 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="max-w-4xl mx-auto w-full my-auto flex flex-col items-center pt-8 lg:pt-16 animate-fade-in-up">
          
          <div className="relative mb-6 lg:mb-8 group">
            <div className="absolute inset-0 bg-yellow-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-500 p-5 rounded-3xl shadow-xl shadow-yellow-500/30 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <FaStar className="text-4xl text-white drop-shadow-md" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 tracking-tight">
            Hello! I'm Electra <span className="text-yellow-500">X</span>
          </h2>
          <p className="text-gray-500 text-center text-lg md:text-xl mb-14 max-w-2xl font-light">
            Your intelligent assistant for UK electrical standards, building regulations, and complex calculations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-3xl">
            {suggestions.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setInput(item.text)}
                className="bg-white/60 backdrop-blur-md border border-white hover:border-yellow-300 p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-yellow-500/10 group"
              >
                <div className="mb-4 bg-yellow-50 w-12 h-12 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-yellow-500 transition-colors duration-300">
                  <span className="text-xl text-yellow-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area Fixed to Bottom */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent pt-16 pb-6 lg:pb-8 px-4 z-20 pointer-events-none">
        <div className="max-w-3xl mx-auto relative pointer-events-auto">
          <div className={`relative bg-white/90 backdrop-blur-xl border shadow-2xl rounded-3xl p-2 flex items-end transition-all duration-300 ${
            isFocused ? "border-yellow-400 shadow-yellow-500/20" : "border-gray-200 shadow-gray-200/50"
          }`}>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Message Electra X..."
              className="flex-1 max-h-40 min-h-[52px] bg-transparent border-none outline-none resize-none px-5 py-3.5 text-gray-800 placeholder-gray-400 font-medium text-base custom-scrollbar"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`p-4 rounded-2xl ml-2 flex-shrink-0 transition-all duration-300 ${
                input.trim() 
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg shadow-yellow-500/40 hover:scale-105" 
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FaPaperPlane className="text-lg relative left-[1px]" />
            </button>
          </div>
          <p className="text-center text-xs font-medium text-gray-400 mt-4 tracking-wide">
            Electra X is an AI and can make mistakes. Verify critical data against BS 7671.
          </p>
        </div>
      </div>

    </div>
  );
}
