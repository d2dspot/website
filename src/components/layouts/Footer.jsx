import React from "react";
import ButtonGradient from "../buttons/ButtonGradient";
import logo_icon from "/assets/logo_icon.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowNarrowUp } from "react-icons/hi";

const footerLinks = [
  {
    title: "Menu",
    links: [
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: "Academy", path: "/academy" },
      { name: "Blogs", path: "/blogs" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Responsible AI", path: "/products/responsible-ai" },
      { name: "AI Agent", path: "/products/ai-agent" },
      {
        name: "Intelligent AI Marketing",
        path: "/products/intelligent-ai-marketing",
      },
      { name: "Custom AI Solutions", path: "/products/custom-ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Academy", path: "/academy" },
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: <FaFacebook size={20} />, url: "https://www.facebook.com" },
  { icon: <FaInstagram size={20} />, url: "https://www.instagram.com" },
  { icon: <FaXTwitter size={20} />, url: "https://www.twitter.com" },
  { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com" },
];

const Footer = ({ title, desc, buttonText }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full self-stretch relative rounded-tl-[42px] rounded-tr-[42px] inline-flex flex-col justify-center items-center overflow-hidden">
      {/* Hero Content */}
      <div className="w-full max-w-[1440px] mx-auto self-stretch px-4 sm:px-6 lg:px-36 py-5 sm:py-16 md:py-20 lg:py-24 flex flex-col justify-center items-center gap-10 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-center gap-8">
          <h1 className="w-full lg:w-[1140px] text-center text-blue-950 text-3xl sm:text-5xl lg:text-[85px] font-medium leading-tight lg:leading-[100px] tracking-tight">
            {title}
          </h1>
          <p className="w-full max-w-[864px] text-center text-slate-800 text-sm sm:text-base md:text-xl font-normal leading-relaxed">
            {desc}
          </p>
          <div className="inline-flex justify-center items-center gap-7">
            <div className="px-6 py-4 rounded-xl outline-1 outline-offset-[-1px] outline-white/20 flex justify-center items-center gap-3 overflow-hidden">
              <ButtonGradient className="w-full max-w-[332px] px-6 flex items-center gap-3 py-4 whitespace-nowrap">
                {buttonText}
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full max-w-[1440px]  ">
        {/* Footer Upper Grid */}
        <div className="w-full px-4 sm:px-6 lg:px-[150px] py-4 sm:py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row sm:items-start sm:justify-between gap-3 sm:gap-12">
          {/* Logo */}
          <img src={logo_icon} className="h-10 w-auto" alt="Logo" />

          {/* Links and Social */}
          <div className=" w-full  max-w-[720px] flex  sm:flex-row flex-wrap gap-8 justify-around sm:justify-between items-start">
            {footerLinks.map((section) => (
              <div
                key={section.title}
                className="flex  flex-col items-start gap-2 text-blue-950 text-xs font-normal"
              >
                <span className="text-sm font-medium">{section.title}</span>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="opacity-70 hover:text-blue-600 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}

            {/* Follow Us */}
            <div className="flex flex-col items-start gap-4 text-blue-950 text-xs font-normal">
              <span className="text-sm font-medium text-center sm:text-left w-full sm:w-fit ">FOLLOW US</span>
              <div className="flex justify-end items-center gap-3">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-6 h-6 text-3xl text-slate-500 rounded-full flex items-center justify-center hover:text-blue-600 transition">
                      {item.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full px-4 sm:px-6 lg:px-24 py-5 border-t border-blue-950/10">
          <div className="w-full max-w-[1440px] flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-blue-950/70 text-xs text-center sm:text-left">
              © 2024, d2dspot. All rights reserved.
            </span>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-center">
              <div className="flex items-center gap-2 sm:gap-4 text-blue-950/70 text-xs">
                <span>Terms of Service</span>
                <span className="text-slate-300">|</span>
                <span>Privacy Policy</span>
                <span className="text-slate-300">|</span>
                <span>English</span>
                <IoIosArrowDown size={20} />
              </div>
              <div
                onClick={scrollToTop}
                className="flex w-10 h-10 p-2 justify-center items-center bg-[#0f254f] border text-white rounded-full cursor-pointer"
              >
                <HiArrowNarrowUp size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
