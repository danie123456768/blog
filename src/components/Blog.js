import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Blog Page</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              width: "30%",
              borderRadius: "8px",
            }}
          >
            <img
              src={`https://tse2.mm.bing.net/th/id/OIP.NPStrZmfEsUrHfR8BJralQHaE8?pid=Api&P=0&h=180=${post.id}`}
              alt="Post"
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h3>
              <Link to={`/blog/detail/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.body.substring(0, 60)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
