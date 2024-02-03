import React, { useState } from "react";
import "./style.css";
import { colors } from "../theme";
import Input from "./Input";
import Header from "./Header";
import Button from "../components/Button";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [active, setActive] = useState("login");
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const Register = async () => {
    try {
      let body = {
        email: email,
        confirm: confirm,
        password: password,
      };
      const res = await axios.post(
        "http://localhost:4000/users/register",
        body
      );
      console.log(res.data);
      toast.success(res.data?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setActive("login");
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const Login = async () => {
    try {
      let body = {
        email: email,
        password: password,
      };
      const res = await axios.post("http://localhost:4000/users/login", body);
      console.log(res.data);
      localStorage.setItem("tokenClare", res.data.token);
      toast.success("Logged in!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/dashboard");
      setActive("login");
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div style={{ backgroundColor: colors.primary }} className="auth">
      <Header active={active} setActive={setActive} />
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
      {active === "login" && (
        <React.Fragment>
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
        </React.Fragment>
      )}
      {active === "register" && (
        <React.Fragment>
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
          <Input
            type="password"
            value={confirm}
            placeHolder="Confirm password"
            setVal={setConfirm}
          />
        </React.Fragment>
      )}
      {active === "login" ? (
        <Button
          onClick={() => {
            Login();
          }}
          title="Login"
        />
      ) : (
        <Button
          onClick={() => {
            Register();
          }}
          title="Register"
        />
      )}
      <ToastContainer />
    </div>
  );
}
