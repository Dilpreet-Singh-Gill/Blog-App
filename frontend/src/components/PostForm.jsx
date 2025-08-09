import React, { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import axios from "axios";

export default function PostForm({ initialData = {}, onSuccess, buttonText = "Save", loading = false }) {
  const [postData, setPostData] = useState({ title: "", content: "" });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setPostData({
        title: initialData.title || "",
        content: initialData.content || ""
      });
      setPreview(initialData.image || "");
    }
  }, [initialData]);

  const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File size exceeds 5MB.");
        return;
      }
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", postData.title);
      formData.append("content", postData.content);
      if (imageFile) formData.append("image", imageFile);

      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to create a post.");
        setSubmitting(false);
        return;
      }

      const res = await axios.post("http://localhost:5000/api/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      });

      if (onSuccess) onSuccess(res.data);
      setPostData({ title: "", content: "" });
      setImageFile(null);
      setPreview("");
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 space-y-6 bg-white shadow-lg rounded-xl">
      {/* Title Input */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Title</label>
        <input
          name="title"
          value={postData.title}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
      </div>

      {/* Content Input */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Content</label>
        <textarea
          name="content"
          value={postData.content}
          onChange={handleChange}
          rows="8"
          className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          required
        />
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Cover Image</label>
        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <FiUploadCloud className="mx-auto h-12 w-12 text-slate-400" />
            <div className="flex text-sm text-slate-600">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-emerald-600 hover:text-emerald-500">
                <span>Upload a file</span>
                <input id="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-slate-500">PNG, JPG, GIF up to 5MB</p>
          </div>
        </div>
      </div>

      {/* Image Preview */}
      {preview && (
        <div>
          <p className="font-semibold text-slate-700 mb-2">Image Preview:</p>
          <img src={preview} alt="preview" className="w-full max-h-80 object-cover rounded-lg border border-slate-200" />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting || loading}
        className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        {submitting ? "Saving..." : buttonText}
      </button>
    </form>
  );
}
