import React, { useState, useEffect } from 'react';
import Modal from '../../Modal/categoriesModal';
import { baseURL } from '../../Services/BaseUrl';
import { categoryGetUrl } from '../../Utils/Constatns';
import { FaChevronLeft, FaChevronRight, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);

  const categoriesPerPage = 10;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseURL}${categoryGetUrl}`);
        if (response.data.success === 200 && Array.isArray(response.data.categories)) {
          setCategoriesData(response.data.categories);
          localStorage.setItem('categories', JSON.stringify(response.data.categories));
        } else {
          alert("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories", error);
        alert("An error occurred while fetching categories");
      }
    };

    const storedCategories = localStorage.getItem('categories');
    if (storedCategories) {
      setCategoriesData(JSON.parse(storedCategories));
    } else {
      fetchCategories();
    }
  }, []);

  const totalPages = Math.ceil(categoriesData.length / categoriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prevPage => prevPage - 1);
  };

  const handleOpenModal = () => setModalVisible(true);

  const handleCloseModal = () => setModalVisible(false);

  const handleFormSubmit = (newCategory) => {
    const updatedCategories = [...categoriesData, newCategory];
    setCategoriesData(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    handleCloseModal();
  };

  // Delete category by making DELETE request with the specific ID
  const handleDeleteCategory = async (id) => {
    if (!id) {
      console.error("Category ID is undefined");
      alert("Category ID is missing, cannot delete.");
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/removecategory`, { id }); // Send ID in body

      if (response.data.success === 200) {
        const updatedCategories = categoriesData.filter(category => category._id !== id);
        setCategoriesData(updatedCategories);
        localStorage.setItem('categories', JSON.stringify(updatedCategories));
      } else {
        alert("Failed to delete category");
      }
    } catch (error) {
      console.error("Error deleting category", error);
      alert("An error occurred while deleting the category");
    }
  };


  const startIndex = (currentPage - 1) * categoriesPerPage;
  const currentCategories = categoriesData.slice(startIndex, startIndex + categoriesPerPage);

  return (
    <div style={{ backgroundColor: '#d2dcfe', padding: '20px', borderRadius: '4px', height: '100%', overflowY: 'auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'black', fontWeight: 'bold' }}>Categories</h1>
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
            <th className='bg-blue-800' style={{ padding: '8px', color: 'white' }}>Name</th>
            <th className='bg-blue-800' style={{ color: 'white', width: '80px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.length > 0 ? (
            currentCategories.map((category) => (
              <tr key={category._id}>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{category.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  <button
                    onClick={() => handleDeleteCategory(category._id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '4px',
                      border: 'none',
                      padding: '6px 8px',
                      cursor: 'pointer'
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', padding: '8px', color: '#666' }}>No categories available</td>
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

      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Categories;
