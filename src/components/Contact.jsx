import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-orange-700 to-black flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-black bg-opacity-70 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Email:</h2>
            <p className="text-lg">amareilaye1999@gmail.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phone:</h2>
            <p className="text-lg">0920365717</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Address:</h2>
            <p className="text-lg">Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
