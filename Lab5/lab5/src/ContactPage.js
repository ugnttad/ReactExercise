// src/components/ContactPage.js
import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="text-center mb-4">Contact Us</h1>
                    {showAlert && (
                        <Alert variant="success">
                            Thank you for your message! We'll get back to you soon.
                        </Alert>
                    )}
                    <Card>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Enter your message"
                                        required
                                    />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className="mt-4">
                        <Card.Body>
                            <h5>Contact Information</h5>
                            <p><strong>Email:</strong> info@quizapp.com</p>
                            <p><strong>Phone:</strong> +84 123 456 789</p>
                            <p><strong>Address:</strong> 123 Quiz Street, Education District, Ho Chi Minh City</p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default ContactPage;