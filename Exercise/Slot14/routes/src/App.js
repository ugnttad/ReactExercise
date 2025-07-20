import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Import components
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Post from './components/Post';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Private routes */}
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          />
          <Route
            path="/post/:id"
            element={
              <PrivateRoute>
                <PostDetail />
              </PrivateRoute>
            }
          />

          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="bg-dark text-light text-center py-3 mt-5">
        <Container>
          <small>
            © 2024 React Router Demo | Built with React & Bootstrap
          </small>
        </Container>
      </footer>
    </div>
  );
}

export default App;
