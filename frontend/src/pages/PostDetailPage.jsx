import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts"; // Assuming api setup

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPostById(id);
        setPost(res.data);
      } catch (err) {
        setError("Failed to load the post. Please try again later.");
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center p-16">Loading post...</div>;
  if (error) return <div className="text-center p-16 text-red-500">{error}</div>;
  if (!post) return null;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <article>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-slate-500 mb-8">
          Published on {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-xl mb-12 shadow-lg"
          />
        )}

        {/* Using prose for beautiful article typography from Tailwind */}
        <div className="prose prose-slate lg:prose-xl max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  );
}