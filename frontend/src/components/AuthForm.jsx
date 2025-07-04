import React from "react";
import { Link } from "react-router-dom";

export default function AuthForm({ type }) {
  return (
    <form className="w-full max-w-sm mx-auto space-y-6">
      <div>
        <label className="block text-left text-gray-700 mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-left text-gray-700 mb-2 font-medium">
          Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="********"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded transition"
      >
        {type === "signup" ? "Create Account" : "Login"}
      </button>

      <div className="text-center text-gray-600">
        {type === "signup" ? (
          <>
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 hover:underline">
              Login
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link to="/signup" className="text-teal-600 hover:underline">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
