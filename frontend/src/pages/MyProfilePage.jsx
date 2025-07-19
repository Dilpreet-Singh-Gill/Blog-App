import React, { useEffect, useState } from "react";
import MyPostCard from "../components/MyPostCard";
import { getMyPosts, deletePost } from "../api/posts";

export default function MyProfilePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getMyPosts();
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deletePost(id);
        setPosts(posts.filter((p) => p._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl mb-6">My Profile</h1>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <MyPostCard key={post._id} post={post} onDelete={handleDelete} />
          ))
        ) : (
          <p>You have not created any posts yet.</p>
        )}
      </div>
    </div>
  );
}
