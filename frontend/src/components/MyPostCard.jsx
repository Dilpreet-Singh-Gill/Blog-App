import React from "react";
import { Link } from "react-router-dom";

export default function MyPostCard({ post, onDelete }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4 line-clamp-2">{post.content}</p>
      <div className="flex space-x-4">
        <Link
          to={`/edit/${post.id}`}
          className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-400"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
