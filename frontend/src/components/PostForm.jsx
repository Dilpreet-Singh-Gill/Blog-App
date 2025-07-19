import React, { useState, useEffect } from "react";

export default function PostForm({ initialData = {}, onSubmit, buttonText }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");  // for URL
  const [imageFile, setImageFile] = useState(null); // for uploaded file
  const [preview, setPreview] = useState(""); // combined preview

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
      setImage(initialData.image || "");
    }
  }, [initialData]);

  // Whenever image URL changes and no file selected, update preview
  useEffect(() => {
    if (!imageFile) {
      setPreview(image);
    }
  }, [image, imageFile]);

  // When user selects a file, create a preview URL
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pass both the file and the URL to parent
    onSubmit({ title, content, imageUrl: image, imageFile });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 space-y-4 bg-white shadow rounded"
    >
      <div>
        <label className="block mb-1 font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here..."
          className="w-full border p-2 rounded h-40 focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
            setImageFile(null);  // clear file if they change URL
          }}
          placeholder="https://example.com/image.jpg"
          className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Or Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {preview && (
        <div>
          <p className="font-semibold mb-1">Image Preview:</p>
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-64 object-cover rounded border"
          />
        </div>
      )}

      <button
        type="submit"
        className="w-full py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-400 transition"
      >
        {buttonText}
      </button>
    </form>
  );
}
