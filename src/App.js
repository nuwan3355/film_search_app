import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmDetais from "./layouts/FilmDetais";
import Home from "./layouts/Home";

function App() {
  return (
    <div>
      <Router basename="/filmgallery/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/film-details" component={FilmDetais} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
