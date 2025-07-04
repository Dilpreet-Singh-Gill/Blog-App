import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post data by ID
    const fetchPost = async () => {
      // const res = await api.getPostById(id);
      const res = { id, title: "Sample Title", content: "Sample content." };
      setPost(res);
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async (data) => {
    console.log("Updating post:", data);
    // await api.updatePost(id, data);
    navigate("/profile");
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center mb-6">Edit Post</h1>
      {post ? (
        <PostForm initialData={post} onSubmit={handleUpdate} buttonText="Update" />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}
