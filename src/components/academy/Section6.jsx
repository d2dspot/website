import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "@mui/material";
import ButtonGradient from "../buttons/ButtonGradient";
import ButtonStar from "../buttons/ButtonStar";
import ButtonPlain from "../buttons/ButtonPlain";
import { showSuccessToast, showErrorToast } from "@/lib/Toast";
import { validateEmail } from "@/lib/utils";

const Section6 = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const steps = ["Select Date", "Time Slot", "Basic Details"];
  const timeSlots = [
    { label: "09:00 AM - 11:00 AM", startHour: 9, endHour: 11 },
    { label: "11:00 AM - 01:00 PM", startHour: 11, endHour: 13 },
    { label: "01:00 PM - 03:00 PM", startHour: 13, endHour: 15 },
    { label: "03:00 PM - 05:00 PM", startHour: 15, endHour: 17 },
    { label: "05:00 PM - 07:00 PM", startHour: 17, endHour: 19 },
  ];

  const isSlotExpired = (slot) => {
    if (!selectedDate) return false;

    const today = new Date();
    const selected = new Date(selectedDate);

    // If selected date is not today, allow all
    if (
      selected.getFullYear() !== today.getFullYear() ||
      selected.getMonth() !== today.getMonth() ||
      selected.getDate() !== today.getDate()
    ) {
      return false;
    }

    // Check if current time is past slot's end
    const now = new Date();
    const slotEnd = new Date();
    slotEnd.setHours(slot.endHour, 0, 0, 0);

    return now > slotEnd;
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (!selectedDate) {
        showErrorToast(
          "Please select a date before continuing.",
          "Date Required"
        );
        return;
      }

      const today = new Date();
      const selected = new Date(selectedDate);
      selected.setHours(0, 0, 0, 0); // Clear time
      today.setHours(0, 0, 0, 0);

      if (selected < today) {
        showErrorToast("Selected date is in the past.", "Invalid Date");
        return;
      }
    }

    if (activeStep === 1 && !selectedTimeSlot) {
      showErrorToast(
        "Please select a time slot before continuing.",
        "Time Slot Required"
      );
      return;
    }

    if (activeStep === 2) {
      if (!name.trim()) {
        showErrorToast("Name is required.", "Missing Name");
        return;
      }
      if (!email.trim() || !validateEmail(email)) {
        showErrorToast("Please enter a valid email address.", "Invalid Email");
        return;
      }
      if (!comment.trim()) {
        showErrorToast("Please write a message.", "Message Required");
        return;
      }

      // ✅ Success
      console.log("📝 Form Submitted:");
      console.log("Date:", selectedDate?.toDateString());
      console.log("Time Slot:", selectedTimeSlot);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Comment:", comment);

      showSuccessToast(
        "Your appointment request was submitted!",
        "Submitted Successfully"
      );
      // Reset form after submission
      setSelectedDate(null);
      setSelectedTimeSlot(null);
      setName("");
      setEmail("");
      setComment("");
      setActiveStep(0);

      return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div className="sm:mx-auto self-stretch px-6 sm:px-28 py-8 sm:py-16 bg-white flex flex-col items-center gap-1">
      <div className="sm:max-w-[1440px] w-full flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[660px] flex flex-col justify-start items-start gap-6 sm:gap-12">
          <div className="flex flex-col gap-3">
            <ButtonStar>Start Your Journey</ButtonStar>
            <div className="flex flex-col gap-3 sm:gap-6">
              <h2 className="text-[27px] sm:text-5xl sm:leading-[64px] text-slate-900">
                <span className="font-normal">Seeking AI Solutions? </span>
                <span className="font-semibold text-primary">
                  Schedule a Call Now.
                </span>
              </h2>
              <p className="w-full sm:w-fit text-base sm:text-xl text-slate-800 sm:leading-loose">
                Speak with our team to discover how D2dspot's innovative AI can
                solve your unique business challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Stepper & Form */}
  <div className="w-full sm:w-fit flex justify-center sm:px-4">
  <Box className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-md px-1 sm:px-8 py-4 sm:py-6 flex flex-col gap-4 ">

            {/* Stepper */}
            <div className="flex items-center justify-between w-full px-2">
              {steps.map((label, index) => (
                <div
                  key={label}
                  className="flex-1 flex flex-col items-center relative"
                >
                  {index > 0 && (
                    <div className="absolute top-2.5 left-0 w-1/2 h-0.5 bg-gray-200 z-0"></div>
                  )}
                  <div
                    className={`relative w-5 h-5 rounded-full z-10 border-2 transition-all duration-300
                      ${
                        index === activeStep
                          ? "border-primary bg-white ring-4 ring-slate-400/30"
                          : "border-gray-200 bg-white"
                      }`}
                  >
                    {index === activeStep && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-2 h-2 bg-primary" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-2.5 left-1/2 w-1/2 h-0.5 bg-gray-200 z-0"></div>
                  )}
                  <div
                    className={`mt-3 text-sm font-medium ${
                      index === activeStep ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

<div className="h-[420px] w-full sm:w-[480px] flex items-center justify-center transition-all duration-300">
  <div className="w-full max-w-md">
    {activeStep === 0 && (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        inline
        minDate={new Date()}
        className="w-full"
      />
    )}

    {activeStep === 1 && (
      <div className="w-full">
        <h2 className="mb-4 text-center text-2xl font-bold text-slate-800">
          Select a Time Slot
        </h2>
        <div className="flex flex-col gap-3">
          {timeSlots.map((slot, index) => {
            const expired = isSlotExpired(slot);
            const isSelected = selectedTimeSlot === slot.label;

            return (
              <button
                key={index}
                onClick={() => !expired && setSelectedTimeSlot(slot.label)}
                disabled={expired}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out overflow-hidden cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                  active:scale-95 group hover:scale-105 hover:shadow-xl hover:border-white/30
                  ${expired ? "opacity-50 cursor-not-allowed" : ""}
                  ${
                    isSelected
                      ? "text-white border-primary bg-[radial-gradient(79.05%_110.71%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] hover:shadow-blue-500/25"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
                  }`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      </div>
    )}

    {activeStep === 2 && (
      <div className="w-full space-y-4">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-800">
          Enter Your Details
        </h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Briefly describe your requirement..."
          className="w-full min-h-[120px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 resize-none"
        />
      </div>
    )}
  </div>
</div>



            {/* Action Buttons */}
            <div className="w-full flex justify-between gap-3">
              <ButtonPlain
                className="w-full"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {activeStep === 0 ? "Cancel" : "Back"}
              </ButtonPlain>
              <ButtonGradient className="w-full" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </ButtonGradient>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Section6;
