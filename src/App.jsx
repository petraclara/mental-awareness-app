// App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Patient from "./Patient";
import Therapist from "./Therapist";
import "react-toastify/dist/ReactToastify.css";
import Messages from "./Messages";
import Chat from "./Messages/Chat";
import TherapistSignup from "./Auth/TherapistSignup";
import TherapistDashboard from "./Dashboard/TherapistDasboard";
function App() {
  const [userPreferences, setUserPreferences] = useState([]);
  const [showNav, serShowNav] = useState(true)

  useEffect(() => {
    console.log(userPreferences);
  }, [userPreferences]);

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/chat" element={<Messages />} />
          <Route path="/chat/:id/:recId" element={<Chat />} />
          <Route
            path="/dashboard"
            element={<Dashboard userPreferences={userPreferences} />}
          />
          <Route
            path="/patient"
            element={
              <Patient
                preferences={userPreferences}
                setPreferences={setUserPreferences}
              />
            }
          />
          <Route path="/therapist" element={<Therapist />} />
          {/* <Route path="/signup-therapist" element={<TherapistSignup />} /> */}
          {/* <Route path="/therapist-dashboard" element={<TherapistDashboard />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// App.js

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./Landing";
// import Auth from "./Auth";
// import Dashboard from "./Dashboard";
// import Patient from "./Patient";
// import Therapist from "./Therapist";
// import NavBar from "./Dashboard/Navbar";
// import "react-toastify/dist/ReactToastify.css";
// import Messages from "./Messages";
// import Chat from "./Messages/Chat";
// // import TherapistSignup from "./Auth/TherapistSignup";
// // import TherapistDashboard from "./Dashboard/TherapistDasboard";
// function App() {
//   const [userPreferences, setUserPreferences] = useState([]);

//   useEffect(() => {
//     console.log(userPreferences);
//   }, [userPreferences]);

//   return (
//     <>
//       <BrowserRouter>
//         <NavBar /> {/* Render the Navbar component */}
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/chat" element={<Messages />} />
//           <Route path="/chat/:id/:recId" element={<Chat />} />
//           <Route
//             path="/dashboard"
//             element={<Dashboard userPreferences={userPreferences} />}
//           />
//           {/* <Route
//             path="/patient"
//             element={
//               <Patient
//                 preferences={userPreferences}
//                 setPreferences={setUserPreferences}
//               />
//             }
//           />
//           <Route path="/therapist" element={<Therapist />} /> */}
//           {/* <Route path="/signup-therapist" element={<TherapistSignup />} /> */}
//           {/* <Route path="/therapist-dashboard" element={<TherapistDashboard />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;