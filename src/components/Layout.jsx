import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div className="relative h-full">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
