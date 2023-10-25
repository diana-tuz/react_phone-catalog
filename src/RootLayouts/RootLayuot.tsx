/* eslint-disable @typescript-eslint/quotes */
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Root: React.FC = () => {
  return (
    <div className="bg-light">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
