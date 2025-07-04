import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Logo / Site name */}
        <Link to="/" className="text-2xl font-bold text-teal-400">
          MyBlog
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <Link to="/blogs" className="hover:text-teal-400">Blogs</Link>
          <Link to="/about" className="hover:text-teal-400">About</Link>
          <Link to="/contact" className="hover:text-teal-400">Contact Us</Link>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4 text-xl">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaTwitter />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}
