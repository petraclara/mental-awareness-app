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
  const [isLogin, setIsLogin] = useState(false);
  const [isTherapist, setisTherapist] = useState(false)
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    specialty: '',
    language: '',
    race: '',
    age: '',
    email: '',
    password: '',
  });

  const Register = async () => {
    try {
      let body = formData
      console.log({body})
      const res = await axios.post(`http://localhost:4000/${isTherapist ? 'therapists' : 'patients'}`, body);
      console.log(res);
      // toast.success(res.data?.message, { /* Toast success message */ });
      setActive("login");
    } catch (err) {
      // console.log(err.response.data);
      // toast.error(err.response.data.error, { /* Toast error message */ });
    }
  };

  const Login = async () => {
    try {
      let body = formData
      const res = await axios.post("http://localhost:4000/auth/login", body);

      console.log(res.data);
      localStorage.setItem("tokenClare", res.data.token);
      localStorage.setItem("userId", res.data.id);
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
      toast.error(err.response.data.error, { /* Toast error message */ });
    }
  };

  return (
    <div style={{ backgroundColor: colors.primary }} className="auth">
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      
      {/* Inputs for email and password */}
      <input
        type="email"
        placeHolder="johndoe@gmail.com"
        value={formData.email}
        onChange={(e) => setFormData((prevData) => ({...prevData, email: e.target.value}))}
      />
      <input
        type="password"
        value={formData.password}
        placeHolder="password"
        onChange={(e) => setFormData((prevData) => ({...prevData, password: e.target.value}))}
      />
      {!isLogin && isTherapist && (
        <>
          <div className="form-group">
          {/* <label htmlFor="gender">Gender:</label> */}
          <select id="gender" name="gender" value={formData.gender} onChange={(e) => setFormData((prevData) => ({...prevData, gender: e.target.value}))} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>
        <div className="form-group">
          {/* <label htmlFor="specialty">Specialty:</label> */}
          <select id="specialty" name="specialty" value={formData.specialty} onChange={(e) => setFormData((prevData) => ({...prevData, specialty: e.target.value}))} required>
            <option value="">Select Specialty</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Family Therapist">Family Therapist</option>
            <option value="IT Counselor">IT Counselor</option>
            <option value="Relationships">Relationships</option>
          </select>
        </div>
        <div className="form-group">
          {/* <label htmlFor="language">Language:</label> */}
          <select id="language" name="language" value={formData.language} onChange={(e) => setFormData((prevData) => ({...prevData, language: e.target.value}))} required>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Swahili">Swahili</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="race">Race:</label>
          <select id="race" name="race" value={formData.race} onChange={(e) => setFormData((prevData) => ({...prevData, race: e.target.value}))} required>
            <option value="">Select Race</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Hispanic">Hispanic</option>
          </select>
        </div>
        </>
      )}

      {/* Button for either Login or Register */}
      <Button
        onClick={() => {
          isLogin ? Login() : Register();
        }}
        title={isLogin ? "Login" : "Register"}
      />

      {/* Link to sign up as a therapist */}
      {/* {!isLogin && !isTherapist (
        
        
      )} */}
      

      {/* <Link to="/signup-therapist" style={{ color: "white", textDecoration: "underline", marginTop: "10px", display: "block", textAlign: "center" }}>
          Sign up as a therapist
        </Link> */}

        <button type='button' onClick={() => setisTherapist((prevState) => !prevState)} >
        {`Sign up as a ${isTherapist ? 'patient' : 'therapist'}`}
        </button>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
}
