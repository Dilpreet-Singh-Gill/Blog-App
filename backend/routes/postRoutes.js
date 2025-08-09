// backend/routes/postRoutes.js
import express from "express";
import {
  createPost,
  getAllPosts,
  getMyPosts,
  getPostById,
  updatePost,
  deletePost
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";
import upload from "../middleware/uploadMemory.js"; // Multer memory storage

const router = express.Router();

// Create post with image upload to Cloudinary
router.post("/", auth, upload.single("image"), createPost);

// Get all posts
router.get("/", getAllPosts);

// Get posts of logged-in user
router.get("/mine", auth, getMyPosts);

// Get single post by ID
router.get("/:id", getPostById);

// Update post (image upload optional)
router.put("/:id", auth, upload.single("image"), updatePost);

// Delete post
router.delete("/:id", auth, deletePost);

export default router;
