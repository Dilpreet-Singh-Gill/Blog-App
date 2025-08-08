import React, { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";
import { getAllPosts } from "../api/posts"; // Assuming api setup

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getAllPosts();
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900">All Blog Posts</h1>
        <p className="mt-2 text-lg text-slate-600">Explore articles on web development, design, and more.</p>
      </div>
      {loading ? (
        <div className="text-center text-slate-500">Loading articles...</div>
      ) : (
        <BlogGrid posts={posts} />
      )}
    </div>
  );
}