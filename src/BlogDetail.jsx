import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    veri: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/yazilar/" + id);

  return (
    <div className="blog-details">
      {loading && <div>Yükleniyor...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.ad}</h2>

          <p>Yazar : {blog.yazar}</p>

          <div>{blog.aciklama}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
