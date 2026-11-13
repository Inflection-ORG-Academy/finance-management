import React from "react";
import { NavLink } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import { deleteCookie } from "../utils/cookies";

const Sidebar = () => {
  const { setIsLogin, setUser } = useAuthContext();

  const logout = () => {
    deleteCookie("token");
    deleteCookie("name");
    deleteCookie("email");
    setIsLogin(false);
    setUser(null);
    window.location.reload();
  };

  return (
    <div className="min-h-[80vh] sticky top-16 shadow max-w-3xs w-3xs bg-neutral-100">
      <div className="flex flex-col h-[80vh]">
        <div className="flex flex-col gap-1">
          <NavLink to="/" className="py-2 px-2 rounded hover:bg-neutral-50">
            Dashboard
          </NavLink>

          <NavLink
            to="/expenses"
            className="py-2 px-2 rounded hover:bg-neutral-50"
          >
            Expenses
          </NavLink>
        </div>

        {/* Logout at bottom */}
        <div className="mt-auto pb-3">
          <button
            onClick={logout}
            className="w-full text-left py-2 px-2 rounded text-red-600 transition hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
