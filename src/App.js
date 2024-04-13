//import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm'; // Make sure to import the LoginForm component
import NavbarMenu from './components/NavbarMenu';
import Products from './components/Products';
import CartPage from './components/CartPage';


function App() {

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };
  return (
    <Router>
      <div >
        <Routes>
        
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/LoginForm" element={<LoginForm />} /> 
        <Route path="/CartPage" element={<CartPage handleAddToCart={handleAddToCart} />} />
        <Route path="/NavBarMenu" element={<NavbarMenu />} />{/* Corrected path */}
        <Route path="/Products" element={<Products handleAddToCart={handleAddToCart} />} />
      
        </Routes>
      </div>
    </Router>
    
  );
}




export default App;
