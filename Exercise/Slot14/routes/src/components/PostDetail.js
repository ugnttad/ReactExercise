import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Alert, Spinner, Badge } from 'react-bootstrap';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch('/posts.json');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const foundPost = data.find(p => p.id === id);

        if (!foundPost) {
          setError('Post not found');
        } else {
          setPost(foundPost);
        }
      } catch (error) {
        console.error('Error loading post:', error);
        setError('Failed to load post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading post...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
          <Button as={Link} to="/posts" variant="primary">
            Back to Posts
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => navigate('/posts')}
                >
                  ← Back to Posts
                </Button>
              </div>

              <Card.Title as="h1" className="text-primary mb-3">
                {post.title}
              </Card.Title>

              <div className="mb-4">
                <Badge bg="secondary" className="me-2">
                  👤 {post.author}
                </Badge>
                <Badge bg="light" text="dark">
                  📅 {new Date(post.date).toLocaleDateString()}
                </Badge>
              </div>

              <Card.Text className="lead">
                {post.content}
              </Card.Text>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  Post ID: {post.id}
                </small>
                <div>
                  <Button
                    as={Link}
                    to="/posts"
                    variant="primary"
                    className="me-2"
                  >
                    View All Posts
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => window.history.back()}
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
