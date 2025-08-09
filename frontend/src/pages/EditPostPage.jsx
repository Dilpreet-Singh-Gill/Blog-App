import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { getPostById } from "../api/posts";

export default function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPostById(id);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

  const handleSuccess = () => {
    navigate("/profile");
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl text-center mb-6">Edit Post</h1>
      {post ? (
        <PostForm
          initialData={post}
          onSuccess={handleSuccess}
          buttonText="Update"
        />
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}
