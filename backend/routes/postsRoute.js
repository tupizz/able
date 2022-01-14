import { getPosts, createPost } from '../controllers/postsController.js';
import express from 'express';

const router = express.Router();

router.route('/').get(getPosts);

export default router;