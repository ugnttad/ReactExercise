// src/components/ContactForm.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        agreeToTerms: false
    });

    const [errors, setErrors] = useState({
        username: 'Please choose a username.',
        city: 'Please provide a valid city.',
        state: 'Please provide a valid state.',
        zip: 'Please provide a valid zip.'
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when user starts typing and field is not empty
        if (value.trim() && errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        } else if (!value.trim() && !errors[name]) {
            // Add error if field becomes empty
            const errorMessages = {
                username: 'Please choose a username.',
                city: 'Please provide a valid city.',
                state: 'Please provide a valid state.',
                zip: 'Please provide a valid zip.'
            };
            if (errorMessages[name]) {
                setErrors({
                    ...errors,
                    [name]: errorMessages[name]
                });
            }
        }

        // Handle terms and conditions
        if (name === 'agreeToTerms') {
            if (checked) {
                setErrors({
                    ...errors,
                    agreeToTerms: ''
                });
            } else {
                setErrors({
                    ...errors,
                    agreeToTerms: 'You must agree before submitting.'
                });
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Please choose a username.';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'Please provide a valid city.';
        }

        if (!formData.state.trim()) {
            newErrors.state = 'Please provide a valid state.';
        }

        if (!formData.zip.trim()) {
            newErrors.zip = 'Please provide a valid zip.';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree before submitting.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };

    const getFieldClass = (fieldName) => {
        if (errors[fieldName]) {
            return 'is-invalid';
        }
        if (formData[fieldName] && !errors[fieldName]) {
            return 'is-valid';
        }
        return '';
    };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px 0' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} md={10}>
                        {/* Navigation */}
                        <nav className="mb-4">
                            <div className="d-flex gap-4">
                                <a href="#" className="text-decoration-none text-dark fw-semibold">Home</a>
                                <a href="#" className="text-decoration-none text-muted">About</a>
                                <a href="#" className="text-decoration-none text-muted">News</a>
                                <a href="#" className="text-decoration-none text-muted">Quiz</a>
                                <span className="text-muted">Contact</span>
                            </div>
                        </nav>

                        {showAlert && (
                            <Alert variant="success" className="mb-4">
                                Form submitted successfully! Thank you for your information.
                            </Alert>
                        )}

                        <div className="bg-white p-4 rounded shadow-sm">
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="text-muted small">First name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="is-valid"
                                                style={{ borderColor: '#28a745' }}
                                            />
                                            <div className="valid-feedback small text-success">
                                                Looks good!
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="text-muted small">Last name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="is-valid"
                                                style={{ borderColor: '#28a745' }}
                                            />
                                            <div className="valid-feedback small text-success">
                                                Looks good!
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group>
                                            <Form.Label className="text-muted small">Username</Form.Label>
                                            <div className="input-group">
                                                <span className="input-group-text" style={{ backgroundColor: '#e9ecef' }}>@</span>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                    className={getFieldClass('username')}
                                                    placeholder="Username"
                                                    style={errors.username ? { borderColor: '#dc3545' } : {}}
                                                />
                                            </div>
                                            {errors.username && (
                                                <div className="small text-danger mt-1">{errors.username}</div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="text-muted small">City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                className={getFieldClass('city')}
                                                placeholder="City"
                                                style={errors.city ? { borderColor: '#dc3545' } : {}}
                                            />
                                            {errors.city && (
                                                <div className="small text-danger mt-1">{errors.city}</div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="text-muted small">State</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                className={getFieldClass('state')}
                                                placeholder="State"
                                                style={errors.state ? { borderColor: '#dc3545' } : {}}
                                            />
                                            {errors.state && (
                                                <div className="small text-danger mt-1">{errors.state}</div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label className="text-muted small">Zip</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="zip"
                                                value={formData.zip}
                                                onChange={handleChange}
                                                className={getFieldClass('zip')}
                                                placeholder="Zip"
                                                style={errors.zip ? { borderColor: '#dc3545' } : {}}
                                            />
                                            {errors.zip && (
                                                <div className="small text-danger mt-1">{errors.zip}</div>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                    <Col>
                                        <Form.Check
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            label="Agree to terms and conditions"
                                            className="text-muted"
                                        />
                                        {errors.agreeToTerms && (
                                            <div className="small text-danger mt-1">{errors.agreeToTerms}</div>
                                        )}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Button
                                            variant="primary"
                                            type="submit"
                                            style={{
                                                backgroundColor: '#007bff',
                                                borderColor: '#007bff',
                                                padding: '8px 16px'
                                            }}
                                        >
                                            Submit form
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactForm;