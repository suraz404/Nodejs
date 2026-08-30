import { useState, useEffect } from "react";
import DataContext from "./DataContext";

const UserContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", String(isLoggedIn));
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [isLoggedIn, user]);

  const value = {
    serverUrl,
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default UserContext;
