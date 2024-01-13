"use client";
import Footer from "@/features/shared/footer";
import Nav from "@/features/shared/nav";
import React from "react";

interface LatoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LatoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
