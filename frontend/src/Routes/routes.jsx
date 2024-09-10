import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from '../Pages/adminLoginPage';
import Categories from '../Components/Categories/Categories'; 
import Franchicies from '../Components/Franchicies/Franchicies'; 
import Products from '../Components/Products/Products'; 
import SubProducts from '../Components/SubProducts/SubProducts'; 
import Layout from '../Layout/Layout';

const RoutesComponent = () => {
  return (
    <Router>
      <Layout>    
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/categories" element={<Categories />} /> 
          <Route path="/products" element={<Products/>} /> 
          <Route path="/subproducts" element={< SubProducts/>} /> 
          <Route path="/franchicies" element={< Franchicies/>} /> 
        </Routes>
      </Layout>  
    </Router>
  );
};

export default RoutesComponent;
