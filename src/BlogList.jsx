import React from "react";
import { Link } from "react-router-dom";

export default function BlogList({ bloglar, title }) {
  return (
    <div className="blog-list">
      <h1 style={{ color: "#ff793f" }}>{title}</h1>

      {bloglar.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.ad}</h2>
            <p>Yazar : {blog.yazar}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
