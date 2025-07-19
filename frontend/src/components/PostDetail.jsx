import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error loading post", err);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-h-96 object-cover rounded mb-6"
        />
      )}
      <p className="text-gray-700 text-lg whitespace-pre-line">{post.content}</p>
    </div>
  );
}
