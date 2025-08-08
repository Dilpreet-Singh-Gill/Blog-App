import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios"; // Assuming api setup

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const isSignup = type === "signup";
    const payload = isSignup
      ? { username: formData.username, email: formData.email, password: formData.password }
      : { email: formData.email, password: formData.password };
    const endpoint = isSignup ? "/auth/register" : "/auth/login";

    try {
      const res = await api.post(endpoint, payload);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      navigate("/profile"); // Navigate to profile after success
    } catch (err) {
      setError(err.response?.data?.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const title = type === "signup" ? "Create Your Account" : "Welcome Back";
  const subtitle = type === "signup"
    ? "Join our community of developers."
    : "Login to continue your journey.";

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 text-center">{title}</h2>
      <p className="text-center text-slate-500 mt-2 mb-8">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {type === "signup" && (
          <div>
            <label className="text-sm font-medium text-slate-600">Username</label>
            <input
              type="text" name="username" value={formData.username} onChange={handleChange}
              className="w-full mt-1 border border-slate-300 rounded-lg px-4 py-3 custom-focus-ring"
              required
            />
          </div>
        )}
        <div>
          <label className="text-sm font-medium text-slate-600">Email</label>
          <input
            type="email" name="email" value={formData.email} onChange={handleChange}
            className="w-full mt-1 border border-slate-300 rounded-lg px-4 py-3 custom-focus-ring"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Password</label>
          <input
            type="password" name="password" value={formData.password} onChange={handleChange}
            className="w-full mt-1 border border-slate-300 rounded-lg px-4 py-3 custom-focus-ring"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button type="submit" disabled={loading}
          className="w-full bg-emerald-500 text-white font-semibold py-3 rounded-lg hover:bg-emerald-600 transition disabled:bg-emerald-300">
          {loading ? "Processing..." : (type === "signup" ? "Create Account" : "Login")}
        </button>
      </form>

      <div className="text-center text-sm text-slate-600 mt-6">
        {type === 'signup' ? "Already have an account? " : "Don't have an account? "}
        <Link to={type === 'signup' ? "/login" : "/signup"} className="font-semibold text-emerald-600 hover:underline">
          {type === 'signup' ? 'Login' : 'Sign Up'}
        </Link>
      </div>
    </div>
  );
}