import React from "react";
import "./styles.css";
import { colors } from "../theme";
import NavBar from "./Navbar";
import Cards from "./Cards";

export default function Dashboard() {
  return (
    <div className="dash" style={{ backgroundColor: colors.primary }}>
      <NavBar />
      <div className="cardWrapper">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="comment">
        <i className="fa-regular fa-comment "></i>
      </div>
    </div>
  );
}
