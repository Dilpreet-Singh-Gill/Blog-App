import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiSearch } from "react-icons/fi";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // 👇 TEMP: replace with your Auth Context or localStorage token check
  const isLoggedIn = localStorage.getItem("token");

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className={`w-full p-4 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center space-x-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyBlog
        </Link>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
            className="bg-transparent outline-none w-full"
          />
          <button type="submit">
            <FiSearch className="text-xl text-gray-600" />
          </button>
        </form>

        {/* Navigation */}
        <nav className="flex space-x-6 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-teal-500" : "hover:text-teal-600"}>
            Home
          </NavLink>
          <NavLink to="/blogs" className={({ isActive }) => isActive ? "font-semibold text-teal-500" : "hover:text-teal-600"}>
            Blogs
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "font-semibold text-teal-500" : "hover:text-teal-600"}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "font-semibold text-teal-500" : "hover:text-teal-600"}>
            Contact Us
          </NavLink>
        </nav>

        {/* Theme toggle & auth */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme}>
            {darkMode ? <FiSun className="text-2xl" /> : <FiMoon className="text-2xl" />}
          </button>

          {isLoggedIn ? (
            <>
              <Link to="/create" className="px-4 py-1 rounded-full bg-teal-500 text-white hover:bg-teal-400 transition">
                Create Post
              </Link>
              <Link to="/profile" className="px-4 py-1 rounded-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition">
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-1 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-1 rounded-full bg-teal-500 text-white hover:bg-teal-400 transition">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-1 rounded-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
