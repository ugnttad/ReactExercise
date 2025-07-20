import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { styles } from '../styles/styles';

const QuestionInput = () => {
  const {
    questions,
    setQuestions,
    newQuestion,
    setNewQuestion,
    newAnswers,
    setNewAnswers,
    correctAnswer,
    setCorrectAnswer
  } = useQuiz();

  const handleAnswerChange = (index, value) => {
    const updatedAnswers = [...newAnswers];
    updatedAnswers[index] = value;
    setNewAnswers(updatedAnswers);
  };

  const addQuestion = () => {
    if (newQuestion && newAnswers.every(answer => answer.trim()) && correctAnswer) {
      const newQuestionObj = {
        id: Date.now(), // Simple ID generation
        question: newQuestion,
        answers: [...newAnswers],
        correctAnswer: correctAnswer
      };
      
      setQuestions([...questions, newQuestionObj]);
      
      // Reset form
      setNewQuestion('');
      setNewAnswers(['', '', '']);
      setCorrectAnswer('');
      
      alert('Question added successfully! 🎉');
    } else {
      alert('Please fill in all fields! ⚠️');
    }
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#667eea';
    e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e1e5e9';
    e.target.style.boxShadow = 'none';
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>📝 Add New Question</h2>
      
      <div style={styles.inputGroup}>
        <label style={styles.label}>Question:</label>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          style={styles.input}
          placeholder="Enter your question here..."
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Answer Options:</label>
        {newAnswers.map((answer, index) => (
          <input
            key={index}
            type="text"
            value={answer}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            style={{...styles.input, marginBottom: '0.5rem'}}
            placeholder={`Answer option ${index + 1}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        ))}
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Correct Answer:</label>
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          style={styles.select}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        >
          <option value="">Select the correct answer</option>
          {newAnswers.map((answer, index) => (
            answer && <option key={index} value={answer}>{answer}</option>
          ))}
        </select>
      </div>

      <button
        onClick={addQuestion}
        style={{...styles.button, ...styles.buttonPrimary}}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        ➕ Add Question
      </button>
    </div>
  );
};

export default QuestionInput;