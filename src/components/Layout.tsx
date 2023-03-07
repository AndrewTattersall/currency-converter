import React from "react";
import "../index.css";
import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className="main">
      <div className="form-container">
        <Header content="Currency Converter 💰" />
        {children}
      </div>
    </div>
  );
};

export default Layout;
