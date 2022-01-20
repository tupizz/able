import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.route("/").get(getPosts);
router.route("/:postId").get(getPost);
router.route("/:postId").put(updatePost);
router.route("/").post(createPost);
router.route("/:postId").delete(deletePost);

export default router;
