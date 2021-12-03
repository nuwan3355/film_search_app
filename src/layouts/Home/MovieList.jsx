import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Loading from "../../components/Loading";
import NoData from "../../components/NoData";
import SingleMovie from "../../components/SingleMovie";

export default function MovieList({ storeVal }) {
  const { loading, movies } = useSelector((state) => state.searchReducer);

  return (
    <div>
      {loading && <Loading />}
      <Grid container>
        {movies ? (
          movies.map((val, key) => {
            return (
              <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                <SingleMovie key={key} movie={val} />{" "}
              </Grid>
            );
          })
        ) : (
          <NoData storeVal={storeVal} />
        )}
      </Grid>
    </div>
  );
}
