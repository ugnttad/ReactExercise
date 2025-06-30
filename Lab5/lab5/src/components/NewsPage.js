import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { newLists } from '../Data/newsData.js';

const NewsPage = () => {
    return (
        <Container className="py-4">
            <h1 className="text-center mb-5">Latest News</h1>
            <Row>
                {newLists.map((news) => (
                    <Col key={news.id} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <div
                                className="d-flex justify-content-center align-items-center bg-light"
                                style={{ height: '200px' }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={news.images}
                                    alt={news.title}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="h6 mb-3">
                                    {news.title}
                                </Card.Title>
                                <Card.Text className="flex-grow-1 text-muted small">
                                    {news.description}
                                </Card.Text>
                              <Card.Link href={news.URL}>
                                {news.title}                    
                              </Card.Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default NewsPage;