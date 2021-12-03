import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div
      style={{
        marginTop: "50px",
        fontSize: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchIcon style={{ fontSize: "50px" }} />
      <p>Search for a movie, TV series..</p>
    </div>
  );
}
