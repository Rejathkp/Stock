// import React, { useState } from 'react';
// import Categories from '../Components/Categories/Categories';
// import Products from '../Components/Products/Products';
// import SubProducts from '../Components/SubProducts/SubProducts';

// const AdminDashboard = () => {
//   const [activeSection, setActiveSection] = useState('categories'); 

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     height: '100vh',
//     fontFamily: 'Arial, sans-serif',
//     overflow: 'hidden',
//   };

//   const dashboardStyle = {
//     width: '80%',
//     maxHeight: '90vh',
//     backgroundColor: '#000000',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     display: 'flex',
//     flexDirection: 'row',
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     ...(window.innerWidth <= 768 ? { flexDirection: 'column', width: '95%', padding: '10px' } : {}),
//   };

//   const sidebarStyle = {
//     width: '250px',
//     backgroundColor: '#ffffff',
//     color: 'black',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//     borderRadius: '8px 0 0 8px',
//     ...(window.innerWidth <= 768 ? { width: '100%', borderRadius: '8px 8px 0 0', padding: '10px' } : {}),
//   };

//   const sidebarTitleStyle = {
//     marginBottom: '20px',
//     fontSize: '20px',
//     fontWeight: 'bold',
//   };

//   const menuStyle = {
//     listStyleType: 'none',
//     padding: 0,
//     width: '100%',
//   };

//   const menuItemStyle = {
//     padding: '10px 20px',
//     cursor: 'pointer',
//     borderBottom: '1px solid #34495e',
//     ...(window.innerWidth <= 480 ? { padding: '8px 16px' } : {}),
//   };

//   const contentStyle = {
//     flex: 1,
//     padding: '20px',
//     overflowY: 'auto',
//     maxHeight: 'calc(90vh - 40px)', 
//     ...(window.innerWidth <= 768 ? { width: '100%', padding: '10px' } : {}),
//     ...(window.innerWidth <= 480 ? { padding: '8px' } : {}),
//   };

//   return (
//     <div style={containerStyle}>
//       <div className="admin-dashboard" style={dashboardStyle}>
//         <div style={sidebarStyle}>
//           <div style={sidebarTitleStyle}>Admin Dashboard</div>
//           <ul style={menuStyle}>
//             <li onClick={() => setActiveSection('categories')} style={menuItemStyle}>Categories</li>
//             <li onClick={() => setActiveSection('products')} style={menuItemStyle}>Products</li>
//             <li onClick={() => setActiveSection('subProducts')} style={menuItemStyle}>Sub Products</li>
//           </ul>
//         </div>
//         <div className="content" style={contentStyle}>
//           {activeSection === 'categories' && <Categories />}
//           {activeSection === 'products' && <Products />}
//           {activeSection === 'subProducts' && <SubProducts />}
//         </div>
//       </div> 
//     </div>
//   );
// };

// export default AdminDashboard;


