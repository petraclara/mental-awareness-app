import React from "react";
import { colors } from "../theme";
import "./style.css";

export default function Button({ onClick, title, width }) {
  return (
    <button
      onClick={onClick}
      style={{ borderColor: colors.border, width: width ? `${width}%` : "20%" }}
      className="btn_started"
    >
      {title}
    </button>
  );
}
