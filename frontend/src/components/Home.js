import { useState, useEffect } from 'react';
import { get } from '../utils/api.js';

function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await get('/api/posts');

      setPosts(posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  return <main>
    <header>
      <h1>My blog</h1>
    </header>
    <section>
      {isFetching ? "Fetching posts..." : `Loaded ${posts.length} posts.`}
    </section>
  </main>;
}

export default Home;