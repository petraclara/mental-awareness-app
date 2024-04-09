import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";

const Therapist = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    specialty: '',
    language: '',
    race: '',
    age: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend server
      const response = await axios.post('http://localhost:4000/therapist/add', formData);
      console.log('Form submission successful:', response.data);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        gender: '',
        specialty: '',
        language: '',
        race: '',
        age: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="container">
      <h2>Therapist Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" required />
        </div>
        <div className="form-group">
          <label className="label">Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} className="select-field" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Specialty:</label>
          <select name="specialty" value={formData.specialty} onChange={handleChange} className="select-field" required>
            <option value="">Select Specialty</option>
            <option value="Psychologist">Psychologist</option>
            <option value="Family Therapist">Family Therapist</option>
            <option value="IT Counselor">IT Counselor</option>
            <option value="Relationships">Relationships</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="label">Language:</label>
          <select name="language" value={formData.language} onChange={handleChange} className="select-field" required>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Swahili">Swahili</option>
            <option value="French">French</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="label">Race:</label>
          <select name="race" value={formData.race} onChange={handleChange} className="select-field" required>
            <option value="">Select Race</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Hispanic">Hispanic</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label className="label">Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} className="input-field" required />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default Therapist;
