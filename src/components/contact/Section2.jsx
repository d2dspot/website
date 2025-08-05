import React from "react";

const contactItems = [
  {
    title: "Email us",
    icon: "/assets/email.svg",
    details: ["contact@valopt.ai", "support@valopt.ai"],
  },
  {
    title: "Call us",
    icon: "/assets/email.svg",
    details: ["+91 8608011063"],
  },
];

const Section2 = () => {
  return (
    <div className="w-full lg:w-[1440px] mx-auto px-4 sm:px-6 lg:px-[150px] sm:py-8 bg-white flex flex-col items-center gap-8">
      <div className="w-full flex flex-col items-center gap-7">
        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-8 lg:gap-12">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[320px] p-2 sm:p-5 bg-purple-50 rounded-[20px]  outline-1 outline-offset-[-1px] outline-Color flex flex-col items-center sm:gap-4"
            >
              {/* Icon + Title */}
              <div className="w-full flex flex-col items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/5">
                  <img
                    className="w-10 h-10"
                    src={item.icon}
                    alt={`${item.title} icon`}
                  />
                </div>
                <div className="text-center text-2xl font-medium text-primary leading-8 tracking-tight whitespace-nowrap">
                  {item.title}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col items-center gap-2 text-center">
                {item.details.map((text, idx) => (
                  <div
                    key={idx}
                    className="text-Color-3 text-base sm:text-lg font-medium font-['Poppins'] leading-7"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
