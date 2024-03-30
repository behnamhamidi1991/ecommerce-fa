import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>

      {/* Footer */}
    </div>
  );
};

export default AppLayout;
