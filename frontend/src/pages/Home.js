import { format } from "date-fns";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { get } from "../utils/api.js";

function Home() {
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

  return (
    <main>
      <header>
        <h1>My blog</h1>
      </header>
      <section>
        {isFetching ? "Fetching posts..." : `Loaded ${posts.length} posts.`}
        {posts && (
          <div className="row gx-2 gy-2">
            {posts.map((post) => (
              <div class="col-md-6" id={post._id}>
                <div
                  className="card"
                  style={{ cursor: "pointer" }}
                  onClick={() => historyRouter.push(`/${post.slug}`)}
                >
                  <div class="card-body p-3">
                    <div>
                      <b>{post.title}</b>
                    </div>
                    <small>
                      Published at {format(new Date(post.createdAt), "HH:mm dd/MM/yyyy")}
                    </small>
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

export default Home;
