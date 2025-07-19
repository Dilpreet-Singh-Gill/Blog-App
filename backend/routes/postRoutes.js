import express from "express";
import {
  createPost,
  getAllPosts,
  getMyPosts,
  getPostById,
  updatePost,
  deletePost
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";   // ✅ import auth

const router = express.Router();

router.post("/", auth, createPost);         // ✅ protected
router.get("/", getAllPosts);               // public
router.get("/mine", auth, getMyPosts);      // ✅ protected
router.get("/:id", getPostById);            // public
router.put("/:id", auth, updatePost);       // ✅ protected
router.delete("/:id", auth, deletePost);    // ✅ protected

export default router;
