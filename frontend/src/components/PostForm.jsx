import React, { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function PostForm({ initialData = {}, onSubmit, buttonText, loading }) {
  const [postData, setPostData] = useState({ title: "", content: "", image: "" });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (initialData) {
      setPostData({
        title: initialData.title || "",
        content: initialData.content || "",
        image: initialData.image || "",
      });
      setPreview(initialData.image || "");
    }
  }, [initialData]);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...postData, imageFile });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-8 space-y-6 bg-white shadow-lg rounded-xl">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-1">Title</label>
        <input type="text" id="title" name="title" value={postData.title} onChange={handleChange}
          className="w-full border border-slate-300 rounded-lg px-4 py-2 custom-focus-ring" required />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-1">Content</label>
        <textarea id="content" name="content" value={postData.content} onChange={handleChange}
          rows="10" className="w-full border border-slate-300 rounded-lg px-4 py-2 custom-focus-ring" required />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1">Cover Image</label>
        <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-lg">
          <div className="space-y-1 text-center">
            <FiUploadCloud className="mx-auto h-12 w-12 text-slate-400" />
            <div className="flex text-sm text-slate-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/*" />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      {preview && (
        <div>
          <p className="font-semibold text-slate-700 mb-2">Image Preview:</p>
          <img src={preview} alt="Preview" className="w-full max-h-80 object-cover rounded-lg border border-slate-200" />
        </div>
      )}

      <button type="submit" disabled={loading}
        className="w-full py-3 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors disabled:bg-emerald-300">
        {loading ? "Saving..." : buttonText}
      </button>
    </form>
  );
}