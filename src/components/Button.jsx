import React from "react";
import { colors } from "../theme";
import "./style.css";

export default function Button({ onClick, title, width }) {
  return (
    <button
      onClick={onClick}
      style={{ borderColor: colors.border, width: width ? `${width}%` : "30%" }}
      className="btn_started"
    >
      {title}
    </button>
  );
}
