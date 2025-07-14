import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import Login from './components/Login';

// Lazy loading components
const PostList = lazy(() => import('./components/PostList'));
const CreatePost = lazy(() => import('./components/CreatePost'));
const EditPost = lazy(() => import('./components/EditPost'));

// Loading component
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <Container className="mt-4">
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/posts" replace />
              )
            } 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/posts" : "/login"} replace />} 
          />
          <Route 
            path="/posts" 
            element={
              isAuthenticated ? (
                <Suspense fallback={<LoadingSpinner />}>
                  <PostList username={username} onLogout={handleLogout} />
                </Suspense>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/create" 
            element={
              isAuthenticated ? (
                <Suspense fallback={<LoadingSpinner />}>
                  <CreatePost />
                </Suspense>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
          <Route 
            path="/edit/:id" 
            element={
              isAuthenticated ? (
                <Suspense fallback={<LoadingSpinner />}>
                  <EditPost />
                </Suspense>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;