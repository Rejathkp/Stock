// import React from 'react';

// const ProductModal = ({ isVisible, onClose, onSubmit }) => {
//     if (!isVisible) return null;

//     return (
//         <>
//             <div style={{
//                 position: 'fixed',
//                 top: '0',
//                 left: '0',
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <div style={{
//                     backgroundColor: 'white',
//                     padding: '20px',
//                     borderRadius: '8px',
//                     width: '80%',
//                     maxWidth: '500px',
//                     maxHeight: '100%',
//                     overflowY: 'auto',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//                 }}>
//                     <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Add Products</h1>
//                     <form onSubmit={onSubmit}>
//                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Product Code:
//                                     <input type="text" name="code" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Name:
//                                     <input type="text" name="name" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Quantity:
//                                     <input type="number" name="quantity" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>

//                         </div>
//                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Category Name:
//                                     <input type="text" name="name" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Price:
//                                     <input type="text" name="price" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                         </div>
//                         <div style={{ marginBottom: '10px' }}>
//                             <label>
//                                 Description:
//                                 <textarea name="description" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                             </label>
//                         </div>
//                         <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
//                             <button type="button" onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
//                                 Close
//                             </button>
//                             <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductModal;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductModal = ({ isVisible, onClose, onSubmit }) => {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');

//     useEffect(() => {
//         if (isVisible) {
//             fetchCategories();
//         }
//     }, [isVisible]);

//     useEffect(() => {
//         console.log('Categories state updated:', categories);
//     }, [categories]);

//     const fetchCategories = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/categories/listcategory'); // Replace with your actual API endpoint
//             console.log('API response:', response.data); // Log the API response for debugging

//             // Check if the response data is an object with a data property that is an array
//             if (response.data && Array.isArray(response.data.data)) {
//                 setCategories(response.data.data);
//             } else {
//                 console.error('Expected an object with a data property containing an array of categories');
//                 setCategories([]);
//             }
//         } catch (error) {
//             console.error('Failed to fetch categories:', error);
//             setCategories([]);
//         }
//     };

//     if (!isVisible) return null;

//     return (
//         <>
//             <div style={{
//                 position: 'fixed',
//                 top: '0',
//                 left: '0',
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <div style={{
//                     backgroundColor: 'white',
//                     padding: '20px',
//                     borderRadius: '8px',
//                     width: '80%',
//                     maxWidth: '500px',
//                     maxHeight: '100%',
//                     overflowY: 'auto',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//                 }}>
//                     <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Add Products</h1>
//                     <form onSubmit={onSubmit}>
//                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Product Code:
//                                     <input type="text" name="code" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Name:
//                                     <input type="text" name="name" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Quantity:
//                                     <input type="number" name="quantity" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                         </div>
//                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Category Name:
//                                     <select
//                                         name="category"
//                                         value={selectedCategory}
//                                         onChange={(e) => setSelectedCategory(e.target.value)}
//                                         required
//                                         style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
//                                     >
//                                         <option value="">Select a category</option>
//                                         {categories.length > 0 ? (
//                                             categories.map(category => (
//                                                 <option key={category.id} value={category.name}>
//                                                     {category.name}
//                                                 </option>
//                                             ))
//                                         ) : (
//                                             <option value="">No categories available</option>
//                                         )}
//                                     </select>
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Price:
//                                     <input type="text" name="price" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                         </div>
//                         <div style={{ marginBottom: '10px' }}>
//                             <label>
//                                 Description:
//                                 <textarea name="description" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                             </label>
//                         </div>
//                         <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
//                             <button type="button" onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
//                                 Close
//                             </button>
//                             <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductModal;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const ProductModal = ({ isVisible, onClose, onSubmit }) => {
//     const [categories, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [subproducts, setSubproducts] = useState([{ name: '', quantity: '' }]);

//     useEffect(() => {
//         if (isVisible) {
//             fetchCategories();
//         }
//     }, [isVisible]);

//     useEffect(() => {
//         console.log('Categories state updated:', categories);
//     }, [categories]);

//     const fetchCategories = async () => {
//         try {
//             const response = await axios.get('http://localhost:4000/categories/listcategory'); // Replace with your actual API endpoint
//             console.log('API response:', response.data); // Log the API response for debugging

//             if (response.data && Array.isArray(response.data.data)) {
//                 setCategories(response.data.data);
//             } else {
//                 console.error('Expected an object with a data property containing an array of categories');
//                 setCategories([]);
//             }
//         } catch (error) {
//             console.error('Failed to fetch categories:', error);
//             setCategories([]);
//         }
//     };

//     const handleSubproductChange = (index, field, value) => {
//         const updatedSubproducts = [...subproducts];
//         updatedSubproducts[index][field] = value;
//         setSubproducts(updatedSubproducts);
//     };

//     const handleAddSubproduct = () => {
//         setSubproducts([...subproducts, { name: '', quantity: '' }]);
//     };

//     const handleRemoveSubproduct = (index) => {
//         const updatedSubproducts = subproducts.filter((_, i) => i !== index);
//         setSubproducts(updatedSubproducts);
//     };

//     if (!isVisible) return null;

//     return (
//         <>
//             <div style={{
//                 position: 'fixed',
//                 top: '0',
//                 left: '0',
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <div style={{
//                     backgroundColor: 'white',
//                     padding: '20px',
//                     borderRadius: '8px',
//                     width: '80%',
//                     maxWidth: '500px',
//                     maxHeight: '100%',
//                     overflowY: 'auto',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
//                 }}>
//                     <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Add Products</h1>
//                     <form onSubmit={onSubmit}>
//                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Product Code:
//                                     <input type="text" name="code" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Name:
//                                     <input type="text" name="name" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Quantity:
//                                     <input type="number" name="quantity" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                         </div>
//                         <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Category Name:
//                                     <select
//                                         name="category"
//                                         value={selectedCategory}
//                                         onChange={(e) => setSelectedCategory(e.target.value)}
//                                         required
//                                         style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
//                                     >
//                                         <option value="">Select a category</option>
//                                         {categories.length > 0 ? (
//                                             categories.map(category => (
//                                                 <option key={category.id} value={category.name}>
//                                                     {category.name}
//                                                 </option>
//                                             ))
//                                         ) : (
//                                             <option value="">No categories available</option>
//                                         )}
//                                     </select>
//                                 </label>
//                             </div>
//                             <div style={{ flex: '1' }}>
//                                 <label>
//                                     Price:
//                                     <input type="text" name="price" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                                 </label>
//                             </div>
//                         </div>
//                         <div style={{ marginBottom: '10px' }}>
//                             <label>
//                                 Description:
//                                 <textarea name="description" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
//                             </label>
//                         </div>
//                         <div style={{ marginBottom: '10px' }}>
//                             <h3>Subproducts</h3>
//                             {subproducts.map((subproduct, index) => (
//                                 <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
//                                     <div style={{ flex: '1' }}>
//                                         <label>
//                                             Subproduct Name:
//                                             <input
//                                                 type="text"
//                                                 value={subproduct.name}
//                                                 onChange={(e) => handleSubproductChange(index, 'name', e.target.value)}
//                                                 style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
//                                             />
//                                         </label>
//                                     </div>
//                                     <div style={{ flex: '1' }}>
//                                         <label>
//                                             Quantity:
//                                             <input
//                                                 type="number"
//                                                 value={subproduct.quantity}
//                                                 onChange={(e) => handleSubproductChange(index, 'quantity', e.target.value)}
//                                                 style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
//                                             />
//                                         </label>
//                                     </div>
//                                     <button
//                                         type="button"
//                                         onClick={() => handleRemoveSubproduct(index)}
//                                         style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '26px' }}
//                                     >
//                                         <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '18px' }} />
//                                     </button>
//                                 </div>
//                             ))}
//                             <button
//                                 type="button"
//                                 onClick={handleAddSubproduct}
//                                 style={{ backgroundColor: 'blue', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '4px' }}
//                             >
//                                 Add More Subproducts
//                             </button>
//                         </div>
//                         <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
//                             <button type="button" onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
//                                 Close
//                             </button>
//                             <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductModal;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ProductModal = ({ isVisible, onClose, onSubmit }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subproducts, setSubproducts] = useState([{ name: '', quantity: '' }]);

    useEffect(() => {
        if (isVisible) {
            fetchCategories();
        }
    }, [isVisible]);

    useEffect(() => {
        console.log('Categories state updated:', categories);
    }, [categories]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:4000/categories/listcategory');
            console.log('API response:', response.data);

            if (response.data && Array.isArray(response.data.data)) {
                setCategories(response.data.data);
            } else {
                console.error('Expected an object with a data property containing an array of categories');
                setCategories([]);
            }
        } catch (error) {
            console.error('Failed to fetch categories:', error);
            setCategories([]);
        }
    };

    const handleSubproductChange = (index, field, value) => {
        const updatedSubproducts = [...subproducts];
        updatedSubproducts[index][field] = value;
        setSubproducts(updatedSubproducts);
    };

    const handleAddSubproduct = () => {
        setSubproducts([...subproducts, { name: '', quantity: '' }]);
    };

    const handleRemoveSubproduct = (index) => {
        const updatedSubproducts = subproducts.filter((_, i) => i !== index);
        setSubproducts(updatedSubproducts);
    };

    if (!isVisible) return null;

    const handleOverlayClick = (e) => {
        // Close modal if clicked outside the modal content
        onClose();
    };

    const handleModalClick = (e) => {
        // Prevent closing when clicking inside the modal
        e.stopPropagation();
    };

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={handleOverlayClick}  // Close when clicking on overlay
            >
                <div
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
                    onClick={handleModalClick} // Prevent closing when clicking inside modal
                >
                    <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }}>Add Products</h1>
                    <form onSubmit={onSubmit}>
                    <form onSubmit={onSubmit}>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Product Code:
                                    <input type="text" name="code" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Name:
                                    <input type="text" name="name" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </label>
                            </div>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Quantity:
                                    <input type="number" name="quantity" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </label>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Category Name:
                                    <select
                                        name="category"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        required
                                        style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
                                    >
                                        <option value="">Select a category</option>
                                        {categories.length > 0 ? (
                                            categories.map(category => (
                                                <option key={category.id} value={category.name}>
                                                    {category.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">No categories available</option>
                                        )}
                                    </select>
                                </label>
                            </div>
                            <div style={{ flex: '1' }}>
                                <label>
                                    Price:
                                    <input type="text" name="price" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                </label>
                            </div>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>
                                Description:
                                <textarea name="description" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
                            </label>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <h3 className='font-bold'>Subproducts</h3>
                            {subproducts.map((subproduct, index) => (
                                <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px', alignItems: 'center' }}>
                                    <div style={{ flex: '1' }}>
                                        <label>
                                            Subproduct Name:
                                            <input
                                                type="text"
                                                value={subproduct.name}
                                                onChange={(e) => handleSubproductChange(index, 'name', e.target.value)}
                                                style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
                                            />
                                        </label>
                                    </div>
                                    <div style={{ flex: '1' }}>
                                        <label>
                                            Quantity:
                                            <input
                                                type="number"
                                                value={subproduct.quantity}
                                                onChange={(e) => handleSubproductChange(index, 'quantity', e.target.value)}
                                                style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }}
                                            />
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveSubproduct(index)}
                                        style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginTop: '26px' }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '18px' }} />
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddSubproduct}
                                style={{ backgroundColor: 'blue', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '4px' }}
                            >
                                Add More Subproducts
                            </button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                            <button type="button" onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
                                Close
                            </button>
                            <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
                                Submit
                            </button>
                        </div>
                    </form>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;
