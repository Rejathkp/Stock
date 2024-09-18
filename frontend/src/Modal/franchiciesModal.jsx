import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { baseURL } from './../Services/BaseUrl';
import { franchisePostUrl } from './../Utils/Constatns';

const FranchiciesModal = ({ isVisible, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const modalRef = useRef(null);

  // Close modal if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend API
      const response = await axios.post(
        `${baseURL}${franchisePostUrl}`,
        { franchiseName: name },
        { headers: { 'Content-Type': 'application/json' } } // Correct headers
      );

      // Handle success
      if (response.status === 200) {
        alert('Franchise added successfully');
        onSubmit({ name });
        onClose();
      } else {
        alert('Failed to add franchise');
      }
    } catch (error) {
      // Log and handle errors
      if (error.response) {
        console.error('Server Error:', error.response.data);
      } else if (error.request) {
        console.error('Network Error:', error.request);
      } else {
        console.error('Error:', error.message);
      }
      alert('An error occurred while adding the franchise');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        ref={modalRef} // Attach the modalRef here
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          width: '80%',
          maxWidth: '500px',
          maxHeight: '100%',
          overflowY: 'auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>
          Add Franchise
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <div style={{ flex: '1' }}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '4px',
                    marginTop: '4px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </label>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '6px 8px',
                border: 'none',
                borderRadius: '8px',
              }}
            >
              Close
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '6px 8px',
                border: 'none',
                borderRadius: '8px',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FranchiciesModal;
