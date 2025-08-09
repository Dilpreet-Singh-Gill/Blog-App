import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function CreatePostPage() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/profile");
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center mb-6">Create New Post</h1>
      <PostForm
        initialData={{ title: "", content: "", imageUrl: "" }}
        onSuccess={handleSuccess}
        buttonText="Publish"
      />
    </div>
  );
}
