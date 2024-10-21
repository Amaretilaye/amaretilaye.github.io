import React, { useEffect, useState } from "react";
import profileImage from "../assets/Profile.jpg"; // Correct path based on your structure
import { FaDownload } from "react-icons/fa"; // Font Awesome Icon for download
import AMARE_TILAYE from "../assets/AMARE_TILAYE.pdf";

// Define skills with words and respective colors
const skills = [
  {
    words: [
      { text: "Odoo", color: "text-purple-500" },
      { text: "Developer", color: "text-white" },
    ],
  },
  {
    words: [
      { text: "Django", color: "text-green-800" },
      { text: "Developer", color: "text-white" },
    ],
  },
  {
    words: [
      { text: "React", color: "text-blue-800" },
      { text: "Developer", color: "text-white" },
    ],
  },
  {
    words: [
      { text: "Functional ", color: "text-yellow-500" },
      { text: "Consultant", color: "text-white" },
    ],
  },
];

const HeroSection = ({ isSidebarOpen }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [fade, setFade] = useState(true); // For fade animation

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) =>
          prevIndex === skills.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true); // Start fade in
      }, 500); // Time to wait before changing skill
    }, 3000); // Change skill every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`h-screen bg-gradient-to-r from-black via-orange-700 to-black text-white transition-all duration-300 ease-in-out 
      ${isSidebarOpen ? "ml-72" : "ml-0"} 
      ${isSidebarOpen ? "overflow-hidden" : "overflow-visible"}`}
    >
      <div className="text-center flex flex-col items-center justify-center h-full px-4">
        {/* Profile Image */}
        <div className="w-60 h-30 mx-auto rounded-full overflow-hidden border-4 border-orange-500">
          <img
            src={profileImage} // Replace with your image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Your Name */}
        <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Amare{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            Tilaye
          </span>
        </h1>

        {/* Displaying Skills with Color and Individual Word Animation */}
        <div className="flex justify-center mt-2">
          {skills[currentSkillIndex].words.map((word, index) => (
            <span
              key={index}
              className={`font-bold text-6xl transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`, // Delays each word based on its index
              }}
            >
              <span className={word.color}>{word.text}</span>
              {/* Add space between words */}
              {index < skills[currentSkillIndex].words.length - 1 && (
                <span className="text-transparent"> &nbsp; </span>
              )}
            </span>
          ))}
        </div>

        {/* Resume Download Button */}
        <a
          href={AMARE_TILAYE} // Replace with the actual path to your resume
          download
          className="mt-6 inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition-transform duration-300"
        >
          <FaDownload className="mr-2 animate-bounce" />{" "}
          {/* Bouncing download icon */}
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
