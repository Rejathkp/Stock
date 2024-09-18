import React, { useState, useEffect } from 'react';
import Modal from '../../Modal/franchiciesModal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import { baseURL } from '../../Services/BaseUrl';
import { franchiseGetUrl } from '../../Utils/Constatns';

const Franchicies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [franchiciesData, setFranchiciesData] = useState([]);

  const franchiciesPerPage = 10;

  useEffect(() => {
    // Fetch initial franchicies from the backend
    const fetchFranchicies = async () => {
      try {
        const response = await axios.get(`${baseURL}${franchiseGetUrl}`);
        if (response.status === 200 && Array.isArray(response.data.categories)) {
          setFranchiciesData(response.data.categories);
          localStorage.setItem('franchicies', JSON.stringify(response.data.categories));
        } else {
          alert('Failed to fetch franchicies');
        }
      } catch (error) {
        console.error('Error fetching franchicies', error);
        alert('An error occurred while fetching franchicies');
      }
    };

    // Load franchicies from local storage if available
    const storedFranchicies = localStorage.getItem('franchicies');
    if (storedFranchicies) {
      setFranchiciesData(JSON.parse(storedFranchicies));
    } else {
      fetchFranchicies();
    }
  }, []);

  const totalPages = Math.ceil(franchiciesData.length / franchiciesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (newFranchise) => {
    const updatedFranchicies = [...franchiciesData, newFranchise];
    setFranchiciesData(updatedFranchicies);
    localStorage.setItem('franchicies', JSON.stringify(updatedFranchicies));
    handleCloseModal();
  };

  const startIndex = (currentPage - 1) * franchiciesPerPage;
  const currentFranchicies = franchiciesData.slice(startIndex, startIndex + franchiciesPerPage);

  return (
    <div
      style={{
        backgroundColor: '#d2dcfe',
        padding: '20px',
        borderRadius: '4px',
        height: '100%',
        overflowY: 'auto',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h1 style={{ color: 'black', fontWeight: 'bold' }}>Franchicies</h1>
        <button
          type="button"
          onClick={handleOpenModal}
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '8px',
            padding: '6px 8px',
            border: 'none',
          }}
        >
          Add
        </button>
      </div>

      <table
        style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}
      >
        <thead>
          <tr>
            <th  className='bg-blue-800' style={{ padding: '8px', color: 'white' }}>
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {currentFranchicies.length > 0 ? (
            currentFranchicies.map((franchise, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>
                  {franchise.name}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="1" style={{ textAlign: 'center', padding: '8px', color: '#666' }}>
                No franchicies available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{
            marginRight: '10px',
            padding: '8px 8px',
            borderRadius: '5px',
            backgroundColor: currentPage === 1 ? 'grey' : 'black',
            color: 'white',
            border: 'none',
          }}
        >
          <FaChevronLeft />
        </button>
        <span style={{ margin: '8px', fontSize: '16px', textAlign: 'center' }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{
            padding: '8px 8px',
            borderRadius: '5px',
            backgroundColor: currentPage === totalPages ? 'grey' : 'black',
            color: 'white',
            border: 'none',
          }}
        >
          <FaChevronRight />
        </button>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Franchicies;
