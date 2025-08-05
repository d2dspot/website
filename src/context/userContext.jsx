import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from token on initial render
  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (accessToken && userData) {
      setUser({
        ...JSON.parse(userData),
        token: accessToken,
      });
    }

    setLoading(false);
  }, []);

  // Save user and token to state + localStorage
  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify({
      name: userData.name,
      email: userData.email,
      role: userData.role,
      profileImageUrl: userData.profileImageUrl,
    }));
    setLoading(false);
  };

  // Clear session
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
