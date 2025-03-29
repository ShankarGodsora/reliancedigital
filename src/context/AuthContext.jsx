import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const signup = (username, password) => {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup Successful!");
  };

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem("loggedInUser", username);
      setUser(username);
      alert("Login Successful!");
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
