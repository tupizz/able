import asyncHandler from 'express-async-handler';

const getPosts = asyncHandler(async(request, response) => {
  const posts = [];
  response.json(posts)
});

const createPost = asyncHandler(async(request, response) => {});

export {
  getPosts,
  createPost
};
