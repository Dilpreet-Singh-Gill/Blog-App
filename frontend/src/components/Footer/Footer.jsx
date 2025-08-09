import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com/" },
    { icon: <FaGithub />, href: "https://github.com/" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          {/* Logo and Tagline */}
          <div>
            <Link to="/" className="text-3xl font-bold text-white">MyBlog</Link>
            <p className="mt-2 text-sm">Ideas, stories, and insights for developers.</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-emerald-400 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-10 pt-8 border-t border-slate-800 text-center text-sm">
          <p>© {new Date().getFullYear()} MyBlog. All Rights Reserved. Built with ❤️ and React.</p>
        </div>
      </div>
    </footer>
  );
}