import { createContext, useContext, useState } from "react";
import { getCookie } from "../utils/cookies";

// 1. Create the Context object
export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(getCookie("token") ? true : false);

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
