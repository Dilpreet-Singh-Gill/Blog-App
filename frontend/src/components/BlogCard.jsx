import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">
        {post.title}
      </h2>
      <p className="text-gray-600 mb-4">
        {post.excerpt}
      </p>
      <Link
        to={`/posts/${post.id}`}
        className="inline-block mt-auto px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600 transition"
      >
        Read More
      </Link>
    </div>
  );
}
