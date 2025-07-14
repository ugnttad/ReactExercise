import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Form, Container } from 'react-bootstrap';
import axios from '../api';
import { Link } from 'react-router-dom';

const LaptopList = () => {
    const [laptops, setLaptops] = useState([]);
    const [allLaptops, setAllLaptops] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('/Laptops').then(res => {
            setAllLaptops(res.data);
            setLaptops(res.data);
        });
    }, []);

    const handleSearch = () => {
        const term = search.trim().toLowerCase();
        if (!term) {
            setLaptops(allLaptops);
            return;
        }

        const filtered = allLaptops.filter(laptop =>
            laptop.brand.toLowerCase().includes(term) ||
            laptop.model.toLowerCase().includes(term)
        );
        setLaptops(filtered);
    };

    return (
        <Container className="py-4">
            <h2 className="mb-4 text-center">Laptop Management</h2>
            <Form
                className="mb-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}
            >
                <Row className="justify-content-center">
                    <Col md={6} className="mb-2">
                        <Form.Control
                            placeholder="Search by brand or model..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
            {laptops.length === 0 && <p className="text-center">No laptops found.</p>}
            <Row>
                {laptops.map(laptop => (
                    <Col key={laptop.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img variant="top" src={laptop.image} style={{ height: '250px', objectFit: 'cover' }} />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{laptop.brand} - {laptop.model}</Card.Title>
                                <Card.Text className="mb-2">{laptop.price} ({laptop.year})</Card.Text>
                                <div className="mt-auto">
                                    <Link to={`/laptops/${laptop.id}`}><Button variant="info" className="w-100">View Details</Button></Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default LaptopList;