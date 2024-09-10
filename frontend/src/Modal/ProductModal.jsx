import React from 'react';

const ProductModal = ({ isVisible, onClose, onSubmit }) => {
    if (!isVisible) return null;

    return (
        <>
        <div style={{
            position: 'fixed',
            top: '0' ,
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                width: '80%',
                maxWidth: '500px',
                maxHeight: '100%',
                overflowY: 'auto',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
                <h1 style={{ color: 'black', fontWeight: 'bold', marginBottom: '20px'  }}>Add Products</h1>
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
                    </div>
                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ flex: '1' }}>
                            <label>
                                Quantity:
                                <input type="number" name="quantity" required style={{ width: '100%', padding: '4px', marginTop: '4px', border: '1px solid #ccc', borderRadius: '4px' }} />
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
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button type="button" onClick={onClose} style={{ backgroundColor: 'red', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
                            Close
                        </button>
                        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '6px 8px', border: 'none', borderRadius: '8px' }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default ProductModal;
