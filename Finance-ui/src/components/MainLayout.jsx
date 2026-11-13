import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex">
        <Sidebar />
        <section className="w-full py-2 px-5">{children}</section>
      </main>
      <Footer />
    </>
  );
};
