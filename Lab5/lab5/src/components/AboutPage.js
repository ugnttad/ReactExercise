// src/components/AboutPage.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const AboutPage = () => {
    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="text-center mb-4">About Us</h1>
                    <Card>
                        <Card.Body>
                            <h3>Our Mission</h3>
                            <p>
                                Welcome to our Quiz Application! We are dedicated to providing an engaging and educational
                                platform where users can test their knowledge across various topics.
                            </p>
                            <h3>What We Offer</h3>
                            <ul>
                                <li>Interactive quizzes on different subjects</li>
                                <li>Latest news and updates</li>
                                <li>Easy-to-use interface</li>
                                <li>Immediate feedback on your answers</li>
                            </ul>
                            <h3>Our Goal</h3>
                            <p>
                                Our goal is to make learning fun and accessible for everyone. Whether you're a student
                                looking to test your knowledge or someone who enjoys challenging trivia, our platform
                                has something for you.
                            </p>
                            <h3>Technology Stack</h3>
                            <p>
                                This application is built using React.js with React Router for navigation and
                                React Bootstrap for styling. We focus on creating a responsive and user-friendly experience.
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default AboutPage;