import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';

const Layout = ({ children }) => {
  const location = useLocation();

  // Check if the current path is the admin login page
  const isAdminLogin = location.pathname === '/adminLogin';

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Conditionally render Sidebar based on route */}
      {!isAdminLogin && (
        <div style={{ flexBasis: '30%', minWidth: '250px', maxWidth: '30%', backgroundColor: '#4A5568' }}> 
          <Sidebar />
        </div>
      )}

       {/* Main content should take full width when isAdminLogin is true  */}
      <main 
        style={{ 
          flexGrow: 1, 
          padding: isAdminLogin ? '0' : '20px', 
          minWidth: isAdminLogin ? '100%' : '1020px', 
          maxWidth: isAdminLogin ? '100%' : '70%', 
          backgroundColor: '#f9f9f9', 
          overflowY: 'auto' 
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
