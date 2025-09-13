import React, { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  KeyIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.PNG"; // ✅ import your logo

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Account created successfully!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* ✅ Logo */}
      <div className="flex items-center mb-4">
        <img src={logo} alt="ElectraX Logo" className="h-20 w-auto" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Create your account
      </h2>
      <p className="text-gray-600 mb-6">
        Welcome back, please enter your details
      </p>

      {/* Signup Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <div className="flex items-center border rounded-md px-3">
              <UserIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-3 text-sm outline-none border-none focus:ring-0"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

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

          {/* Phone */}
          <div>
            <div className="flex items-center border rounded-md px-3">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-2 py-3 text-sm outline-none border-none focus:ring-0"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Referral (Optional) */}
          <div>
            <div className="flex items-center border rounded-md px-3">
              <UserPlusIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="referral"
                placeholder="Referral (Optional)"
                value={formData.referral}
                onChange={handleChange}
                className="w-full px-2 py-3 text-sm outline-none border-none focus:ring-0"
              />
            </div>
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

          {/* Confirm Password */}
          <div>
            <div className="flex items-center border rounded-md px-3">
              <KeyIcon className="h-5 w-5 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-2 py-3 text-sm outline-none border-none focus:ring-0"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="focus:outline-none"
              >
                {showConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-blue-700 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-700 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-700 font-semibold hover:text-blue-800 no-underline"
          >
            Login
          </a>
        </p>

        {/* Terms */}
        <div className="mt-4 flex justify-center space-x-4 text-sm text-blue-700">
          <a href="/terms" className="hover:text-blue-800 no-underline">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="/privacy" className="hover:text-blue-800 no-underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
