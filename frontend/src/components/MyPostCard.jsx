import React from "react";
import { Link } from "react-router-dom";

export default function MyPostCard({ post, onDelete }) {
  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{post.title}</h2>
        <p>{post.content}</p>
      </div>
      <div className="space-x-2">
        <Link
          to={`/edit/${post._id}`}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(post._id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
