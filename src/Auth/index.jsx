import React, { useState } from "react";
import "./style.css";
import { colors } from "../theme";
import Input from "./Input";
import Header from "./Header";
import Button from "../components/Button";

export default function Auth() {
  const [active, setActive] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ backgroundColor: colors.primary }} className="auth">
      <Header />
      {/* <button
        onClick={() => {
          if (active === "signup") {
            setActive("signin");
          } else if (active === "signin") {
            setActive("signup");
          }
        }}
      >
        change to {active}
      </button> */}
      <Input
        type="email"
        placeHolder="johndoe@gmail.com"
        value={email}
        setVal={setEmail}
      />
      <Input
        type="password"
        value={password}
        placeHolder="password"
        setVal={setPassword}
      />
      <Button onClick={() => {}} title="Login" />
    </div>
  );
}
