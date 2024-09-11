// import React, { useState } from 'react';

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Login logic goes here
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div 
//       style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center', 
//         height: '100vh', // Full screen height
//         width: '100%', // Full screen width
//         backgroundColor: '#f4f4f4' 
//       }}
//     >
//       <h2 style={{ fontWeight: 'bold', marginBottom: '20px'  }}>Admin Login</h2>
//       <form 
//         onSubmit={handleSubmit} 
//         style={{ 
//           display: 'flex', 
//           flexDirection: 'column', 
//           width: '300px', 
//           padding: '20px', 
//           border: '1px solid #ccc', 
//           borderRadius: '8px', 
//           backgroundColor: '#fff',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <label>Username:</label>
//         <input 
//           type="text" 
//           value={username} 
//           onChange={(e) => setUsername(e.target.value)} 
//           placeholder="Enter Username"
//           required 
//           style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
//         />

//         <label>Password:</label>
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           placeholder="Enter Password"
//           required 
//           style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
//         />
//         <button 
//         className='bg-blue-800'
//           type="submit" 
//           style={{ 
//             padding: '10px', 
//             color: '#fff', 
//             border: 'none', 
//             borderRadius: '4px', 
//             cursor: 'pointer', 
//             fontWeight: 'bold' 
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from './../Services/BaseUrl'; 

const AdminLogin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/user/login`, { email, password });
      console.log('response', response);
      const { token } = response.data;

      localStorage.setItem('token', token); 
      setMessage('Login successful');
      setError(null);
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
          required 
          style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter Password"
          required 
          style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
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
