import { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import {
  FaBars,
  FaComments,
  FaHistory,
  FaClipboardList,
  FaFileAlt,
  FaBook,
  FaBuilding,
  FaCalculator,
  FaUserEdit,
  FaSignOutAlt,
  FaLock,
  FaUserShield,
  FaInbox,
} from "react-icons/fa";
import logo from "../assets/logo.png";

// import your page components
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

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaClipboardList />, path: "/dashboard" },
    { id: "profile", label: "Edit Profile", icon: <FaUserEdit />, path: "/dashboard/profile" },
    { id: "updatepass", label: "Update Password", icon: <FaLock />, path: "/dashboard/updatepass" },
    { id: "plans", label: "Subscriptions & History", icon: <FaClipboardList />, path: "/dashboard/plans" },
    { id: "history", label: "Previous Chat", icon: <FaHistory />, path: "/dashboard/history" },
    { id: "newchat", label: "New Chat", icon: <FaComments />, path: "/dashboard/newchat" },
    { id: "partp", label: "Part P Compliance", icon: <FaFileAlt />, path: "/dashboard/partp" },
    { id: "bs", label: "BS 7671 Quick Ref", icon: <FaBook />, path: "/dashboard/bs" },
    { id: "building", label: "Building Regulations", icon: <FaBuilding />, path: "/dashboard/building" },
    { id: "calc", label: "UK Calculations", icon: <FaCalculator />, path: "/dashboard/calc" },
    { id: "cps", label: "Competent Person Schemes", icon: <FaUserShield />, path: "/dashboard/cps" },
    { id: "openreq", label: "Open Request", icon: <FaInbox />, path: "/dashboard/openreq" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white">

      {/* Sidebar for desktop */}
      <aside className="hidden md:flex w-64 bg-white flex-col border-r transition-all duration-300">
        <div className="flex-1 overflow-y-auto p-3">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="ElectraX Logo" className="h-12 w-auto" />
          </div>

          {/* Menu Items */}
          <nav className="text-sm space-y-2">
            {menuItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md no-underline transition-colors
                    ${active
                      ? "text-blue-600 bg-blue-50"
                      : "text-black hover:bg-gray-200"
                    }`}
                >
                  {item.icon}
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="border-t border-gray-300 p-3">
          <div
            onClick={() => alert("Logging out...")}
            className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer text-black hover:text-red-600 hover:bg-red-50"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Drawer Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div
          className="absolute inset-0 bg-gray-400 bg-opacity-10"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <aside className="relative w-64 h-full bg-gray-100 flex flex-col border-r shadow-lg">
          <div className="flex-1 overflow-y-auto p-3">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="ElectraX Logo" className="h-10 w-auto" />
            </div>
            <nav className="text-sm space-y-2">
              {menuItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md no-underline transition-colors
                      ${active
                        ? "text-blue-600 bg-blue-50"
                        : "text-black hover:bg-gray-200"
                      }`}
                  >
                    {item.icon}
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex justify-between items-center px-3 sm:px-4 py-2 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <FaBars
              className="text-xl cursor-pointer md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />

          </div>
        </header>

        {/* Routed Pages */}
        <main className="flex-1 p-0 sm:p-0 overflow-auto">
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
