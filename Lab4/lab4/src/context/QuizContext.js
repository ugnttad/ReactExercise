import React, { createContext, useContext, useState } from 'react';
import { initialQuizData } from '../data/quizData';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialQuizData);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);

  const value = {
    questions,
    setQuestions,
    selectedAnswers,
    setSelectedAnswers,
    newQuestion,
    setNewQuestion,
    newAnswers,
    setNewAnswers,
    correctAnswer,
    setCorrectAnswer,
    showResults,
    setShowResults
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};