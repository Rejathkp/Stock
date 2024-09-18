import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { baseURL } from './../Services/BaseUrl'; 
import { adminLoginUrl } from './../Utils/Constatns'; 

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState({ email: '', password: '' });
  
  const navigate = useNavigate();  

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset previous validation errors
    setValidationError({ email: '', password: '' });

    let hasError = false;

    // Validation for email
    if (!email) {
      setValidationError(prev => ({ ...prev, email: 'Please enter email' }));
      hasError = true;
    }

    // Validation for password
    if (!password) {
      setValidationError(prev => ({ ...prev, password: 'Please enter password' }));
      hasError = true;
    }

    // Stop the process if validation fails
    if (hasError) {
      return;
    }

    try {
      const response = await axios.post(`${baseURL}${adminLoginUrl}`, { email, password });
      console.log('response', response);
      const { token } = response.data;

      localStorage.setItem('token', token); 
      setMessage('Login successful');
      setError(null);

      // Redirect to the categories page after successful login
      navigate('/categories');  // This will redirect the user to the categories page
    } 
    catch (error) {
      setMessage('');
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Login failed. Please check your credentials.');
      } else {
        setError('Login failed. Please check your credentials.');
      }
      console.error('Login error:', error);
    }
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        width: '100%', 
        backgroundColor: '#f4f4f4' 
      }}
    >
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Admin Login</h2>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          width: '300px', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '8px', 
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <label>Email:</label>
        <input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter Email"
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {/* Show validation error for email */}
        {validationError.email && <p style={{ color: 'red', marginTop: '-8px', marginBottom: '10px' }}>{validationError.email}</p>}

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password"
          style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        {/* Show validation error for password */}
        {validationError.password && <p style={{ color: 'red', marginTop: '-8px', marginBottom: '10px' }}>{validationError.password}</p>}

        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            backgroundColor: 'blue', 
            fontWeight: 'bold' 
          }}
        >
          Login
        </button>

        {/* Error or success message */}
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        {message && <p style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
