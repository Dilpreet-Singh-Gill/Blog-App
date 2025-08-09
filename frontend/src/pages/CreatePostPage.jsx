import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { createPost } from "../api/posts";

export default function CreatePostPage() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      // data = { title, content, image } as returned by PostForm
      await createPost(data);
      navigate("/profile");  // or navigate("/") or wherever you show posts
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center mb-6">Create New Post</h1>
      <PostForm
        initialData={{ title: "", content: "", image: "" }}
        onSuccess={handleCreate}
        buttonText="Publish"
      />
    </div>
  );
}
