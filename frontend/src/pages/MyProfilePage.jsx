import React, { useEffect, useState } from "react";
import MyPostCard from "../components/MyPostCard";

export default function MyProfilePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch user's posts
    const fetchPosts = async () => {
      // const res = await api.getMyPosts();
      const res = [
        { id: "1", title: "My First Post", content: "Some content..." },
        { id: "2", title: "Another Post", content: "More content..." },
      ];
      setPosts(res);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      console.log("Deleting", id);
      // await api.deletePost(id);
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl mb-6">My Profile</h1>
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <MyPostCard key={post.id} post={post} onDelete={handleDelete} />
          ))
        ) : (
          <p>You have not created any posts yet.</p>
        )}
      </div>
    </div>
  );
}
