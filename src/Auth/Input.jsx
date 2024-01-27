import React, { useState } from "react";
import "./input.css";
import { colors } from "../theme";

export default function Input({ type, value, setVal, placeHolder }) {
  const [change, setChange] = useState(false);
  return (
    <div className="input_wrapper">
      <input
        type={type === "password" ? (change ? "text" : "password") : type}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        className="input"
      />
      {type === "password" && (
        <i
          class="fa-solid fa-eye check"
          style={{ color: change ? colors.primary : "#999" }}
          onClick={() => setChange(!change)}
        ></i>
      )}
    </div>
  );
}
