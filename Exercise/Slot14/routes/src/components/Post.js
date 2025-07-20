import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Alert, Spinner, Badge } from 'react-bootstrap';

function Post() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch('/posts.json');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error loading posts:', error);
                setError('Failed to load posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <p className="mt-2">Loading posts...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">
                    <Alert.Heading>Error Loading Posts</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1 className="text-primary mb-4">📝 Blog Posts</h1>
                    {posts.length === 0 ? (
                        <Alert variant="info">
                            No posts available at the moment.
                        </Alert>
                    ) : (
                        <Row>
                            {posts.map(post => (
                                <Col md={6} lg={4} key={post.id} className="mb-4">
                                    <Card className="h-100 shadow-sm">
                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title as="h5">
                                                <Link
                                                    to={`/post/${post.id}`}
                                                    className="text-decoration-none text-primary"
                                                >
                                                    {post.title}
                                                </Link>
                                            </Card.Title>
                                            <Card.Text className="flex-grow-1">
                                                {post.content.substring(0, 120)}...
                                            </Card.Text>
                                            <div className="mt-auto">
                                                <small className="text-muted">
                                                    By <Badge bg="secondary">{post.author}</Badge>
                                                </small>
                                                <br />
                                                <small className="text-muted">
                                                    📅 {new Date(post.date).toLocaleDateString()}
                                                </small>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Post;