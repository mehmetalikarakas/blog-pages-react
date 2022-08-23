import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    veri: blogs,
    loading,
    error,
  } = useFetch("http://localhost:8000/yazilar");

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {loading && <div className="loading">Yükleniyor...</div>}
      {blogs && <BlogList bloglar={blogs} title="Yazilar" />}
    </div>
  );
};

export default Home;
