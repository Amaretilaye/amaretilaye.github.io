import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHome,
} from "react-icons/fa";
import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa"; // Import icons for the menu

const Sidebar = ({ isSidebarOpen, toggleSidebar, onSectionChange }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-r from-black via-gray-800 to-orange-500 text-white z-50
        transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out`} // Sidebar slide-in effect
    >
      {/* Sidebar Content */}
      <div className="flex flex-col items-center mt-20 space-y-6">
        {/* Close Button */}
        {isSidebarOpen && (
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        )}

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4 w-full px-4">
          <a
            href="#hero"
            onClick={() => onSectionChange("hero")}
            className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md hover:from-orange-500 hover:to-orange-700 transition duration-300"
          >
            <FaHome size={20} /> {/* Home icon */}
            <span>Home</span>
          </a>
          <a
            href="#about"
            onClick={() => onSectionChange("about")} // Change the section on click
            className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md hover:from-orange-500 hover:to-orange-700 transition duration-300"
          >
            <FaUser size={20} />
            <span>About</span>
          </a>
          <a
            href="#projects"
            onClick={() => onSectionChange("projects")} // Change the section on click
            className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md hover:from-orange-500 hover:to-orange-700 transition duration-300"
          >
            <FaBriefcase size={20} />
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            onClick={() => onSectionChange("contact")} // Change the section on click
            className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md hover:from-orange-500 hover:to-orange-700 transition duration-300"
          >
            <FaEnvelope size={20} />
            <span>Contact</span>
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          {/* <a href="https://facebook.com" className="hover:text-orange-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-orange-300">
            <FaTwitter size={24} />
          </a> */}
          <a
            href="www.linkedin.com/in/amare-tilaye-768984299"
            className=" text-blue-700 hover:text-orange-300"
          >
            <FaLinkedinIn size={34} />
          </a>
          <a
            href="https://github.com/Amaretilaye"
            className=" text-gray-100 hover:text-orange-300"
          >
            <FaGithub size={34} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
