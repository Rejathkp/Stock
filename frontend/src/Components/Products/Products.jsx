import React, { useState } from 'react';
import Modal from '../../Modal/ProductModal'; 
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Products = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const productsData = [
        { code: 123, name: 'Product 1', quantity: 20, category: 'Stock', price: '₹299/-', description: 'This is sample desc 1' },
        { code: 124, name: 'Product 2', quantity: 25, category: 'Stock', price: '₹499/-', description: 'This is sample desc 2' },
        { code: 125, name: 'Product 3', quantity: 30, category: 'Stock', price: '₹199/-', description: 'This is sample desc 3' },
        { code: 126, name: 'Product 4', quantity: 10, category: 'Stock', price: '₹399/-', description: 'This is sample desc 4' },
        { code: 127, name: 'Product 5', quantity: 15, category: 'Stock', price: '₹599/-', description: 'This is sample desc 5' },
    ];

    const productsPerPage = 10;
    const totalPages = Math.ceil(productsData.length / productsPerPage);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        handleCloseModal();
    };

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

    // Calculate the products to display on the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = productsData.slice(startIndex, startIndex + productsPerPage);

    return (
        <div style={{ backgroundColor: '#d2dcfe', padding: '20px', borderRadius: '4px', height: '100%', overflowY: 'auto', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1 style={{ color: 'black', fontWeight: 'bold'}}>Products</h1>
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
                        <th className='bg-blue-800' style={{ border: '1px solid #ddd', padding: '8px', color: 'white' }}>Code</th>
                        <th className='bg-blue-800' style={{ border: '1px solid #ddd', padding: '8px', color: 'white' }}>Name</th>
                        <th className='bg-blue-800' style={{ border: '1px solid #ddd', padding: '8px', color: 'white' }}>Quantity</th>
                        <th className='bg-blue-800' style={{ border: '1px solid #ddd', padding: '8px', color: 'white' }}>Category Name</th>
                        <th className='bg-blue-800' style={{ border: '1px solid #ddd', padding: '8px', color: 'white' }}>Price</th>
                        <th className='bg-blue-800' style={{ border: '1px solid #ddd', padding: '8px', color: 'white' }}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{product.code}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{product.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{product.quantity}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{product.category}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{product.price}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', fontSize: '14px' }}>{product.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>    

            {/* Pagination Controls */}
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

            <Modal isVisible={isModalVisible} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default Products;
