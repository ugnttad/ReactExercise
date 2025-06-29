import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={8} className="mx-auto">
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title as="h1" className="display-4 text-primary">
                                Welcome to React Router Demo
                            </Card.Title>
                            <Card.Text className="lead">
                                This is a comprehensive demo application showcasing React Router features
                                including routing, navigation, authentication, and dynamic content loading.
                            </Card.Text>
                            <div className="mt-4">
                                <Button as={Link} to="/posts" variant="primary" size="lg" className="me-3">
                                    View Posts
                                </Button>
                                <Button as={Link} to="/about" variant="outline-primary" size="lg">
                                    Learn More
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>🚀 Modern Routing</Card.Title>
                            <Card.Text>
                                Experience smooth navigation with React Router's client-side routing.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>📱 Responsive Design</Card.Title>
                            <Card.Text>
                                Built with React Bootstrap for a beautiful, responsive interface.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>🔐 Authentication</Card.Title>
                            <Card.Text>
                                Secure routes with authentication and protected navigation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;