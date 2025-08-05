import React, { useState, useContext } from "react";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { Notification } from "react-iconly";
import { LogoutCurve, ProfileCircle, Setting2 } from "iconsax-reactjs";
import { UserContext } from "@/context/userContext";
import SideMenu from "./SideMenu";
import Dropdown from "../ui/Dropdown";

const Topbar = ({ activeMenu }) => {
  const { user } = useContext(UserContext);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const displayName = user?.name || user?.email || "Admin";
  const profileImage =
    user?.profileImageUrl && user.profileImageUrl !== "null"
      ? user.profileImageUrl
      : null;

  const handleSettings = () => {
    console.log("Settings clicked");
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const dropdownOptions = [
    { icon: Setting2, text: "Settings", onClick: handleSettings },
    { icon: LogoutCurve, text: "Logout", onClick: handleLogout },
  ];

  return (
    <div className="w-full h-full rounded-3xl flex items-center justify-between bg-[#F5F5FF] border-b border-gray-200 px-3 ">
      {/* Left: Toggle & Title */}
      <div className="flex items-center gap-4 ">
          
        <button
          className="block lg:hidden text-black "
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Right: Notification + Profile */}
      <div className="flex items-center gap-6 mr-8 relative">
        {/* Notification */}
        <div className="relative">
          <div className="absolute w-2 h-2 bg-red-500 rounded-full top-0.5 right-0.5" />
          <Notification set="light" />
        </div>

        {/* Profile & Dropdown */}
        <div
          className="relative flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover bg-slate-300"
            />
          ) : (
            <ProfileCircle
              size="32"
              className="text-primary bg-primary/10 p-1 rounded-full"
            />
          )}
          <div className="text-sm font-medium text-gray-800">{displayName}</div>
          <IoIosArrowDown
            className={`text-xl text-gray-600 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
          {/* Reusable Dropdown */}
          <Dropdown open={dropdownOpen} options={dropdownOptions} className="top-14 -left-2" />
        </div>
      </div>

      {/* Side menu (mobile) */}
      {openSideMenu && (
        <div className="fixed top-[61px] left-0 bg-white shadow z-40">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Topbar;
