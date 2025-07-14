import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import { Card, Container, Row, Col } from 'react-bootstrap';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    axios.get(`/Laptops/${id}`).then(res => setLaptop(res.data)).catch(() => setLaptop(null));
  }, [id]);

  if (laptop === null) {
    return <h2 className="text-center mt-5">404 Not Found</h2>;
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Img
              variant="top"
              src={laptop.image}
              style={{ height: '300px', objectFit: 'contain', padding: '1rem' }}
            />
            <Card.Body>
              <Card.Title className="mb-3 text-center">{laptop.brand} - {laptop.model}</Card.Title>
              <Card.Text>
                <strong>Year:</strong> {laptop.year}<br />
                <strong>Price:</strong> {laptop.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LaptopDetail;