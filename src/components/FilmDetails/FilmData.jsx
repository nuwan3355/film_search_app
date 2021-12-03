import React from "react";
import DownloadBtn from "./FilmData/DownloadBtn";

export default function FilmData({ state }) {
  return (
    <div style={{ textAlign: "left", margin: "20px" }}>
      <h5>
        <span style={{ color: "yellow" }}>TITLE</span> - {state.Title}
      </h5>
      <h5>
        <span style={{ color: "yellow" }}>YEAR</span> - {state.Year}
      </h5>
      <h5>
        <span style={{ color: "yellow" }}>TYPE</span> - {state.Type}
      </h5>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quaerat,
        vitae alias necessitatibus libero repudiandae rerum dolore beatae et
        sunt eos excepturi saepe ad. Magni at quam minima harum! Ad?
      </p>
      <br />
      <DownloadBtn />
      <br />
      <br />
      <br />
    </div>
  );
}
