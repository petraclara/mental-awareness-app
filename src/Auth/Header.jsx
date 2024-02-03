import React from "react";
import "./style.css";

export default function Header({ active, setActive }) {
  return (
    <div className="headerWrapper">
      <div
        className={`${active === "register" ? "buttonTitle" : "buttonTitle2"}`}
        onClick={() => setActive("register")}
      >
        Register
      </div>

      <div
        onClick={() => setActive("login")}
        className={`${active === "login" ? "buttonTitle" : "buttonTitle2"}`}
      >
        Login
      </div>
    </div>
  );
}
