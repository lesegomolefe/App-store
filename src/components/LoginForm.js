import React, { useState } from 'react';
//import { Link} from 'react-router-dom';
import './RegistrationForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 // const [error, setError] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/NavbarMenu';
    // Check if username and password are valid
    if (username === 'validUsername' && password === 'validPassword') {
      // Perform login action
      console.log('Login successful');
      
      return;
    
    } 
      console.log('Invalid username or password');
    
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='title'>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      
      
    </form>
  );
};

export default LoginForm;
