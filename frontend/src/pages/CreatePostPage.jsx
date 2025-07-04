import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function CreatePostPage() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    // Replace with API call
    console.log("Creating post:", data);
    // await api.createPost(data);
    navigate("/blogs");
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center mb-6">Create New Post</h1>
      <PostForm onSubmit={handleCreate} buttonText="Publish" />
    </div>
  );
}
