import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { baseURL } from './../Services/BaseUrl';
import { SubProductsPostUrl } from '../Utils/Constatns';

const SubProductModal = ({ isVisible, onClose, onSubmit }) => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const modalRef = useRef(null);

    // Function to reset form fields
    const resetForm = () => {
        setCode('');
        setName('');
        setQuantity('');
        setPrice('');
        setDescription('');
    };

    // Close modal if clicked outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                resetForm(); // Clear form when modal is closed by clicking outside
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

        // Check if any field is empty before submitting
        if (!code || !name || !quantity || !price || !description) {
            alert("Please fill out all fields.");
            return;
        }

        try {
            // Send POST request to the backend API
            const response = await axios.post(`${baseURL}${SubProductsPostUrl}`, {
                subProductCode: code,
                subProductName: name,
                subProductMinimumQuantity: quantity,
                subProductPrice: price,
                subProductDescription: description
            });

            // Handle success
            if (response.status === 200) {
                alert("SubProduct added successfully");
                onSubmit({ code, name, quantity, price, description }); // Pass the new subproduct to the parent component
                resetForm(); // Clear form after successful submission
                onClose();
            } else {
                alert("Failed to add subproduct");
                console.error("Error adding subproduct", response.data);
            }

        } catch (error) {
            console.error("Error adding subproduct", error);

            if (error.response && error.response.status === 404) {  
                alert("Product code already exists. Please use a different code.");
            } else {
                alert(`Error: ${error.response.data.message || "An error occurred while adding the subproduct"}`);
            }
        }
    };

    return (
        <>
            <div style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div
                    ref={modalRef}
                    style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        width: '80%',
                        maxWidth: '500px',
                        maxHeight: '100%',
                        overflowY: 'auto',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Add Sub-products</h1>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Product Code:
                                    <input
                                        type="text"
                                        name="code"
                                        required
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '4px',
                                            marginTop: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </label>
                            </div>
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
                                            borderRadius: '4px'
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Quantity:
                                    <input
                                        type="number"
                                        name="quantity"
                                        required
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '4px',
                                            marginTop: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </label>
                            </div>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Price:
                                    <input
                                        type="text"
                                        name="price"
                                        required
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        style={{
                                            width: '100%',
                                            padding: '4px',
                                            marginTop: '4px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </label>
                            </div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    required
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '4px',
                                        marginTop: '4px',
                                        border: '1px solid #ccc',
                                        borderRadius: '4px'
                                    }}
                                />
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <button
                                type="button"
                                onClick={() => {
                                    resetForm(); // Clear form when close button is clicked
                                    onClose();
                                }}
                                style={{
                                    backgroundColor: 'red',
                                    color: 'white',
                                    padding: '6px 8px',
                                    border: 'none',
                                    borderRadius: '8px'
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
                                    borderRadius: '8px'
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};


export default SubProductModal;
