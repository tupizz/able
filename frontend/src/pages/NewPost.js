import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { get, post, put } from "../utils/api";

function NewPost() {
  const [postId, setPostId] = useState(null);

  // Form
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("web");

  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(search);
    const postId = queryParams.get("id") || null;
    if (postId) {
      setPostId(postId);
      get(`/api/posts/${postId}`).then((post) => {
        if (!post) {
          alert("Post id doesn't exist, check your URI.");
          window.location.replace("/");
          return;
        }
        setContent(post.content);
        setTitle(post.title);
        setCategory(post.category);
      });
    }
  }, [search]);

  const createPost = () => {
    return post("/api/posts", {
      content,
      title,
      category,
    })
      .then(() => history.push("/"))
      .catch((err) => {
        alert(err.message);
        console.log(err.status);
      });
  };

  const updatePost = () => {
    return put(`/api/posts/${postId}`, {
      content,
      title,
      category,
    })
      .then(() => history.push("/"))
      .catch((err) => {
        alert(err.message);
        console.log(err.status);
      });
  };

  const handleSubmit = async () => {
    if (postId) {
      return updatePost();
    } else {
      return createPost();
    }
  };

  return (
    <>
      <div className="col-md-12 mb-3">
        <label className="form-label">Title</label>

        <input
          className="form-control"
          value={title}
          onChange={(v) => setTitle(v.target.value)}
        />
      </div>

      <div className="col-md-12 mb-3">
        <label className="form-label">Category </label>
        <select
          className="form-control"
          value={category}
          onChange={(v) => setCategory(v.target.value)}
        >
          <option name="web">Web</option>
          <option name="mobile" value={"mobile"}>
            Mobile
          </option>
          <option name="network" value={"network"}>
            Network
          </option>
        </select>
      </div>

      <div className="col-md-12 mb-3">
        <MDEditor value={content} onChange={setContent} height={500} />
      </div>

      <button type="submit" onClick={handleSubmit}>
        {postId ? "Update" : "Create"}
      </button>
    </>
  );
}

export default NewPost;
