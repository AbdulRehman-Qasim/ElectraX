import { useState, useEffect } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import {
  FaBars,
  FaComments,
  FaHistory,
  FaFileAlt,
  FaBook,
  FaBuilding,
  FaCalculator,
  FaUserEdit,
  FaSignOutAlt,
  FaLock,
  FaUserShield,
  FaInbox,
  FaBolt,
} from "react-icons/fa";
import logo from "../assets/logo.png";

import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import UpdatePassword from "./pages/UpdatePassword";
import Subscriptions from "./pages/Subscriptions";
import ChatHistory from "./pages/ChatHistory";
import NewChat from "./pages/NewChat";
import PartPCompliance from "./pages/PartPCompliance";
import BS7671QuickRef from "./pages/BS7671QuickRef";
import BuildingRegs from "./pages/BuildingRegs";
import Calculations from "./pages/Calculations";
import CompetentPerson from "./pages/CompetentPerson";
import OpenRequest from "./pages/OpenRequest";
import NotFound from "./pages/NotFound";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const menuSections = [
    {
      title: "AI Assistant",
      items: [
        { id: "dashboard", label: "New Chat", icon: <FaComments />, path: "/dashboard" },
        { id: "history", label: "Chat History", icon: <FaHistory />, path: "/dashboard/history" },
      ]
    },
    {
      title: "Tools & References",
      items: [
        { id: "bs", label: "BS 7671 Quick Ref", icon: <FaBook />, path: "/dashboard/bs" },
        { id: "building", label: "Building Regs", icon: <FaBuilding />, path: "/dashboard/building" },
        { id: "calc", label: "Calculations", icon: <FaCalculator />, path: "/dashboard/calc" },
        { id: "partp", label: "Part P Checker", icon: <FaFileAlt />, path: "/dashboard/partp" },
        { id: "cps", label: "Competent Person", icon: <FaUserShield />, path: "/dashboard/cps" },
      ]
    },
    {
      title: "Account & Support",
      items: [
        { id: "profile", label: "Edit Profile", icon: <FaUserEdit />, path: "/dashboard/profile" },
        { id: "updatepass", label: "Security", icon: <FaLock />, path: "/dashboard/updatepass" },
        { id: "plans", label: "Subscription", icon: <FaBolt />, path: "/dashboard/plans" },
        { id: "openreq", label: "Support Tickets", icon: <FaInbox />, path: "/dashboard/openreq" },
      ]
    }
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0B0F19] relative overflow-hidden text-gray-300">
      {/* Subtle Sidebar Glow */}
      <div className="absolute top-0 left-0 w-full h-64 bg-yellow-500/5 blur-[100px] pointer-events-none"></div>

      {/* Brand Header */}
      <div className="flex items-center justify-center h-24 border-b border-white/5 relative z-10 px-6">
        <Link to="/dashboard" className="flex items-center gap-4 no-underline group">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-yellow-400 to-yellow-600 p-2.5 rounded-xl text-black shadow-lg">
              <FaBolt className="text-xl" />
            </div>
          </div>
          <span className="text-2xl font-black text-white tracking-wide">Electra <span className="text-yellow-500">X</span></span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-8 px-5 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="space-y-10">
          {menuSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="px-3 text-[11px] font-black text-gray-500 uppercase tracking-widest mb-4">
                {section.title}
              </h3>
              <nav className="space-y-1.5">
                {section.items.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`relative flex items-center gap-3.5 px-4 py-3 rounded-xl no-underline transition-all duration-300 group overflow-hidden
                        ${active
                          ? "bg-white/10 text-white font-bold shadow-lg"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {/* Active Indicator Glow */}
                      {active && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                      )}
                      
                      <span className={`text-lg transition-transform duration-300 ${active ? "text-yellow-500 scale-110" : "group-hover:text-yellow-500 group-hover:scale-110"}`}>
                        {item.icon}
                      </span>
                      <span className="truncate tracking-wide text-sm">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Logout */}
      <div className="p-5 border-t border-white/5 relative z-10">
        <button
          onClick={() => alert("Logging out...")}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 border border-transparent hover:border-red-500/20 transition-all duration-300 font-semibold text-sm"
        >
          <FaSignOutAlt className="text-lg" />
          <span className="tracking-wide">Log out</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-sans">
      {/* Sidebar for desktop */}
      <aside className="hidden lg:flex w-[280px] flex-col transition-all duration-500 shadow-[4px_0_24px_rgba(0,0,0,0.05)] z-30">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar for mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[280px] transform transition-transform duration-400 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden shadow-2xl ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm z-30 absolute top-0 w-full">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            >
              <FaBars className="text-xl" />
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-yellow-500 p-1.5 rounded text-black">
                <FaBolt className="text-sm" />
              </div>
              <span className="font-bold text-gray-900 tracking-tight">Electra <span className="text-yellow-500">X</span></span>
            </div>
          </div>
        </header>

        {/* Routed Pages Area */}
        <main className="flex-1 overflow-y-auto relative bg-slate-50 lg:pt-0 pt-[60px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="updatepass" element={<UpdatePassword />} />
            <Route path="plans" element={<Subscriptions />} />
            <Route path="history" element={<ChatHistory />} />
            <Route path="newchat" element={<NewChat />} />
            <Route path="partp" element={<PartPCompliance />} />
            <Route path="bs" element={<BS7671QuickRef />} />
            <Route path="building" element={<BuildingRegs />} />
            <Route path="calc" element={<Calculations />} />
            <Route path="cps" element={<CompetentPerson />} />
            <Route path="openreq" element={<OpenRequest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>

    </div>
  );
}
