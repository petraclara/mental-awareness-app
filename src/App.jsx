// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import Therapist from "./Therapist";
import NavBar from "./Dashboard/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> {/* Render the Navbar component */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/therapist" element={<Therapist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
