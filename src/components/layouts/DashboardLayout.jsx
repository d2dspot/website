// src/components/layouts/DashboardLayout.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid4 } from "iconsax-reactjs";

import Topbar from "@/components/layouts/Topbar";
import SideMenu from "@/components/layouts/SideMenu";
import ErrorBoundary from "@/pages/error/ErrorBoundary";

const DashboardLayout = ({ children, activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const { pathname } = useLocation();

  // Pages that require transparent backgrounds
  const transparentPaths = ["/editor", "/file-folder/"];
  const isTransparentPage = transparentPaths.some((segment) =>
    pathname.includes(segment)
  );

  // Background style based on activeMenu
  const containerBgClass = ["Schedule", "Contact List", "Careers"].includes(
    activeMenu
  )
    ? "bg-transparent mx-auto"
    : "bg-[#F5F5FF] shadow-lg p-4";

  // Determine height logic based on container background
  const isSolidBg = containerBgClass === "bg-[#F5F5FF] shadow-lg p-4";
  const contentHeightClass = isSolidBg
    ? "h-[calc(100vh-200px)]"
    : "h-full";

  return (
    <div className="relative flex bg-[#E1E1FE] min-h-screen" data-lenis-prevent>
      {/* Sidebar */}
      <div
        className={`w-64 fixed inset-y-0 left-0 z-30 transform transition-transform ${
          openSideMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionDuration: "500ms" }}
      >
        <SideMenu
          activeMenu={activeMenu}
          onClose={() => setOpenSideMenu(false)}
        />
      </div>

      {/* Main content area */}
      <div
        className={`flex flex-col flex-1 m-6 h-full transition-all duration-500 ease-in-out ${
          openSideMenu ? "ml-70" : ""
        } relative`}
      >
        {/* Topbar */}
        <div className="sticky top-5 left-1/2 h-[74px] flex items-center justify-center gap-6">
          <button
            onClick={() => setOpenSideMenu(true)}
            className={`h-full flex items-center justify-center bg-[#F5F5FF] p-2 rounded-3xl shadow-md transform transition-all duration-500 ease-in-out w-[74px] ${
              openSideMenu
                ? "translate-x-16 opacity-0 pointer-events-none absolute -top-10 -left-100"
                : "translate-x-0 opacity-100"
            }`}
          >
            <Grid4 size={24} className="text-gray-700" />
          </button>
          <Topbar activeMenu={activeMenu} />
        </div>

        {/* Page Content */}
        <div
          className={`mt-10 rounded-[16px] flex flex-col flex-1 overflow-hidden ${containerBgClass} ${
            isTransparentPage ? "bg-transparent shadow-none" : ""
          }`}
        >
          <div className={`w-full flex flex-col ${contentHeightClass}`}>
            <ErrorBoundary>{children}</ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
