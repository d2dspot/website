import React from "react";
import ButtonGradient from "../buttons/ButtonGradient";
import GradientCard from "../cards/GradientCard";
import logo_sm from "/assets/logo_sm.svg";
import group from "/assets/group.png";
import frame17 from "/assets/frame17.svg";
import ButtonStar from "../buttons/ButtonStar";
import { FaChevronRight } from "react-icons/fa";
import { SpinningTextWrapper } from "../ui/SpinningTextWrapper";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";
import mobileImg from '/assets/sm_quote.png'
import { Link } from "react-router-dom";
const Section3 = () => {
  const isSmallScreen = useIsSmallScreen();
  return (
    <div className="flex flex-col w-full h-auto py-16 px-4 sm:px-6 md:px-12 lg:px-[120px] gap-4 sm:gap-8 ">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap- lg:gap-[60px] ">
        {/* First Box */}
        <div className=" flex flex-col w-[100%]  sm:w-[570.75px] h-[325px] sm:h-[550px] relative">
          <div className="flex flex-col w-full relative  items-start">
            <img src={mobileImg} alt="d2dspot client testimonial visualization" className="w-full h-full " />
            <img
              src={frame17}
              alt="Design to development graphic element"
              className=" hidden sm:block max-w-[467px] h-96 absolute -top-[43px] left-0 "
            />
            <GradientCard
              className="z-10 h-full hidden sm:block sm:absolute  sm:left-[175px] 
             sm:translate-x-0 
             sm:w-[90%] 
            sm:max-w-96 p-1 sm:p-5 
            bg-blend-overlay 
            rounded-[10px] gap-1.5"
            >
              <p className="text-white text-[9px] sm:text-lg leading-normal sm:leading-7 tracking-normal">
                “We build digital experiences where creativity meets precision
                and vision becomes value.”
              </p>
              <p className="text-[7px] sm:text-xs leading-6 text-right w-full">
                -D2D Spot’s Core Philosophy
              </p>
            </GradientCard>

            {/* D2D Seal */}
            {isSmallScreen ? (
              <>
                <div className="w-[100px] h-[100px] sm:w-[190px]  sm:h-[190px] block absolute bottom-[1px] left-[30px] sm:top-[301px] sm:left-[9.5px] z-20  ">
                  <div className=" w-26 h-26 bg-white rounded-full relative border-2 border-primary">
                    <div className="  absolute w-20 h-20 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <SpinningTextWrapper
                        className="text-primary font-semibold text-xs tracking-most "
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
                      alt="d2dspot seal"
                      className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 p-[1.73px] bg-blend-overlay rounded-full outline-[0.57px] outline-offset-[-0.57px] outline-white/20"
                    />
                  </div>
                </div>


              </>
            ) : (
              <>
                <div className="w-[100px] h-[100px] sm:w-[190px]  sm:h-[190px] block absolute top-[100px] sm:top-[301px] left-[9.5px] z-20  ">
                  <div className="sm:w-48 sm:h-48 w-10 h-10 bg-white rounded-full relative border-2 border-primary">
                    <div className=" absolute sm:w-[134px] sm:h-[134px] w-10 h-10 flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <SpinningTextWrapper
                        className=" text-primary font-bold  "
                        radius={7}
                        duration={8}
                      >
                        {
                          "                                                                   D 2 D   S P O T"
                        }{" "}
                      </SpinningTextWrapper>
                      <SpinningTextWrapper
                        className="text-black font-normal "
                        radius={7}
                        duration={8}
                      >
                        {"| DESIGN  TO  DEVELOPEMENT |       "}
                      </SpinningTextWrapper>
                    </div>
                    <img
                      src={logo_sm}
                      alt="d2dspot seal"
                      className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 p-[1.73px] bg-blend-overlay rounded-full outline-[0.57px] outline-offset-[-0.57px] outline-white/20"
                    />
                  </div>
                </div>


              </>
            )}
            <img
              src={group}
              alt="d2dspot team collaboration"
              className="hidden sm:block max-w-[395px] h-[300px] mt-6 absolute 
                    sm:top-[74px] sm:left-[104px] rounded-[20px] z-0"
            />
          </div>
        </div>

        {/* Second Box */}
        <div className="w-full lg:w-[569px] flex flex-col gap-2 sm:gap-10  items-center sm:items-start mt-3">
          <div className="w-full flex flex-col gap-4  items-center sm:items-start">
            <ButtonStar>Who We Are</ButtonStar>
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] leading-snug lg:leading-[64px] font-normal text-[#263343] text-center sm:text-left">
                Shaping Ideas Into{" "}
                <span className="font-semibold text-primary">
                  Functional Solutions
                </span>
              </h2>

              <p className="text-[#263343] text-base sm:text-lg lg:text-[20px] leading-relaxed text-center sm:text-left">
                At D2D Spot, we are a product-first design and development
                company. We help startups and enterprises bring their ideas to
                life through seamless UX, scalable technology, and AI-powered
                solutions.
              </p>
            </div>
          </div>
          <Link to="/about">
            <ButtonGradient>
              Our Story <FaChevronRight className="w-5 h-5 ml-2" />
            </ButtonGradient>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
