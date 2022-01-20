import asyncHandler from "express-async-handler";
import Post from "../models/post.js";
import _ from "lodash";

const getPosts = asyncHandler(async (request, response) => {
  const { slug } = request.query;

  let result;
  if (slug) {
    result = await Post.findOne({ slug });
  } else {
    result = await Post.find().sort({ createdAt: -1 });
  }

  return response.json(result);
});

const updatePost = asyncHandler(async (request, response) => {
  const { postId } = request.params;
  const { title, content, category } = request.body;

  return Post.findByIdAndUpdate(postId, { title, content, category })
    .then((post) => {
      if (!post) throw new Error("not found");
      return response.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);
      return response.status(404).json();
    });
});

const getPost = asyncHandler(async (request, response) => {
  const { postId } = request.params;

  return Post.findById(postId)
    .then((post) => {
      if (!post) throw new Error("not found");
      return response.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);
      return response.status(404).json();
    });
});

const deletePost = asyncHandler(async (request, response) => {
  const { postId } = request.params;
  await Post.findByIdAndDelete(postId);
  return response.status(204).json();
});

const createPost = asyncHandler(async (request, response) => {
  const { title, content, category } = request.body;

  try {
    const createdPost = await Post.create({
      title,
      content,
      category,
      slug: `${category}/${_.kebabCase(title)}`,
    });

    return response.status(201).json(createdPost);
  } catch (error) {
    // Already exists slug
    if (error.code === 11000) {
      return response.status(409).json({
        message: "Already exists post with same slug, please fix it",
      });
    }

    throw error;
  }
});

export { getPosts, createPost, deletePost, getPost, updatePost };
