import React, { useState } from 'react';
import Stack from './Stack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import "./style.css";

const Patient = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [preferences] = useState([
    'Psychologist', 'Family Therapist', 'Couples Counselor', 'English', 'Spanish', 'French', 'White', 'Black', 'Hispanic'
  ]);
  const navigate = useNavigate(); // Use useNavigate hook correctly

  const handleTogglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(selectedPreferences.filter(item => item !== preference)); // Deselect preference
    } else {
      setSelectedPreferences([...selectedPreferences, preference]); // Select preference
    }
  };

  const handleNext = async () => {
    try {
      // Make a POST request to the backend to fetch therapists based on preferences
      const response = await axios.post('http://localhost:4000/patient-request', { preferences: selectedPreferences });
      
      // Navigate to the dashboard displaying therapists using navigate function
      navigate('/dashboard', { state: { therapists: response.data } });
    } catch (error) {
      console.error('Error submitting preferences:', error);
    }
  };

  return (
    <div className="container">
      <Stack selectedPreferences={selectedPreferences} />

      <div className="preferences-container">
        <h2>Available Preferences</h2>
        <ul className="preferences-list">
          {preferences.map((preference, index) => (
            <li key={index} className="preference-item">
              {/* Highlight the preference if it's selected */}
              <button 
                className={`preference-button ${selectedPreferences.includes(preference) ? 'selected' : ''}`} 
                onClick={() => handleTogglePreference(preference)}
              >
                {preference}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Patient;
