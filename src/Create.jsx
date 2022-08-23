import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [baslik, setBaslik] = useState("");
  const [aciklama, setAciklama] = useState("");
  const [yazar, setYazar] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setYukleniyor(true);
    const yazi = { ad: baslik, aciklama, yazar };
    fetch("http://localhost:8000/yazilar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(yazi),
    }).then(() => {
      console.log("yazi eklendi");
      setYukleniyor(false);
      //   history.go(-1)
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2 style={{ color: "#ff793f" }}>Yeni Yazı Ekle</h2>

      <form onSubmit={handleSubmit}>
        <label>Yazi Baslik : </label>
        <input
          type="text"
          required
          value={baslik}
          onChange={(e) => setBaslik(e.target.value)}
        />
        <label>Yazı Aciklama : </label>
        <textarea
          required
          value={aciklama}
          onChange={(e) => setAciklama(e.target.value)}
        ></textarea>
        <label>Yazar : </label>
        <select value={yazar} onChange={(e) => setYazar(e.target.value)}>
          <option value="Veli Demir">Veli Demir</option>
          <option value="Ahmet Yılmaz">Ahmet Yılmaz</option>
          <option value="Mehmet Altın">Mehmet Altın</option>
          <option value="Ali Kaya">Ali Kaya</option>
          <option value="Sina Kural">Sina Kural</option>
        </select>
        {!yukleniyor && <button>Ekle</button>}
        {yukleniyor && <button disabled>Yükleniyor...</button>}
      </form>
    </div>
  );
};

export default Create;
