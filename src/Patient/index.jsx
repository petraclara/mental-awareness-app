import React, { useState } from 'react';
import Stack from './Stack';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import "./style.css";

const Patient = ({ preferences, setPreferences }) => {
  const [preferenceOptions] = useState([
    'Psychologist',
    'Family Therapist',
    'Couples Counselor',
    'English',
    'Spanish',
    'French',
    'White',
    'Black',
    'Hispanic',
  ]);
  const navigate = useNavigate(); // Use useNavigate hook correctly

  const handleTogglePreference = (preference) => {
    if (preferences.includes(preference)) {
      setPreferences(
        preferences.filter((item) => item !== preference)
      ); // Deselect preference
    } else {
      setPreferences([...preferences, preference]); // Select preference
    }
  };

  const handleNext = async () => {
    try {
      // Make a POST request to the backend to fetch therapists based on preferences
      const response = await axios.post(
        'http://localhost:4000/patient-request',
        { preferences: preferences }
      );

      // Navigate to the dashboard displaying therapists using navigate function
      navigate('/dashboard', {
        state: { therapists: response.data },
      });
    } catch (error) {
      console.error('Error submitting preferences:', error);
    }
  };

  return (
    <div className='container'>
      <Stack selectedPreferences={preferences} />

      <div className='preferences-container'>
        <h2>Available Preferences</h2>
        <ul className='preferences-list'>
          {preferenceOptions.map((option, index) => (
            <li key={index} className='preference-item'>
              {/* Highlight the preference if it's selected */}
              <button
                className={`preference-button ${
                  preferences.includes(option) ? 'selected' : ''
                }`}
                onClick={() => handleTogglePreference(option)}
              >
                {option}
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
