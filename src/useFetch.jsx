import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [veri, setVeri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Veriler çekilemedi.");
        return res.json();
      })
      .then((data) => {
        setVeri(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { veri, loading, error };
};

export default useFetch;
