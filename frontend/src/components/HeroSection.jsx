import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Discover Ideas, Stories & More
        </h1>
        <p className="text-gray-600 mb-8">
          Your daily dose of blogs on tech, lifestyle, coding, and inspiration.
        </p>
        <Link
          to="/blogs"
          className="px-6 py-3 rounded bg-teal-500 text-white hover:bg-teal-600 transition"
        >
          Browse Blogs
        </Link>
      </div>
    </section>
  );
}
