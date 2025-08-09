// backend/controllers/postController.js
import Post from "../models/Post.js";
import { uploadStream } from "../config/cloudinary.js";

// CREATE POST
export const createPost = async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file && req.file.buffer) {
      const result = await uploadStream(req.file.buffer, "blog_posts");
      imageUrl = result.secure_url; // get Cloudinary URL
    }

    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user.id,
      imageUrl,  // Save Cloudinary URL here
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// GET ALL POSTS
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username").sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error("getAllPosts error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET LOGGED-IN USER'S POSTS
export const getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user.id }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error("getMyPosts error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET POST BY ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author", "username");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    console.error("getPostById error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE POST
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.author.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    if (req.file && req.file.buffer) {
      // upload new image and replace URL
      const result = await uploadStream(req.file.buffer, "blog_posts");
      post.imageUrl = result.secure_url;
    }

    const updated = await post.save();
    await updated.populate("author", "username");
    res.json(updated);
  } catch (err) {
    console.error("updatePost error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE POST
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    if (post.author.toString() !== req.user.id)
      return res.status(401).json({ message: "Not authorized" });

    await post.deleteOne();
    res.json({ message: "Post deleted" });
  } catch (err) {
    console.error("deletePost error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
