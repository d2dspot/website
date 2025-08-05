import React, { useState } from "react";
import FormInput from "../input/FormInput";
import ButtonStar from "../buttons/ButtonStar";
import ButtonGradient from "../buttons/ButtonGradient";
import { FaCheck } from "react-icons/fa";
import { showErrorToast, showSuccessToast, showWarningToast } from "@/lib/Toast";

const Section1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    contactMethod: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, phone, contactMethod, message, agreement } = formData;

    if (!agreement) {
showWarningToast("Please agree to the Privacy Policy to proceed.", "Action Required");
      return;
    }

    if (!firstName || !email || !phone || !contactMethod || !message) {
      showWarningToast("Please fill out all the fields.","Action Required");
      return;
    }

    showSuccessToast("Message sent successfully!");
    console.log("Submitted:", formData);

    setFormData({
      firstName: "",
      email: "",
      phone: "",
      contactMethod: "",
      message: "",
      agreement: false,
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-36 sm:py-16 flex flex-col items-center gap-1 sm:gap-12 relative mt-16 sm:mt-20">
      {/* Title */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <ButtonStar>Contact Team</ButtonStar>
        <h3 className="text-2xl sm:text-4xl lg:text-5xl text-Foundation-Neutral-900 font-['Poppins'] leading-snug lg:leading-[64px]">
          What can we help you with?
        </h3>
      </div>

      {/* Background Image Layer */}
      <div className="relative w-full lg:w-[1184px] rounded-3xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 -top-5 -left-1"
          style={{ backgroundImage: "url(/assets/map.svg)" }}
        />

        {/* Contact Form Card */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 w-full lg:w-[894px] mx-auto mt-4 sm:mt-12 p-6 sm:p-8 lg:p-10 bg-white/30 rounded-[20px] outline-[3px] outline-offset-[-3px] outline-indigo-600/80 backdrop-blur-[5px] flex flex-col items-center gap-2 sm:gap-8"
        >
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <FormInput
              label="First Name"
              name="firstName"
              placeholder="Please input"
              value={formData.firstName}
              onChange={handleChange}
              className="placeholder:text-blue-950 w-full"
            />
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Please input"
              value={formData.email}
              onChange={handleChange}
              className="placeholder:text-blue-950 w-full"
            />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <FormInput
              label="Phone Number"
              name="phone"
              placeholder="+000"
              value={formData.phone}
              onChange={handleChange}
              className="placeholder:text-blue-950 w-full"
            />
            <FormInput
              label="Contact Method"
              name="contactMethod"
              placeholder="Support"
              value={formData.contactMethod}
              onChange={handleChange}
              className="placeholder:text-blue-950 w-full"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-base font-medium text-blue-950 font-['Poppins'] leading-tight">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Hi! We are D2dSpot"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-52 p-3 bg-indigo-600/20 rounded-lg outline-2 outline-offset-[-1px] outline-primary/40 backdrop-blur-[5.70px] text-blue-950 text-base font-normal font-['Poppins'] leading-snug placeholder:text-blue-950"
            />
          </div>

          {/* Agreement */}
          <div className="flex items-center justify-center sm:justify-start  gap-3 w-full">
            <div
              className={`w-5 h-5 sm:mt-1 rounded-[5px] flex items-center justify-center cursor-pointer transition-colors border-2 border-primary/40 
                ${formData.agreement ? "bg-primary text-white" : "bg-primary-400"}`}
              onClick={() =>
                setFormData((prev) => ({ ...prev, agreement: !prev.agreement }))
              }
            >
              {formData.agreement && <FaCheck size={10} />}
            </div>
            <label
              onClick={() =>
                setFormData((prev) => ({ ...prev, agreement: !prev.agreement }))
              }
              className="text-sm sm:text-base font-medium text-blue-950 font-['Poppins'] cursor-pointer"
            >
              I agree with D2dSpot Privacy Policy
            </label>
          </div>

          {/* Submit */}
          <ButtonGradient type="submit">Send Message</ButtonGradient>
        </form>
      </div>
    </div>
  );
};

export default Section1;
