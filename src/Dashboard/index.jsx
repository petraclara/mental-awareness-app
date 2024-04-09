import React from 'react';
import './styles.css';
import { colors } from '../theme';
import NavBar from './Navbar';
import TherapistCard from './TherapistCard';
import { randomTherapists } from '../../utils';

export default function Dashboard({ userPreferences }) {
  let preferedTherapists = randomTherapists;

  if (userPreferences.length !== 0) preferedTherapists = randomTherapists.filter((therapist) => {
    return (
      userPreferences.includes(therapist.specialization) ||
      userPreferences.includes(therapist.language)
    );
  });

  return (
    <div className='dash' style={{ backgroundColor: colors.primary }}>
      <NavBar />
      <div className='cardWrapper'>
        {preferedTherapists.map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>
      <div className='comment'>
        <i className='fa-regular fa-comment '></i>
      </div>
    </div>
  );
}
