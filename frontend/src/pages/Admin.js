import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { del, get } from "../utils/api.js";

function Admin() {
  const [isFetching, setIsFetching] = useState(true);
  const [posts, setPosts] = useState([]);
  const historyRouter = useHistory();

  useEffect(() => {
    async function fetchPosts() {
      const posts = await get(`/api/posts`);

      setPosts(posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  const handleDeleteButton = async (id) => {
    await del(`/api/posts/${id}`);
    window.location.reload();
  };

  return (
    <main>
      <header>
        <h1>List of posts</h1>
      </header>
      <section>
        {isFetching ? "Fetching posts..." : `Loaded ${posts.length} posts.`}

        {posts && (
          <div className="row gx-2 gy-2">
            {posts.map((post) => (
              <div class="col-md-12" id={post._id}>
                <div className="card">
                  <div
                    class="card-body p-3"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div>
                        <b>{post.title}</b>
                      </div>
                      <div>
                        <span class="badge rounded-pill bg-primary">{post.category}</span>
                      </div>
                      <small>
                        Published at{" "}
                        {format(new Date(post.createdAt), "HH:mm dd/MM/yyyy")}
                      </small>
                    </div>

                    <div class="btn-group btn-group-sm" role="group">
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={() => historyRouter.push(`/${post.slug}`)}
                      >
                        👁 View
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={() => historyRouter.push(`/admin/post?id=${post._id}`)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={() => handleDeleteButton(post._id)}
                      >
                        🗑 Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Admin;
