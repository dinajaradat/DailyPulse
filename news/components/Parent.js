import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export const Parent = ({ children, isHome }) => {
  return (
    <>
      <Header isHome={isHome} />
      {children}
      <Footer />
    </>
  );
};
