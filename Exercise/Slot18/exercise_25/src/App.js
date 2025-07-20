import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/productList';
import Cart from './components/Cart';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add" element={<ProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;
