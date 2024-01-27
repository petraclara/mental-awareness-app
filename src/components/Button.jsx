import React from "react";
import { colors } from "../theme";
import "./style.css";

export default function Button({ onClick, title }) {
  return (
    <button
      onClick={onClick}
      style={{ borderColor: colors.border }}
      className="btn_started"
    >
      {title}
    </button>
  );
}
