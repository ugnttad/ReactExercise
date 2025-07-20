import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quiz from './features/quiz/Quiz';
import QuizReview from './features/quiz/quizReview';
import QuizResult from './features/quiz/quizResult';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ maxWidth: 950, margin: '0 auto', padding: 32 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/quiz" />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/review" element={<QuizReview />} />
          <Route path="/quiz/result" element={<QuizResult />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
