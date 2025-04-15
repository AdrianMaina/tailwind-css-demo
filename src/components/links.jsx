import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Links() {
  return (
    <div>
    <div className="mt-10 ml-4 text-4xl text-cyan-400 ">
        <h1> Connect with me</h1>
    </div>
    
    <div className="flex gap-4 justify-center mt-6">
      {/* GitHub */}
      <a
        href="https://github.com/AdrianMaina"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-300 text-2xl transition-colors"
      >
        <FaGithub />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/_.kxngu._/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink hover:text-pink-300 text-2xl transition-colors"
      >
        <FaInstagram />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/adrian-maina-97092a353/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue hover:text-blue-300 text-2xl transition-colors"
      >
        <FaLinkedin />
      </a>
    </div>
    </div>
  );
}

export default Links;
