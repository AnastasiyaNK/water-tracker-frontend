import React from "react";
import { Header } from "components";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default SharedLayout;
