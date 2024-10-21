import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <header className="w-full h-16 bg-blue-500 text-white flex items-center justify-between px-10">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        {/* Button to toggle sidebar */}
        <button
          className="text-white bg-orange-500 px-4 py-2 rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          Toggle Menu
        </button>
      </header>
    </>
  );
};

export default Header;
