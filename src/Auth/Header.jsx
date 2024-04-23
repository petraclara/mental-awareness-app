import React from "react";
import "./style.css";

export default function Header({ isLogin, setIsLogin }) {
  return (
    <div className="headerWrapper">
      <div
        className={`${isLogin ? "buttonTitle" : "buttonTitle2"}`}
        onClick={() => setIsLogin(false)}
      >
        Register
      </div>

      <div
        onClick={() => setIsLogin(true)}
        className={`${isLogin ? "buttonTitle" : "buttonTitle2"}`}
      >
        Login
      </div>
    </div>
  );
}
