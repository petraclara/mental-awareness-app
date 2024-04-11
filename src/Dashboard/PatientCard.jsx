import React from 'react';
import { Avatar } from '@mui/material';
import './card.css'; // Assuming you have a CSS file for styling
import { colors } from '../theme'; // Assuming you have a theme file

const PatientCard = ({ patient }) => {
  return (
    <div className='Infocard' style={{ border: `1px solid ${colors.border}` }}>
      <div>
        <Avatar
          alt={patient.firstname} // Assuming patient.firstname contains the patient's first name
          src={patient.avatar} // Assuming patient.avatar contains the URL of the patient's avatar image
          sx={{ width: 100, height: 100 }}
          style={{ resizeMode: 'contain' }}
        />
      </div>
      <div className='info'>
        <p className='infoTitle'>{`${patient.firstName} ${patient.lastName}`}</p>
        <div className='infoBottom'>
          <div style={{ marginRight: '30px' }}>
            <button className='infoBio'>Bio</button>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <i
              className='fa-regular fa-comment'
              style={{ color: '#3d3d3d', fontSize: '20px' }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
