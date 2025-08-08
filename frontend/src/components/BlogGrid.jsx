import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-semibold text-slate-700">No Posts Found</h3>
        <p className="text-slate-500 mt-2">Check back later for new articles!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <BlogCard key={post._id || post.id} post={post} />
      ))}
    </div>
  );
}