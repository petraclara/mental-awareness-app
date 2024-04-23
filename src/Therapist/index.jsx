import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import Navbar from '../Dashboard/Navbar';

const Therapist = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    specialty: '',
    language: '',
    race: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/patients', formData);
      console.log('Form submission successful:', response.data);
      setFormData({
        name: '',
        gender: '',
        specialty: '',
        language: '',
        race: '',
        age: ''
      });
      navigateToDashboard();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const navigateToDashboard = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/patients', // Adjust the endpoint accordingly
        formData // Pass any additional parameters as needed
      );

      navigate('/therapist-dashboard', {
        state: { patients: response.data },
      });
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <h2>Therapist Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <select id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} required>
            <option value="">Select Specialty</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Family Therapist">Family Therapist</option>
            <option value="IT Counselor">IT Counselor</option>
            <option value="Relationships">Relationships</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select id="language" name="language" value={formData.language} onChange={handleChange} required>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Swahili">Swahili</option>
            <option value="French">French</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="race">Race:</label>
          <select id="race" name="race" value={formData.race} onChange={handleChange} required>
            <option value="">Select Race</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Hispanic">Hispanic</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Therapist;
