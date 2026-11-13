import { createContext, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";

// 1. Create the Context object
export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(getCookie("token") ? true : false);
  const [user, setUser] = useState(
    getCookie("token")
      ? { name: getCookie("name"), email: getCookie("email") }
      : null,
  );

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
