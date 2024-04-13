import React, { useState } from 'react';
import { Link } from 'react-router-dom';

 


import './RegistrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  });

  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here before submitting the form
    console.log(formData); // For demonstration, log form data to console
    window.location.href ='/LoginForm';
  };

  
  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1 className='title'>Register Page</h1>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      
      <button  type="submit">Register</button>
    <p>Already have an account? <Link to="/LoginForm" className="login-link"> Login</Link></p>

      
    </form>
  );
};

export default RegistrationForm;
