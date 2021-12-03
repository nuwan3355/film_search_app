import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import FilmData from "../components/FilmDetails/FilmData";
import FilmImg from "../components/FilmDetails/FilmImg";

export default function FilmDetais() {
  const state = useSelector((state) => state.searchReducer.singleFilmData);
  return (
    <div>
      <NavBar />
      <Grid
        container
        style={{ marginTop: "70px", color: "white", textAlign: "center" }}
      >
        <Grid item xs={12} md={6}>
          <FilmImg img={state.Poster} />
        </Grid>
        <Grid item xs={12} md={6}>
          <FilmData state={state} />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
