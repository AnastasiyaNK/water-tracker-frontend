import React from "react";
import { Header } from "components";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default SharedLayout;
