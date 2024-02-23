import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        username,
        email,
        password
      });
      console.log(response.data); // Log the response from the backend
      // Redirect user to the home page after successful registration
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Failed to register user. Please try again.'); // Display error message to the user
    }
  };

  return (
    <dev className= "reg">
    <div className="background">
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Register Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='Register-button'>Register</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if registration fails */}
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
    </dev>
  );
};

export default Register;
