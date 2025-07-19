import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  console.log("URL ID:", id); // ✅ Check if id is valid

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);

        console.log("Fetched post:", res.data); // ✅ Check if data is coming
        setPost(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch post:", err);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center p-10">Loading post...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-[400px] object-cover mb-6 rounded"
        />
      )}
      <p className="text-lg text-gray-700 whitespace-pre-line">{post.content}</p>
    </div>
  );
}
