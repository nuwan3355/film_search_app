import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filmDetails } from "../store/actions/searchAction";

export default function SingleMovie({ movie }) {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(filmDetails(movie));
  };
  return (
    <div
      style={{
        border: "1px solid white",
        margin: "10px",
        background: "black",
        boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "200px", height: "300px", margin: "10px 0px" }}
      />
      <p>{movie.Title}</p>
      <h6>{movie.Year}</h6>
      <Button
        component={Link}
        to="/film-details"
        variant="contained"
        style={{ marginBottom: "10px" }}
        onClick={addProductHandler}
      >
        movie details
      </Button>
    </div>
  );
}
