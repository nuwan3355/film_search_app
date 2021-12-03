import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import img from "../../../src/favicon.ico";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ position: "fixed", top: "0px", width: "100%", zIndex: "5" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              border: "2px solid white",
              padding: "0px 10px",
            }}
          >
            MO
            <span
              style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
            >
              V
            </span>
            IES
          </Link>
          <img
            alt="navigation"
            src={img}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Container>
      </Navbar>
    </div>
  );
}
