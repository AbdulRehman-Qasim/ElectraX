import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaShieldAlt } from "react-icons/fa";

export default function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Navbar
      <header className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold">Edit Profile</h1>
        <h1 className="text-lg font-semibold text-blue-600">Electra X</h1>
      </header> */}
{/* Navbar */}
<div className="w-full flex justify-between items-center px-2 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
  <h1 className="text-lg font-bold text-black">Edit Profile</h1>
  <h1 className="text-lg font-bold text-blue-700">Electra X</h1>
</div>


      {/* ✅ Body Layout */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* LEFT SIDE - Edit Profile Card */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white shadow-md rounded-xl p-6 min-h-[600px]">
            {/* Media Picker */}
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <span className="text-gray-500">Photo</span>
              </div>
              <div className="flex gap-4 mt-3 flex-wrap justify-center">
                <button className="bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
                  Change
                </button>
                <button className="bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-yellow-600 transition">
                  Remove
                </button>
              </div>
            </div>

            {/* Text Fields */}
            <div className="mt-6 space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border p-3 rounded-lg w-full"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Role / User Type"
                  className="border p-3 rounded-lg w-full"
                />
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Password */}
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="border p-3 rounded-lg w-full"
                  />
                  <span
                    className="absolute right-3 top-4 cursor-pointer text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="border p-3 rounded-lg w-full"
                  />
                  <span
                    className="absolute right-3 top-4 cursor-pointer text-gray-600"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            {/* Save Changes Button */}
            <div className="mt-6 text-center">
              <button className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-yellow-600 hover:shadow-md transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Info & Security */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {/* Current Profile Card */}
          <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 min-h-[250px]">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <span className="text-gray-500">Img</span>
            </div>
            <div>
              <h2 className="font-bold text-lg">John Doe</h2>
              <p className="text-sm text-gray-600">Electrician</p>
              <p className="text-sm text-gray-500">johndoe@email.com</p>
            </div>
          </div>

          {/* Security Tips Card */}
          <div className="bg-white shadow-md rounded-xl p-6 min-h-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <FaShieldAlt className="text-black" />
              <h2 className="font-bold text-black">Security Tips</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Keep your profile information up to date to ensure account
              security. Use a strong, unique password to protect your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
