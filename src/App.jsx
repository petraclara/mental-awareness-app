import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Landing from "./Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Steps from "./Steps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
