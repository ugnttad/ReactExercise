import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from '../api';
import { Form, Button, Modal, Alert, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loginName, setLoginName] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(`/UserAccounts?username=${username}&password=${password}`);
        if (res.data.length > 0) {
            setLoginName(username);
            setShowModal(true);
            setUser(res.data[0]);
            setError(false);
            setTimeout(() => {
                setShowModal(false);
                navigate('/laptops');
            }, 1500);
        } else {
            setError(true);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="text-center mb-3">Laptop login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Login</Button>
                    {error && <Alert variant="danger" className="mt-3">Invalid username or password!</Alert>}
                </Form>
            </Card>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center">Welcome, {loginName}! Login Successful!</Modal.Body>
            </Modal>
        </Container>
    );
}

LoginForm.propTypes = {
    setUser: PropTypes.func.isRequired
};

export default LoginForm;