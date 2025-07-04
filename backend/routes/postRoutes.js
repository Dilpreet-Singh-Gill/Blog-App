import express from "express";
import {
  createPost,
  getAllPosts,
  getMyPosts,
  updatePost,
  deletePost
} from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/my-posts", auth, getMyPosts);
router.post("/", auth, createPost);
router.put("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
