import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Fetch user accounts from db.json
      const response = await fetch('http://localhost:3000/useraccounts');
      const users = await response.json();
      
      // Find user with matching username and password
      const user = users.find(u => 
        u.username === formData.username && 
        u.password === formData.password
      );
      
      if (user) {
        onLogin(user.username);
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '400px' }}>
        <Card.Header>
          <h4 className="text-center mb-0">Login</h4>
        </Card.Header>
        <Card.Body>
          {loginError && (
            <Alert variant="danger" className="mb-3">
              {loginError}
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                placeholder="Enter username (demo: admin, janesmith, etc.)"
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Enter password (demo: 123)"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Login;