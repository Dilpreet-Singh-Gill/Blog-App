import React, { useEffect, useState } from "react";
import BlogGrid from "../components/BlogGrid";
import { getAllPosts } from "../api/posts";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getAllPosts();
        console.log("Fetched posts:", res.data); // ✅ Expect an array here
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err); // ❌ If HTML comes, it'll show here
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        All Blog Posts
      </h1>
      <BlogGrid posts={posts} />
    </div>
  );
}
