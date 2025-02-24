import React from "react";
import Header from "@/components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
