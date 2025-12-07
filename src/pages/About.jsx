import React from "react";

export default function About() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {/* <img src="../../public/profile.png" alt="" /> */}
            BM
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 leading-relaxed">
            I am a passionate Full-Stack | React,Next.js Developer dedicated to
            building clean, functional, and user-centric web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* My Background */}
          {/* <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 inline-block">
              My Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I specialize in React and modern CSS frameworks like Tailwind. My
              goal is to transform complex ideas into simple and beautiful
              digital solutions.
            </p>
          </div> */}

          {/* Contact Information Section */}
          {/* <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block">
              Contact Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <span className="font-bold text-blue-600">Phone:</span>
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <span className="font-bold text-blue-600">Email:</span>
                <span>yourname@example.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <span className="font-bold text-blue-600">Location:</span>
                <span>City, Country</span>
              </li>
              <li className="pt-4 flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-2">
            Interested in working together?
          </h3>
          <p className="mb-6 opacity-90">
            I'm currently available for freelance work and new opportunities.
          </p>
          <a
            href="mailto:yourname@example.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-md"
          >
            Send Me a Message
          </a>
        </div> */}
      </div>
    </div>
  );
}
