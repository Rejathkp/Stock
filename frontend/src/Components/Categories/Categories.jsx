// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const Categories = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const categoriesData = [
//     { name: 'Jhon' },
//     { name: 'Jose' },
//     { name: 'Manu' },
//     { name: 'Annie' },
//   ];

//   const categoriesPerPage = 2;
//   const totalPages = Math.ceil(categoriesData.length / categoriesPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(prevPage => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(prevPage => prevPage - 1);
//     }
//   };

//   const startIndex = (currentPage - 1) * categoriesPerPage;
//   const currentCategories = categoriesData.slice(startIndex, startIndex + categoriesPerPage);

//   return (
//     <div style={{ backgroundColor: '#d2dcfe', padding: '20px', borderRadius: '4px', height: '100%', overflowY: 'auto', width: '100%' }}>
//       <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px'  }}>Categories</h1>
//       <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
//         <thead>
//           <tr>
//             <th className='bg-blue-800' style={{ padding: '8px', color: 'white' }}>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentCategories.map((category, index) => (
//             <tr key={index}>
//               <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{category.name}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           style={{ marginRight: '10px', padding: '8px 8px', borderRadius: '5px', backgroundColor: currentPage === 1 ? 'grey' : 'black', color: 'white', border: 'none' }}
//         >
//           <FaChevronLeft/>
//         </button>
//         <span style={{ margin: '8px', fontSize: '16px', textAlign: 'center' }}>Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//           style={{ padding: '8px 8px', borderRadius: '5px', backgroundColor: currentPage === totalPages ? 'grey' : 'black', color: 'white', border: 'none' }}
//         >
//           <FaChevronRight/>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Categories;





import React, { useState } from 'react';
import Modal from '../../Modal/categoriesModal'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false); 

  const categoriesData = [
    { name: 'Sample 1' },
    { name: 'Sample 2' },
    { name: 'Sample 3' },
    { name: 'Sample 4' },
  ];

  const categoriesPerPage = 2;
  const totalPages = Math.ceil(categoriesData.length / categoriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleOpenModal = () => {
    setModalVisible(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Close the modal
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted', formData);
    handleCloseModal(); // Close modal after submission
  };

  const startIndex = (currentPage - 1) * categoriesPerPage;
  const currentCategories = categoriesData.slice(startIndex, startIndex + categoriesPerPage);

  return (
    <div style={{ backgroundColor: '#d2dcfe', padding: '20px', borderRadius: '4px', height: '100%', overflowY: 'auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'black', fontWeight: 'bold'}}>Categories</h1>
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
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((category, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: '10px', padding: '8px 8px', borderRadius: '5px', backgroundColor: currentPage === 1 ? 'grey' : 'black', color: 'white', border: 'none' }}
        >
          <FaChevronLeft/>
        </button>
        <span style={{ margin: '8px', fontSize: '16px', textAlign: 'center' }}>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ padding: '8px 8px', borderRadius: '5px', backgroundColor: currentPage === totalPages ? 'grey' : 'black', color: 'white', border: 'none' }}
        >
          <FaChevronRight/> 
        </button>
      </div>
      
      {/* Render the Modal component */}
      {isModalVisible && (
        <Modal isVisible={isModalVisible} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Categories;

