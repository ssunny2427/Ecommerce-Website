import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Sign.css';

function Signin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/items', { name, password });
      setMessage('User found! Redirecting...');
      // Redirect to the next page
      navigate('/home');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMessage('User not found.');
      } else {
        setMessage('Failed to check user.');
      }
    }
  };

  return (
    <>
    <div className='siggnup'>
      <form onSubmit={formSubmit}>
        <h1 className="textt1">SignIn</h1>
        <label className="textt1">
          Username:
          <input className="textt1" type="text" value={name} onChange={handleNameChange} required />
        </label>
        <label className="textt1">
          Password:
          <input className="textt1" type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <button type="submit">Sign In</button>
      </form>
      {message && <p>{message}</p>}

      <p className="texttt1">New to website <a href="/signup" className='pooo'>Register?</a> </p>
      </div>
    </>
  );
}

export default Signin;


