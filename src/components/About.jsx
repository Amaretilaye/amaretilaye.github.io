import React from "react";
import { FaPython, FaReact } from "react-icons/fa"; // Importing icons for skills

const About = ({ isSidebarOpen }) => {
  return (
    <div
      className={`text-center py-20 px-6 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "ml-72" : "ml-0"
      } bg-gradient-to-b from-black to-orange-600`}
    >
      <h2 className="text-4xl font-extrabold mb-8 animate-bounce text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
        About Me
      </h2>
      <p className="max-w-3xl mx-auto text-lg mb-6 animate-fadeIn text-gray-300 leading-relaxed">
        Hello! I'm{" "}
        <span className="font-bold text-orange-400">Amare Tilaye</span>, A
        Passionate Software Developer with expertise in creating dynamic web
        applications and user-friendly interfaces. Below are my core skills:
      </p>

      {/* Skills Section */}
      <div className="flex flex-wrap justify-center items-start space-x-10 mt-10">
        {/* Odoo Skill */}
        <div className="bg-gradient-to-b from-transparent to-black p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 max-w-xs">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-2xl font-semibold text-purple-700 ">
                <h1 className="text-start font-bold text-4xl">
                  {" "}
                  o<span className="text-gray-100">doo</span>
                </h1>
                <strong>Odoo</strong>
              </h3>
              <p className="text-gray-100">
                As an expert in Odoo ERP implementation and customization, I
                focus on streamlining business processes and enhancing
                productivity. My skills include configuring modules, developing
                custom applications, and integrating Odoo with other systems. I
                have a strong understanding of Odoo's architecture, which allows
                me to tailor solutions to meet specific business needs. With
                experience in both technical and functional aspects, I ensure
                that Odoo solutions are aligned with organizational goals,
                providing training and support to end-users for optimal
                utilization of the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Django Skill */}
        <div className="bg-gradient-to-b from-transparent  shadow-lg to-black p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 max-w-xs">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-2xl font-semibold text-green-900">
                <FaPython size={40} className="text-white " />{" "}
                <strong>Django</strong>
              </h3>
              <p className="text-gray-100">
                I am proficient in Django for building robust web applications,
                focusing on security, scalability, and performance. My expertise
                includes utilizing Django's ORM for database management,
                creating RESTful APIs, and implementing user authentication and
                authorization. I prioritize writing clean and maintainable code,
                and I leverage Django's powerful features such as middleware and
                custom management commands to enhance functionality. With
                experience in deploying Django applications on various
                platforms.
              </p>
            </div>
          </div>
        </div>

        {/* React Skill */}
        <div className="bg-gradient-to-b from-transparent to-black p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 max-w-xs">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-2xl font-semibold text-blue-600">
                <FaReact size={40} className="text-white" />
                <strong>React</strong>
              </h3>
              <p className="text-gray-100">
                Skilled in React for creating interactive user interfaces and
                seamless single-page applications, I employ modern practices
                such as component-based architecture, state management with
                hooks, and React Router for navigation. My approach focuses on
                building responsive designs that ensure a great user experience
                across devices. I utilize libraries like Redux for state
                management and Axios for API integration, ensuring that
                applications are efficient and maintainable. I stay updated with
                the latest React features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
