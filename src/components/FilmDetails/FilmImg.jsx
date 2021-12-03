import React from "react";

export default function FilmImg({ img }) {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          border: "1px solid white",
          width: "350px",
          margin: "auto",
          padding: "20px 0px",
        }}
      >
        <img src={img} alt="film" />
      </div>
    </div>
  );
}
