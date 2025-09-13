import React, { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.PNG"; // ✅ your logo

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login successful:", formData);
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* ✅ Logo */}
      <div className="flex items-center mb-4">
        <img src={logo} alt="ElectraX Logo" className="h-14 w-auto" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Login to your account
      </h2>
      <p className="text-gray-600 mb-6">
        Please enter your credentials to access your account
      </p>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <div className="flex items-center border rounded-md px-3">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-3 text-sm outline-none border-none focus:ring-0"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center border rounded-md px-3">
              <KeyIcon className="h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-2 py-3 text-sm outline-none border-none focus:ring-0"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-blue-700 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Log In
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 flex flex-col items-center space-y-2 text-sm">
          <a
            href="/forgot-password"
            className="text-blue-700 font-semibold hover:text-blue-800 no-underline"
          >
            Forgot Password?
          </a>
          <p className="text-gray-700">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-700 font-semibold hover:text-blue-800 no-underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
