import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { colors } from '../theme';
import NavBar from './Navbar';
import TherapistCard from './TherapistCard';
// import { randomTherapists } from '../../utils';

export default function Dashboard({ userPreferences }) {
  const [preferedTherapists, setPreferredTherapists] = useState([]);

  useEffect(() => {
    const userType = localStorage.getItem('userType')
    const fetchTherapists = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/${userType === 'patient' ? 'therapists' : 'patients'}`);
        console.log(response.data, '....')
        const fetchedTherapists = response.data;

        let filteredTherapists = fetchedTherapists;

        if (userPreferences.length !== 0) {
          filteredTherapists = fetchedTherapists.filter((therapist) => {
            return (
              userPreferences.includes(therapist.specialty) ||
              userPreferences.includes(therapist.language) ||
              userPreferences.includes(therapist.race)
            );
          });
        }

        setPreferredTherapists(filteredTherapists);
      } catch (error) {
        console.error('Error fetching therapists:', error);
      }
    };

    fetchTherapists();
  }, [userPreferences]); // Run effect whenever userPreferences change

  return (
    <>
      <NavBar />
    <div className='dash' style={{ backgroundColor: colors.primary }}>
      <div className='cardWrapper'>
        {preferedTherapists.map((therapist, index) => (
          <TherapistCard key={index} therapist={therapist} />
        ))}
      </div>
    </div>
    </>
  );
}
