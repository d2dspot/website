import { UserContext } from "@/context/userContext";
import NotAuthorized from "@/pages/error/NotAuthorized";
import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading } = useContext(UserContext);
 

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center   w-screen h-screen bg-[#F5F5FF]">
        <div className="loader"></div>
      </div>
    );

  // Redirect to login if not logged in
  if (!user) return <Navigate to="/admin/login" replace />;

  // Block access if user's role is not allowed
  if (!allowedRoles.includes(user.role)) {
    return <NotAuthorized />;
  }

  // Authorized: render the nested route
  return <Outlet />;
};

export default PrivateRoute;
