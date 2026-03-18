import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = ({ setSearchMedicine }) => {
  return (
    <>
      <Header setSearchMedicine={setSearchMedicine} />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
