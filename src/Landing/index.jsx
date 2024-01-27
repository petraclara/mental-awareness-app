import React from "react";
import "./style.css";
import { colors } from "../theme";
import { useNavigate, useNavigation } from "react-router-dom";
import Button from "../components/Button";

function Landing() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: colors.primary }} className="landing">
      <h2 className="title">A Problem Shared Is A Problem solved</h2>
      <Button onClick={() => navigate("/auth")} title="Get Started" />

      <div
        className="comment"
        style={{ padding: "30px", paddingRight: "40px" }}
      >
        <i className="fa-regular fa-comment "></i>
      </div>
    </div>
  );
}
export default Landing;
