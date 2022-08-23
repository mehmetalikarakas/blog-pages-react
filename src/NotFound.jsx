import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h2>Yanlıs Sayfa</h2>
        <p>Sayfa Bulunamadı</p>

        <Link to="/">Ana Sayfa</Link>
      </div>
    </>
  );
};

export default NotFound;
