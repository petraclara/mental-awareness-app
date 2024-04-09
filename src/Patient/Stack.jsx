// Stack.js
import React from 'react';

const Stack = ({ selectedPreferences }) => {
  return (
    <div>
      <h2>Selected Preferences</h2>
      <ul>
        {selectedPreferences.map((preference, index) => (
          <li key={index}>{preference}</li>
        ))}
      </ul>
    </div>
  );
};

export default Stack;
