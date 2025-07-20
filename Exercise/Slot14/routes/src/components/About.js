import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="mx-auto">
                    <Card>
                        <Card.Body>
                            <Card.Title as="h1" className="text-primary">About This Application</Card.Title>
                            <Card.Text className="lead">
                                This React Router demonstration showcases the power of client-side routing
                                in modern web applications.
                            </Card.Text>

                            <h3 className="mt-4">Key Features:</h3>
                            <ul className="list-unstyled">
                                <li>✅ <strong>React Router v6:</strong> Latest routing capabilities</li>
                                <li>✅ <strong>Dynamic Routes:</strong> Parameterized URLs for content</li>
                                <li>✅ <strong>Protected Routes:</strong> Authentication-based navigation</li>
                                <li>✅ <strong>Data Fetching:</strong> Loading content from JSON files</li>
                                <li>✅ <strong>Responsive Design:</strong> Bootstrap-powered UI</li>
                                <li>✅ <strong>Error Handling:</strong> Graceful error management</li>
                            </ul>

                            <h3 className="mt-4">Technologies Used:</h3>
                            <ul className="list-unstyled">
                                <li>🔹 React 18</li>
                                <li>🔹 React Router v6</li>
                                <li>🔹 React Bootstrap</li>
                                <li>🔹 JavaScript ES6+</li>
                                <li>🔹 CSS3 & Bootstrap 5</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;