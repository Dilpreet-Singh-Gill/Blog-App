import React, { useState, useEffect } from "react";

export default function PostForm({ initialData = {}, onSubmit, buttonText }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post Content"
        className="w-full border p-2 rounded h-40"
        required
      />
      <button
        type="submit"
        className="px-6 py-2 bg-teal-500 text-white rounded hover:bg-teal-400"
      >
        {buttonText}
      </button>
    </form>
  );
}
