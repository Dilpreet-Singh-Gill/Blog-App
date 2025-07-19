import React from "react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  console.log("BlogGrid posts:", posts);

  if (!Array.isArray(posts)) {
    return <div className="text-red-600">Error: Posts is not an array</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(post => (
        <BlogCard key={post._id || post.id} post={post} />
      ))}
    </div>
  );
}
