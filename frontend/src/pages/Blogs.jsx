import React from "react";
import BlogGrid from "../components/BlogGrid";

export default function Blogs() {
  const allPosts = [
    { id: 1, title: "Understanding React Hooks", excerpt: "Hooks let you use state and lifecycle..." },
    { id: 2, title: "JWT Authentication", excerpt: "Secure your APIs with JSON Web Tokens..." },
    { id: 3, title: "Tailwind CSS Tips", excerpt: "Build beautiful UIs quickly..." },
    { id: 4, title: "Express + MongoDB", excerpt: "RESTful APIs step by step..." },
    { id: 5, title: "Dark Mode in React", excerpt: "Toggle themes easily with context..." },
    { id: 6, title: "TypeScript for Beginners", excerpt: "Static typing in JavaScript..." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        All Blog Posts
      </h1>
      <BlogGrid posts={allPosts} />
    </div>
  );
}
