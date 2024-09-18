import React, { useState, useEffect } from 'react';
import Modal from '../../Modal/subproductsModal';
import { baseURL } from '../../Services/BaseUrl';
import { SubProductsGetUrl } from '../../Utils/Constatns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';

const SubProducts = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [subProductsData, setSubProductsData] = useState([]);

  const subProductsPerPage = 10;

  useEffect(() => {
    // Fetch sub-products from backend or local storage
    const fetchSubProducts = async () => {
      try {
        const response = await axios.get(`${baseURL}${SubProductsGetUrl}`);
        if (response.data.success === 200 && Array.isArray(response.data.subProducts)) {
          setSubProductsData(response.data.subProducts);
          localStorage.setItem('subProducts', JSON.stringify(response.data.subProducts));
        } else {
          alert('Failed to fetch sub-products');
        }
      } catch (error) {
        console.error('Error fetching sub-products', error);
        alert('An error occurred while fetching sub-products');
      }
    };

    // Load from local storage if available
    const storedSubProducts = localStorage.getItem('subProducts');
    if (storedSubProducts) {
      setSubProductsData(JSON.parse(storedSubProducts));
    } else {
      fetchSubProducts();
    }
  }, []);

  const totalPages = Math.ceil(subProductsData.length / subProductsPerPage);

  const handleOpenModal = () => setModalVisible(true);

  const handleCloseModal = () => setModalVisible(false);

  const handleFormSubmit = (newSubProduct) => {
    const updatedSubProducts = [...subProductsData, newSubProduct];
    setSubProductsData(updatedSubProducts);
    localStorage.setItem('subProducts', JSON.stringify(updatedSubProducts));
    handleCloseModal();
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * subProductsPerPage;
  const currentSubProducts = subProductsData.slice(startIndex, startIndex + subProductsPerPage);

  return (
    <div style={{ backgroundColor: '#d2dcfe', padding: '20px', borderRadius: '4px', height: '100%', overflowY: 'auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'black', fontWeight: 'bold' }}>Sub Products</h1>
        <button
          type="button"
          onClick={handleOpenModal}
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '8px',
            padding: '6px 8px',
            border: 'none'
          }}
        >
          Add
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
        <thead>
          <tr>
            <th className="bg-blue-800" style={{ padding: '8px', color: 'white' }}>Code</th>
            <th className="bg-blue-800" style={{ padding: '8px', color: 'white' }}>Name</th>
            <th className="bg-blue-800" style={{ padding: '8px', color: 'white' }}>Quantity</th>
            <th className="bg-blue-800" style={{ padding: '8px', color: 'white' }}>Price</th>
            <th className="bg-blue-800" style={{ padding: '8px', color: 'white' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentSubProducts.length > 0 ? (
            currentSubProducts.map((subProduct, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{subProduct.code}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{subProduct.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{subProduct.quantity}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{subProduct.price}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{subProduct.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '8px', color: '#666' }}>No sub-products available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: '10px', padding: '8px 8px', borderRadius: '5px', backgroundColor: currentPage === 1 ? 'grey' : 'black', color: 'white', border: 'none' }}
        >
          <FaChevronLeft />
        </button>
        <span style={{ margin: '8px', fontSize: '16px', textAlign: 'center' }}>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ padding: '8px 8px', borderRadius: '5px', backgroundColor: currentPage === totalPages ? 'grey' : 'black', color: 'white', border: 'none' }}
        >
          <FaChevronRight />
        </button>
      </div>

      <Modal isVisible={isModalVisible} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default SubProducts;
