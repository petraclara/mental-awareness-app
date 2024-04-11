import React, { useState } from "react";
import "./style.css";
import { colors } from "../theme";
import Input from "./Input";
import Header from "./Header";
import Button from "../components/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Auth() {
  const [active, setActive] = useState("login");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const Register = async () => {
    try {
      let body = {
        email: email,
        confirm: confirm,
        password: password,
        type: "USER",
      };
      const res = await axios.post("http://localhost:4000/auth/register", body);
      console.log(res.data);
      toast.success(res.data?.message, { /* Toast success message */ });
      setActive("login");
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data.error, { /* Toast error message */ });
    }
  };

  const Login = async () => {
    try {
      let body = {
        email: email,
        password: password,
      };
      const res = await axios.post("http://localhost:4000/auth/login", body);

      console.log(res.data);
      localStorage.setItem("tokenClare", res.data.token);
      toast.success("Logged in!", { /* Toast success message */ });
      navigate("/therapist");
      setActive("login");
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data.error, { /* Toast error message */ });
    }
  };

  return (
    <div style={{ backgroundColor: colors.primary }} className="auth">
      <Header active={active} setActive={setActive} />
      
      {/* Inputs for email and password */}
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
      {active === "register" && ( /* Additional input for confirm password if registering */
        <Input
          type="password"
          value={confirm}
          placeHolder="Confirm password"
          setVal={setConfirm}
        />
      )}

      {/* Button for either Login or Register */}
      <Button
        onClick={() => {
          active === "login" ? Login() : Register();
        }}
        title={active === "login" ? "Login" : "Register"}
      />


      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
}
