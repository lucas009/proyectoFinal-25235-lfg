import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const AUTH_KEY = "isAuth";

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem(AUTH_KEY);
    if (savedAuth === "true") {
      setIsAuth(true);
    }
  }, []);

  const login = () => {
    setIsAuth(true);
    localStorage.setItem(AUTH_KEY, "true");
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem(AUTH_KEY, "false");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
