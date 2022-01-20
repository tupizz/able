import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/api";
import { format } from "date-fns";

export default function Post() {
  const { category, title } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const slug = `${category}/${title}`;
    get(`/api/posts?slug=${encodeURIComponent(slug)}`).then(setBlogPost);
  }, [category, title]);

  return (
    <>
      {!blogPost && <div>Loading...</div>}

      {blogPost && (
        <div>
          <h1>{blogPost.title}</h1>
          <pre>
            Published at {format(new Date(blogPost.createdAt), "dd/MM/yyyy")}
          </pre>
          <MDEditor.Markdown source={blogPost.content} />
        </div>
      )}
    </>
  );
}
