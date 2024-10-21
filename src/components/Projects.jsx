import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import overtimeImage from "../assets/over time calculator.jpg";
import transferImage from "../assets/Transfer.jpg";
import prpImage from "../assets/prp.jpg";
import dbImage from "../assets/db.jpg";
import ecImage from "../assets/ec.jpg";
import hlImage from "../assets/hl.jpg";

const Projects = ({ isSidebarOpen }) => {
  const projects = [
    {
      title: "Custom Project Report ",
      description:
        "A comprehensive Odoo ERP  for Project management Custom Report.",
      image: prpImage, // Replace with your image path
      githubLink: "https://github.com/Amaretilaye/Custom-Project-Report-.git",
    },
    {
      title: "Transfer Request",
      description:
        "An application for managing stock transfer requests efficiently.",
      image: transferImage, // Replace with your image path
      githubLink: "https://github.com/Amaretilaye/Transfer-Request.git",
    },
    {
      title: "Overtime Calculator",
      description:
        "A web tool for calculating overtime pay based on user inputs.",
      image: overtimeImage,
      githubLink: "https://github.com/Amaretilaye/Employee-Overtime.git",
    },
    {
      title: "Deponing Manufacturing ",
      description: "Deponing Accuracy for Chicken and Meat Stock Valuation",
      image: dbImage, // Replace with your image path
      githubLink: "https://github.com/Amaretilaye/Deboning-odoo.git",
    },
    {
      title: "Multi Vendor Website(Private Repository ASK For Visit)",
      description:
        "A multi-vendor e-commerce platform built with Django and React.",
      image: ecImage, // Replace with your image path
      githubLink: "https://github.com/Amaretilaye/Django-React-Ecommerce.git",
    },

    {
      title: "Helpdesk Escalator",
      description:
        "Helpdesk Escalator is a powerful tool designed to streamline the customer support process ",
      image: hlImage, // Replace with your image path
      githubLink: "https://github.com/Amaretilaye/Help-Desk-Escalation-.git",
    },
  ];

  return (
    <div
      className={`text-center py-20 px-6 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "ml-72" : "ml-0"
      } bg-gradient-to-b from-black to-orange-600`}
    >
      <h2 className="text-4xl font-extrabold mb-8 animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
        My Project
      </h2>
      <p className="max-w-2xl mx-auto text-lg mb-4 text-gray-200">
        {" "}
        {/* Changed to a lighter gray */}
        Here are some of the projects I've worked on:
      </p>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative p-4 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 bg-gradient-to-br from-gray-800 via-gray-900 to-black"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
            />

            {/* Overlay Animation (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-opacity duration-500"></div>

            {/* Project Info */}
            <div className="p-4 relative z-10">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-2">{project.description}</p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-400 text-lg hover:text-blue-400 transition-colors duration-300"
              >
                <FaGithub className="mr-1" /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
