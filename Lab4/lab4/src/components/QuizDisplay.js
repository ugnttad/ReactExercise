import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { styles } from '../styles/styles';

const QuizDisplay = () => {
  const {
    questions,
    selectedAnswers,
    setSelectedAnswers,
    showResults,
    setShowResults
  } = useQuiz();

  // useEffect to log questions when they change
  useEffect(() => {
    console.log('Questions updated:', questions);
  }, [questions]);

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer
    });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const getScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleAnswerHover = (e, isSelected, showResults) => {
    if (!showResults && !isSelected) {
      e.target.style.backgroundColor = '#e9ecef';
      e.target.style.transform = 'translateX(4px)';
    }
  };

  const handleAnswerLeave = (e, isSelected, showResults) => {
    if (!showResults && !isSelected) {
      e.target.style.backgroundColor = '#f8f9fa';
      e.target.style.transform = 'translateX(0)';
    }
  };

  const handleButtonHover = (e, canHover) => {
    if (canHover) {
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 8px 25px rgba(79, 172, 254, 0.4)';
    }
  };

  const handleButtonLeave = (e, canHover) => {
    if (canHover) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>🎯 Quiz Questions</h2>
      
      {questions.map((question, questionIndex) => (
        <div key={question.id} style={styles.questionCard}>
          <h3 style={styles.questionTitle}>
            Question {questionIndex + 1}: {question.question}
          </h3>
          
          <div>
            {question.answers.map((answer, answerIndex) => {
              const isSelected = selectedAnswers[questionIndex] === answer;
              const isCorrect = answer === question.correctAnswer;
              
              let answerStyle = {...styles.answerOption, ...styles.answerDefault};
              
              if (showResults) {
                if (isCorrect) {
                  answerStyle = {...styles.answerOption, ...styles.answerCorrect};
                } else if (isSelected && !isCorrect) {
                  answerStyle = {...styles.answerOption, ...styles.answerIncorrect};
                } else {
                  answerStyle = {...styles.answerOption, backgroundColor: '#f8f9fa'};
                }
              } else if (isSelected) {
                answerStyle = {...styles.answerOption, ...styles.answerSelected};
              }
              
              return (
                <label
                  key={answerIndex}
                  style={answerStyle}
                  onMouseEnter={(e) => handleAnswerHover(e, isSelected, showResults)}
                  onMouseLeave={(e) => handleAnswerLeave(e, isSelected, showResults)}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={answer}
                    checked={isSelected}
                    onChange={() => handleAnswerSelect(questionIndex, answer)}
                    disabled={showResults}
                    style={styles.radio}
                  />
                  <span style={styles.answerText}>{answer}</span>
                  {showResults && isCorrect && (
                    <span style={{...styles.statusIcon, color: '#4caf50'}}>✓ Correct</span>
                  )}
                  {showResults && isSelected && !isCorrect && (
                    <span style={{...styles.statusIcon, color: '#f44336'}}>✗ Incorrect</span>
                  )}
                </label>
              );
            })}
          </div>
        </div>
      ))}

      <div style={styles.buttonGroup}>
        {!showResults ? (
          <button
            onClick={checkAnswers}
            disabled={Object.keys(selectedAnswers).length !== questions.length}
            style={{
              ...styles.button,
              ...(Object.keys(selectedAnswers).length !== questions.length 
                ? styles.buttonDisabled 
                : styles.buttonSuccess)
            }}
            onMouseEnter={(e) => handleButtonHover(e, Object.keys(selectedAnswers).length === questions.length)}
            onMouseLeave={(e) => handleButtonLeave(e, Object.keys(selectedAnswers).length === questions.length)}
          >
            🎯 Check Answers
          </button>
        ) : (
          <button
            onClick={resetQuiz}
            style={{...styles.button, ...styles.buttonPrimary}}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonLeave(e, true)}
          >
            🔄 Take Quiz Again
          </button>
        )}
      </div>

      {showResults && (
        <div style={styles.resultCard}>
          <h3 style={styles.resultTitle}>🏆 Quiz Results</h3>
          <p style={styles.resultScore}>
            You scored {getScore()} out of {questions.length} questions correctly!
          </p>
          <p style={{...styles.resultScore, fontSize: '1rem'}}>
            Percentage: {Math.round((getScore() / questions.length) * 100)}%
          </p>
          {getScore() === questions.length && (
            <p style={{...styles.resultScore, color: '#4caf50', fontWeight: 'bold'}}>
              🎉 Perfect Score! Congratulations!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizDisplay;