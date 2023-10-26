/* eslint-disable @typescript-eslint/quotes */
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const Root: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-light">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={classNames('container', { opacity: isOpen })}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
