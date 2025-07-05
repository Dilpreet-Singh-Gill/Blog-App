import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios"; // import your configured axios instance

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // only used on signup
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = type === "signup"
      ? { username, email, password }
      : { email, password };

    const endpoint = type === "signup"
      ? "/auth/register"
      : "/auth/login";

    try {
      const res = await api.post(endpoint, payload);
      const data = res.data;

      // Save JWT token (your backend sends it on login; on signup you might also auto-login)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto space-y-6">
      {type === "signup" && (
        <div>
          <label className="block text-left text-gray-700 mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="John Doe"
            required
          />
        </div>
      )}

      <div>
        <label className="block text-left text-gray-700 mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="********"
          required
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}

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
