import React, { useState, useEffect } from 'react';
import { Card, Button, Alert, Spinner, Modal, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const PostList = ({ username, onLogout }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
        // Show login success message
        setShowSuccessMessage(true);
        const timer = setTimeout(() => setShowSuccessMessage(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);
            setError('');
        } catch (err) {
            setError('Error fetching posts');
            console.error('Error fetching posts:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = (post) => {
        setPostToDelete(post);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        if (!postToDelete) return;

        try {
            await axios.delete(`http://localhost:3000/posts/${postToDelete.id}`);
            setPosts(posts.filter(post => post.id !== postToDelete.id));
            setShowDeleteModal(false);
            setPostToDelete(null);
        } catch (err) {
            setError('Error deleting post');
            console.error('Error deleting post:', err);
        }
    };

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-4">
                <Navbar.Brand>Post Management</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link disabled>Welcome, {username}!</Nav.Link>
                    <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar>

            {showSuccessMessage && (
                <Alert variant="success" className="mb-4">
                    Login successfully with username: {username}
                </Alert>
            )}

            {error && (
                <Alert variant="danger" className="mb-4">
                    {error}
                </Alert>
            )}

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Posts List</h2>
                <Button as={Link} to="/create" variant="primary">
                    Create New Post
                </Button>
            </div>

            {posts.length === 0 ? (
                <Alert variant="info">No posts available</Alert>
            ) : (
                <div className="row">
                    {posts.map(post => (
                        <div key={post.id} className="col-md-6 col-lg-4 mb-4">
                            <Card className="h-100">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text className="flex-grow-1">
                                        {post.content}
                                    </Card.Text>
                                    <div className="d-flex gap-2 mt-auto">
                                        <Button
                                            as={Link}
                                            to={`/edit/${post.id}`}
                                            variant="outline-primary"
                                            size="sm"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            size="sm"
                                            onClick={() => handleDeleteClick(post)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            )}

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete the post "{postToDelete?.title}"?
                    This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

PostList.propTypes = {
    username: PropTypes.string.isRequired,
    onLogout: PropTypes.func.isRequired
};

export default PostList;