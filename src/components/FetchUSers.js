import React, { useEffect, useState } from "react";

export default function FetchUSers() {
  const [data, setData] = useState([]);

  const url = "https://api.github.com/users";
  const getUsers = async () => {
    const dataRespponse = await fetch(url);

    const response = await dataRespponse.json();

    setData(response);
    console.log(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: " repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px",
        flexWrap: "wrap",
        width: "95%",
        margin: "0 auto",
      }}
    >
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            boxShadow: "2px 2px 2px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <img
            src={item.avatar_url}
            alt=""
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "8px",
              marginRight: "5px",
            }}
          />
          <p>{item.login}</p>
        </div>
      ))}
    </div>
  );
}
