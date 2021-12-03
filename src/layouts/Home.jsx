import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import MovieList from "./Home/MovieList";

export default function Home() {
  const [value, setValue] = React.useState("");
  const [storeVal, setStoreVal] = React.useState();
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={9}
          style={{
            textAlign: "center",
            margin: "100px auto 20px auto",
            padding: "0px 20px 40px 20px",
            background: "rgb(18, 18, 39)",
            color: "white",
          }}
        >
          <Header />
          <SearchBar
            value={value}
            setValue={setValue}
            storeVal={storeVal}
            setStoreVal={setStoreVal}
          />
          <MovieList value={value} storeVal={storeVal} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
