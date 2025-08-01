import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const EditPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [loadError, setLoadError] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPost();
    }, [id]);

    const fetchPost = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:3000/posts/${id}`);

            if (response.data) {
                setFormData({
                    title: response.data.title || '',
                    content: response.data.content || ''
                });
                setLoadError('');
            } else {
                setLoadError('Post not found');
            }
        } catch (err) {
            setLoadError('Error loading post');
            console.error('Error loading post:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        } else if (formData.title.trim().length < 3) {
            newErrors.title = 'Title must be at least 3 characters';
        }

        if (!formData.content.trim()) {
            newErrors.content = 'Content is required';
        } else if (formData.content.trim().length < 10) {
            newErrors.content = 'Content must be at least 10 characters';
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
        setSubmitError('');

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await axios.put(`http://localhost:3000/posts/${id}`, {
                title: formData.title.trim(),
                content: formData.content.trim()
            });

            navigate('/posts');
        } catch (err) {
            setSubmitError('Error updating post. Please try again.');
            console.error('Error updating post:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    if (loadError) {
        return (
            <Alert variant="danger">
                {loadError}
                <div className="mt-2">
                    <Button as={Link} to="/posts" variant="primary">
                        Back to Posts
                    </Button>
                </div>
            </Alert>
        );
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <Card>
                    <Card.Header>
                        <h4 className="mb-0">Edit Post</h4>
                    </Card.Header>
                    <Card.Body>
                        {submitError && (
                            <Alert variant="danger" className="mb-3">
                                {submitError}
                            </Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    isInvalid={!!errors.title}
                                    placeholder="Enter post title"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.title}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Content</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    isInvalid={!!errors.content}
                                    placeholder="Enter post content"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.content}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-flex gap-2">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Updating...' : 'Update Post'}
                                </Button>
                                <Button
                                    as={Link}
                                    to="/posts"
                                    variant="secondary"
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default EditPost;