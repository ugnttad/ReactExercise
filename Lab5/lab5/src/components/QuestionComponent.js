// src/components/QuestionComponent.js
import React from 'react';
import { Card, Form } from 'react-bootstrap';

const QuestionComponent = ({ question, onAnswer, selectedAnswer }) => {
    const handleOptionChange = (answerIndex) => {
        onAnswer(question.id, answerIndex);
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title className="mb-4">{question.question}</Card.Title>
                {question.options.map((option, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        id={`option-${question.id}-${index}`}
                        name={`question-${question.id}`}
                        label={option}
                        checked={selectedAnswer === index}
                        onChange={() => handleOptionChange(index)}
                        className="mb-2"
                    />
                ))}
            </Card.Body>
        </Card>
    );
};

export default QuestionComponent;