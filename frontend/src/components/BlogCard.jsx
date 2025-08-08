import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  // 🎨 Use a placeholder image if the post doesn't have one
  const imageUrl = post.image || "https://source.unsplash.com/random/400x250/?technology,code";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
      <Link to={`/posts/${post._id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-slate-600 text-sm mb-4 line-clamp-3">
            {post.excerpt || post.content}
          </p>
          <span className="font-semibold text-emerald-500 text-sm">
            Read More →
          </span>
        </div>
      </Link>
    </div>
  );
}