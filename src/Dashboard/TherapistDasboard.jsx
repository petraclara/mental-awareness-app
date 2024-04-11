import React from 'react';
import PatientCard from './PatientCard'; // Assuming you have a PatientCard component

const TherapistDashboard = ({ patients }) => {
  if (!patients || patients.length === 0) {
    return <div>No patients found</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Therapist Dashboard</h2>
      <div className="patient-list">
        {patients.map((patient, index) => (
          <PatientCard key={index} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default TherapistDashboard;
