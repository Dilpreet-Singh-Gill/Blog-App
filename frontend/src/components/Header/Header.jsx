import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSun, FiMoon, FiSearch } from "react-icons/fi";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false); // Dark mode logic remains
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // TEMP: replace with your Auth Context or localStorage token check
  const isLoggedIn = !!localStorage.getItem("token");

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 🎨 STYLE: Base classes for navigation links
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-emerald-500"
      : "hover:text-emerald-500 transition-colors duration-300";

  return (
    <header className="w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-slate-800 tracking-tighter">
          MyBlog
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>

        {/* Search & Auth */}
        <div className="flex items-center space-x-4">
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-slate-100 rounded-full pl-10 pr-4 py-2 w-48 focus:w-56 transition-all duration-300 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </form>

          {/* Theme & Auth buttons */}
          {isLoggedIn ? (
            <>
              <Link to="/create" className="px-4 py-2 text-sm font-semibold rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300">
                Create
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-500 transition-colors duration-300">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 text-sm font-semibold rounded-full bg-slate-800 text-white hover:bg-slate-900 transition-all duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}