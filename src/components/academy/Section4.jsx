import React from "react";
import ButtonStar from "../buttons/ButtonStar";
import GradientCard from "../cards/GradientCard";
import logo_sm from "/assets/logo_sm.svg";
import mobileQuote from "/assets/sm_quote_2.png";
import { SpinningTextWrapper } from "../ui/SpinningTextWrapper";
import useIsSmallScreen from "@/hooks/useIsSmallScreen"; // assuming you have this

const Section4 = () => {
  const isSmallScreen = useIsSmallScreen();

  const features = [
    {
      icon: "/assets/badge.svg",
      title: "Real Impact Skills",
      desc: "Job-ready AI expertise for tangible results.",
    },
    {
      icon: "/assets/ai.svg",
      title: "Responsible AI Focus",
      desc: "Ethical, compliant AI innovation.",
    },
    {
      icon: "/assets/leaderboard.svg",
      title: "Learn From Leaders",
      desc: "Industry & academic experts guide you.",
    },
    {
      icon: "/assets/timer.svg",
      title: "Flexible Learning",
      desc: "Online & on-site options to suit you.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 sm:px-20 py-3 sm:py-16 flex flex-col items-center">
      <div className="w-full max-w-[1140px] flex flex-col lg:flex-row items-center gap-6 sm:gap-16 relative">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-5   sm:gap-12">
          <div className="flex flex-col gap-2 sm:gap-4">
            <ButtonStar>Our Vision</ButtonStar>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#0F172A] leading-snug">
              Innovating Together for a Better{" "}
              <span className="font-semibold text-transparent bg-[radial-gradient(ellipse_110.72%_79.22%_at_50.67%_-66.96%,_#F5F5FF_0%,_#4B4EFC_100%)] bg-clip-text">
                AI Future.
              </span>
            </h2>
            <p className="text-[#263343] text-base sm:text-lg leading-[2rem]">
              Gain the edge you need to excel in the dynamic world of Artificial
              Intelligence.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="bg-[#4C4FFC]/10 w-10 h-10 sm:w-[50px] sm:h-[35px] rounded-full flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[#183B56] font-medium text-lg">
                    {item.title}
                  </h4>
                  <p className="text-[#5A7184] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:w-[570px] h-auto flex items-center justify-center">
          {isSmallScreen ? (
            <div className="mt-[40px]">
              {/* Mobile image version */}
              <img
                src={mobileQuote}
                alt="D2dspot Academy Quote"
                className="rounded-2xl w-full max-w-[350px] h-auto  object-contain "
              />

              {/* Seal overlay (mobile) */}
              <div className="w-[100px] h-[100px] sm:w-[190px] sm:h-[190px] block absolute -top-[0px] left-[60px] z-20 ">
                <div className="w-26 h-26 bg-white rounded-full relative border-2 border-primary">
                  <div className="absolute w-20 h-20 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <SpinningTextWrapper
                      className="text-primary font-semibold text-xs tracking-most"
                      radius={5}
                      duration={8}
                    >
                      {
                        "                                                                            D  2  D   S  P  O  T "
                      }
                    </SpinningTextWrapper>
                    <SpinningTextWrapper
                      className="text-black font-light text-xs tracking-widest"
                      radius={5}
                      duration={8}
                    >
                      {"| DESIGN TO DEVELOPEMENT |       "}
                    </SpinningTextWrapper>
                  </div>
                  <img
                    src={logo_sm}
                    className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 p-[1.73px] bg-blend-overlay rounded-full outline-[0.57px] outline-offset-[-0.57px] outline-white/20"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Desktop image + testimonial + seal */}
              <img
                src="/assets/d2d_team.jpg"
                alt="D2dspot Team"
                className="rounded-2xl w-full max-w-[570px] h-[367px] object-cover -translate-x-[25px] "
              />

              <div className="absolute -bottom-20 -right-10 w-full max-w-[420px]">
                <GradientCard className="text-sm sm:text-base text-white shadow-md">
                  <p>
                    “At D2dspot Academy, we empower every learner to build AI
                    that is not only powerful, but also sustainable and
                    responsible.”
                  </p>
                  <p className="text-xs text-right mt-2">~ D2dspot's Academy</p>
                </GradientCard>
              </div>

              {/* Seal (desktop) */}
              <div className="w-[100px] h-[100px] sm:w-[190px] sm:h-[190px] block absolute -top-[80px] left-[80px] z-20">
                <div className="sm:w-48 sm:h-48 w-10 h-10 bg-white rounded-full relative border-2 border-primary">
                  <div className="absolute sm:w-[134px] sm:h-[134px] w-10 h-10 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <SpinningTextWrapper
                      className="text-primary font-bold"
                      radius={7}
                      duration={8}
                    >
                      {
                        "                                                                   D 2 D   S P O T"
                      }
                    </SpinningTextWrapper>
                    <SpinningTextWrapper
                      className="text-black font-normal"
                      radius={7}
                      duration={8}
                    >
                      {"| DESIGN  TO  DEVELOPEMENT |       "}
                    </SpinningTextWrapper>
                  </div>
                  <img
                    src={logo_sm}
                    className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 p-[1.73px] bg-blend-overlay rounded-full outline-[0.57px] outline-offset-[-0.57px] outline-white/20"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section4;
