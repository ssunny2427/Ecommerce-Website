import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Sign.css';

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  const formSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/items1', { name, password });
      setMessage('User registered successfully! Redirecting...');
      // Redirect to the next page
      navigate('/home');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMessage('User not found.');
      } else {
        setMessage('Failed to register user.');
      }
    }
  };

  return (
    
    <>
    <div className="siggnup">
      <form onSubmit={formSubmit}>
      <div className="textt">
        <h1>SignUp</h1>
        <label className="textt1">
          Username:
          <input type="text" className="textt1" required onChange={handleNameChange} value={name} />
        </label>
        <label className="textt1">
          Password:
          <input className="textt1" type="password" required onChange={handlePasswordChange} value={password} />
        </label>
        <label className="textt1">
          Confirm password:
          <input type="password" className="textt1" required onChange={handleConfirmPasswordChange} value={confirmPassword} />
        </label>
        <button type="submit">SignUp</button>
        </div>
      </form>
      {message && <p>{message}</p>}
      </div>
    </>
    
  );
}

export default Signup;
