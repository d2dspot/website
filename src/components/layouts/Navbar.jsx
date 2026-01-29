import React, { useState, useEffect } from "react";
import logo_icon from "/assets/logo_icon.svg";
import { Link, useLocation } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import ButtonGradient from "../buttons/ButtonGradient";
import { motion, AnimatePresence } from "framer-motion";
import useIsSmallScreen from "@/hooks/useIsSmallScreen";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isSmall = useIsSmallScreen();

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navItems = [
    { label: "Home", path: "/", hasDropdown: false },
    {
      label: "Company",
      hasDropdown: true,
      subItems: [
        { label: "Blogs", path: "/blogs" },
        { label: "About Us", path: "/about" },
        { label: "Academy", path: "/academy" },
      ],
    },
    { label: "Contact Us", path: "/contact", hasDropdown: false },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <div className="fixed w-full z-50 flex justify-center items-center transition-all duration-500">
      <header
        className={`flex items-center justify-between border border-white/20 backdrop-blur-xs transition-all duration-500 ${scrolled
          ? `bg-white translate-y-3 sm:translate-y-10 max-w-[1140px] w-[80%] sm:w-[1140px] rounded-2xl px-4 sm:px-8 py-2 sm:py-2 transform ease-in-out ${menuOpen && " rounded-b-none"
          }`
          : "bg-white sm:translate-y-0 px-7 sm:px-10 py-4 max-w-full w-full sm:py-4 transform ease-in-out"
          }`}
      >
        <Link to="/">
          <img
            src={logo_icon}
            className="w-[120px] sm:w-[138px] h-[36px]"
            alt="d2dspot - Product Development Agency Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center">
          {navItems.map(({ label, path, hasDropdown, subItems }) => {
            const isActive = path && location.pathname === path;
            return (
              <div key={label} className="relative group">
                {hasDropdown && subItems ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-sm transition-all leading-[100%] tracking-normal ${scrolled ? "text-slate-600" : "text-[#525F81]"
                      } hover:text-primary hover:font-semibold`}
                  >
                    <span className="text-sm whitespace-nowrap">{label}</span>
                    <RxCaretDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-sm transition-all leading-[100%] tracking-normal ${isActive
                      ? "text-primary font-semibold"
                      : scrolled
                        ? "text-slate-600"
                        : "text-[#525F81]"
                      } hover:text-primary hover:font-semibold`}
                  >
                    <span className="text-sm whitespace-nowrap">{label}</span>
                  </Link>
                )}

                {/* Submenu (Desktop) */}
                {hasDropdown && subItems && (
                  <div className="absolute top-full left-0 bg-white border mt-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-40 min-w-[160px]">
                    {subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:font-semibold"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!isSmall && (
          <ButtonGradient onClick={() => { }}>Start a Project</ButtonGradient>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className={`absolute top-[66px] shadow-md rounded-b-2xl md:hidden z-40 transition-all duration-500 ease-in-out ${scrolled ? "max-w-[80%] w-[79.955%]" : "w-full max-w-[1140px]"
              }`}
          >
            <div className="flex flex-col gap-4 bg-white w-full py-2 px-3 rounded-b-2xl border-t-2 border-primary">
              {navItems.map(({ label, path, hasDropdown, subItems }) => {
                const isActive = path && location.pathname === path;
                return (
                  <div key={label} className="flex flex-col">
                    {hasDropdown && subItems ? (
                      <>
                        <div className="flex items-center gap-2 text-base text-slate-600 font-medium">
                          <span>{label}</span>
                          <RxCaretDown className="w-4 h-4" />
                        </div>
                        <div className="pl-5 mt-1 flex flex-col gap-1">
                          {subItems.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              onClick={() => setMenuOpen(false)}
                              className="text-sm text-gray-600 hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-2 text-base transition-all duration-500 ease-in-out ${isActive
                          ? "text-primary font-semibold"
                          : "text-slate-600"
                          } hover:text-primary`}
                      >
                        <span>{label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
              <ButtonGradient
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Start a Project
              </ButtonGradient>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
