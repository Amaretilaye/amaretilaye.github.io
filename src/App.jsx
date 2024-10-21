import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import About from "./components/About"; // Import the About component
import Projects from "./components/Projects"; // Import the Projects component
import { FaBars } from "react-icons/fa"; // Importing the FaBars icon
import Contact from "./components/Contact";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero"); // State to track current section

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section); // Change current section based on clicked link
    setSidebarOpen(false); // Close the sidebar
  };

  return (
    <div className="relative">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onSectionChange={handleSectionChange} // Pass down the section change handler
      />

      {/* Toggle Icon */}
      {!isSidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 bg-orange-500 text-white p-3 rounded-md focus:outline-none"
          onClick={toggleSidebar}
        >
          <FaBars size={24} /> {/* Using the FaBars icon */}
        </button>
      )}

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "" : "ml-0" // Adjust margin based on sidebar state
        }`}
      >
        {/* Conditionally render content based on currentSection */}
        {currentSection === "hero" && (
          <HeroSection isSidebarOpen={isSidebarOpen} />
        )}
        {currentSection === "about" && <About isSidebarOpen={isSidebarOpen} />}
        {currentSection === "contact" && (
          <Contact isSidebarOpen={isSidebarOpen} />
        )}
        {currentSection === "projects" && (
          <Projects isSidebarOpen={isSidebarOpen} />
        )}
        {/* Add more sections as needed */}
      </main>
    </div>
  );
}

export default App;
