import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AdminInput from "@/components/input/AdminInput";
import logo from "/assets/logo_icon.svg";
import ButtonGradient from "@/components/buttons/ButtonGradient";
import { validateEmail } from "@/lib/utils";
import {
  showSuccessToast,
  showErrorToast,
  showLoadingToast,
  dismissAllToasts,
} from "@/lib/Toast";
import { UserContext } from "@/context/userContext";

// ✅ Import API path helper
import { API_PATHS, buildApiUrl } from "@/lib/apiPaths.js";

const Section1 = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      showErrorToast("Email is required.", "Missing Email");
      return;
    }

    if (!validateEmail(formData.email)) {
      showErrorToast("Please enter a valid email address.", "Invalid Email");
      return;
    }

    if (!formData.password) {
      showErrorToast("Password is required.", "Missing Password");
      return;
    }

    try {
      showLoadingToast("Validating credentials...");

      // ✅ Use centralized login URL
      const loginUrl = buildApiUrl("AUTH", API_PATHS.AUTH.LOGIN);

      const response = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        const { token, admin } = result.data;

        updateUser({
          name: admin.fullName,
          email: admin.email,
          role: admin.Role?.name || "user",
          token,
          profileImageUrl: admin.profileImage || "null",
        });

        dismissAllToasts();
        showSuccessToast("Login successful!", "Welcome");
        navigate("/admin/dashboard");
      } else {
        dismissAllToasts();
        showErrorToast(result.message || "Invalid credentials", "Login Failed");
      }
    } catch (err) {
      dismissAllToasts();
      showErrorToast("Something went wrong. Please try again.", "Login Error");
      console.error("Login error:", err);
    }
  };

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 md:px-10 py-6 flex items-center box-border justify-center bg-[#E1E1FE]">
      <div className="w-full flex justify-center items-center">
        <div className="w-full sm:w-[547px] max-w-md sm:max-w-none bg-violet-50 rounded-3xl shadow-md p-6 sm:p-8 flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={logo}
              alt="d2dspot"
              className="w-[70%] h-full sm:w-[276px] sm:h-[71px] object-contain object-center"
            />
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-6 sm:gap-10 sm:p-6 items-start justify-start"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-[#183B56]">
                Hi There!
              </h1>
              <p className="text-sm font-normal sm:text-lg sm:font-medium text-gray-900 leading-6">
                Welcome back to e-commerce dashboard
              </p>
            </div>
            <div className="w-full flex flex-col gap-6">
              <AdminInput
                label="Email / Username"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <AdminInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <ButtonGradient type="submit" className="w-full rounded-sm">
              Log in
            </ButtonGradient>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section1;
