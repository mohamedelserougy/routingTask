import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div style={{ paddingTop: "60px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
