import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    veri: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/yazilar/" + id);

  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/yazilar/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("Silindi.");
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {loading && <div>Yükleniyor...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.ad}</h2>

          <p>Yazar : {blog.yazar}</p>

          <div>{blog.aciklama}</div>
          <button onClick={handleDelete}>Sil</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
