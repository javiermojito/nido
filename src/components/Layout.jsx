import React from "react";
import Header from "../components/Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
