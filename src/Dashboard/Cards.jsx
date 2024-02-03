import { Avatar } from "@mui/material";
import React from "react";
import Button from "../components/Button";
import "./card.css";
import { colors } from "../theme";

export default function Cards() {
  return (
    <div className="Infocard" style={{ border: `1px solid ${colors.border}` }}>
      <div>
        <Avatar
          alt="Remy Sharp"
          src="https://hostapp.s3.amazonaws.com/hostReg9e6c8d06603e72f83ca2780f070256ee.jpg"
          sx={{ width: 100, height: 100 }}
          style={{ resizeMode: "contain" }}
        />
      </div>
      <div className="info">
        <p className="infoTitle">Petra Clare</p>
        <div className="infoBottom">
          <div style={{ marginRight: "30px" }}>
            <button
              style={{ border: `1px solid ${colors.border}`, color: "#FFF" }}
              className="infoBio"
            >
              Bio
            </button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="fa-regular fa-comment "
              style={{ color: "#FFF", fontSize: "20px" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
