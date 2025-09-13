import { useState } from "react";

export default function UpdatePassword() {
  const [form, setForm] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Current password validation
    if (!form.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    } else if (form.currentPassword.length < 6) {
      newErrors.currentPassword = "Password must be at least 6 characters";
    }

    // New password validation
    if (!form.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (form.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (!/(?=.*[0-9])(?=.*[!@#$%^&*])/.test(form.newPassword)) {
      newErrors.newPassword =
        "Password must include a number and a special character";
    }

    // Confirm password validation
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (form.confirmPassword !== form.newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.type === "email" ? "email" : e.target.placeholder.toLowerCase().replace(/ /g, "")]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Password updated successfully ✅");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-2 py-3 border-b border-gray-200 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-lg font-bold text-black">Password Update</h1>
        <h1 className="text-lg font-bold text-blue-700">Electra X</h1>
      </div>

      {/* Body */}
      <div className="flex justify-center items-center flex-1 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md h-[520px] overflow-y-auto">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Update Password
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500" : "focus:ring-blue-400"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Current Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                value={form.currentPassword}
                onChange={(e) =>
                  setForm({ ...form, currentPassword: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.currentPassword ? "border-red-500" : "focus:ring-blue-400"
                }`}
                placeholder="Enter current password"
              />
              {errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.currentPassword}</p>
              )}
            </div>

            {/* New Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                value={form.newPassword}
                onChange={(e) =>
                  setForm({ ...form, newPassword: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.newPassword ? "border-red-500" : "focus:ring-blue-400"
                }`}
                placeholder="Enter new password"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.confirmPassword ? "border-red-500" : "focus:ring-blue-400"
                }`}
                placeholder="Confirm new password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Update Button */}
            <button
              type="submit"
             
              className="w-full py-2 mt-4 bg-yellow-400 text-blue-700 font-semibold rounded-lg shadow hover:bg-yellow-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
