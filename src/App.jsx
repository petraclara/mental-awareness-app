// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Auth from './Auth';
import Dashboard from './Dashboard';
import Patient from './Patient';
import Therapist from './Therapist';
import NavBar from './Dashboard/Navbar';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [userPreferences, setUserPreferences] = useState([]);

  useEffect(() => {
    console.log(userPreferences);
  }, [userPreferences]);

  return (
    <>
      <BrowserRouter>
        <NavBar /> {/* Render the Navbar component */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/auth' element={<Auth />} />
          <Route
            path='/dashboard'
            element={<Dashboard userPreferences={userPreferences} />}
          />
          <Route
            path='/patient'
            element={
              <Patient
                preferences={userPreferences}
                setPreferences={setUserPreferences}
              />
            }
          />
          <Route path='/therapist' element={<Therapist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
