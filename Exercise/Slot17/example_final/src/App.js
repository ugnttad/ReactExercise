// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import PrivateRoute from './PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route path="/laptops" element={<PrivateRoute user={user}><LaptopList /></PrivateRoute>} />
        <Route path="/laptops/:id" element={<PrivateRoute user={user}><LaptopDetail /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;