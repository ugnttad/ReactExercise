// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Carousel } from 'react-bootstrap';
import { slides } from '../Data/slidesData.js';

const HomePage = () => {
    return (
        <Container>
            <h1 className="text-center mb-4">Welcome to Quiz Application</h1>
            <Carousel>
                {slides.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <div className="d-flex justify-content-center">
                            <div style={{
                                width: '100%',
                                height: '400px',
                                backgroundColor: '#f8f9fa',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px'
                            }}>
                                <div className="text-center">
                                    <div className="mb-3" style={{ fontSize: '4rem', color: '#6c757d' }}></div>
                                <img src={slide.image}></img>
                                </div>
                            </div>
                        </div>
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="text-center mt-4">
                <Link to="/quiz">
                    <Button variant="primary" size="lg">Start Quiz</Button>
                </Link>
            </div>
        </Container>
    );
};

export default HomePage;