// src/components/QuizPage.js
import React, { useState } from 'react';
import { Container, Button, Alert, Card, ProgressBar } from 'react-bootstrap';
import QuestionComponent from './QuestionComponent';
import { quizQuestions } from '../Data/quizData.js';

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswer = (questionId, answerIndex) => {
        setAnswers({
            ...answers,
            [questionId]: answerIndex
        });
    };

    const nextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScore();
        }
    };

    const previousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const calculateScore = () => {
        let correctAnswers = 0;
        quizQuestions.forEach(question => {
            if (answers[question.id] === question.correctAnswer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowResults(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers({});
        setShowResults(false);
        setScore(0);
    };

    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    if (showResults) {
        return (
            <Container>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <Card className="text-center">
                            <Card.Body>
                                <h2>Quiz Results</h2>
                                <Alert variant={score >= 3 ? "success" : "warning"}>
                                    <h4>Your Score: {score} / {quizQuestions.length}</h4>
                                    <p>
                                        {score >= 4 ? "Excellent work! 🎉" :
                                            score >= 3 ? "Good job! 👍" :
                                                "Keep practicing! 📚"}
                                    </p>
                                </Alert>
                                <div className="mt-4">
                                    <h5>Review your answers:</h5>
                                    {quizQuestions.map((question, index) => (
                                        <div key={question.id} className="text-start mb-2">
                                            <small>
                                                <strong>Q{index + 1}:</strong> {question.question}
                                            </small>
                                            <br />
                                            <small className={answers[question.id] === question.correctAnswer ? "text-success" : "text-danger"}>
                                                Your answer: {question.options[answers[question.id]] || "Not answered"}
                                                {answers[question.id] === question.correctAnswer ? " ✓" : " ✗"}
                                            </small>
                                            {answers[question.id] !== question.correctAnswer && (
                                                <div>
                                                    <small className="text-success">
                                                        Correct answer: {question.options[question.correctAnswer]}
                                                    </small>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <Button variant="primary" onClick={resetQuiz} className="mt-3">
                                    Take Quiz Again
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="text-center mb-4">React Quiz</h1>

                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                            <span>{Math.round(progress)}% Complete</span>
                        </div>
                        <ProgressBar now={progress} />
                    </div>

                    <QuestionComponent
                        question={quizQuestions[currentQuestion]}
                        onAnswer={handleAnswer}
                        selectedAnswer={answers[quizQuestions[currentQuestion].id]}
                    />

                    <div className="d-flex justify-content-between mt-4">
                        <Button
                            variant="outline-secondary"
                            onClick={previousQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="primary"
                            onClick={nextQuestion}
                            disabled={answers[quizQuestions[currentQuestion].id] === undefined}
                        >
                            {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next'}
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default QuizPage;