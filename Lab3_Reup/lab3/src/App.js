import React, { useState } from 'react';

// CSS Styles
const styles = `
  /* Global Styles */
  .app-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* Welcome Screen */
  .welcome-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 40px;
    max-width: 400px;
    text-align: center;
    transform: translateY(0);
    animation: slideUp 0.6s ease-out;
  }

  .welcome-header {
    margin-bottom: 30px;
  }

  .welcome-icon {
    font-size: 80px;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
  }

  .welcome-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .welcome-subtitle {
    color: #718096;
    font-size: 1.1rem;
  }

  .quiz-info {
    background: #f7fafc;
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    text-align: left;
  }

  .quiz-info-title {
    font-weight: 700;
    margin-bottom: 15px;
    color: #2d3748;
  }

  .quiz-info-list {
    list-style: none;
    padding: 0;
    color: #4a5568;
    line-height: 1.8;
  }

  .start-button {
    width: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .start-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }

  /* Question Container */
  .question-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 40px;
    max-width: 700px;
    width: 100%;
    animation: slideUp 0.6s ease-out;
  }

  .question-header {
    margin-bottom: 30px;
  }

  .question-title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .question-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
  }

  .question-badge {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .progress-bar-container {
    width: 100%;
    height: 8px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 10px;
    transition: width 0.5s ease;
  }

  .question-text {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  .options-container {
    margin-bottom: 30px;
  }

  .option-item {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 2px solid #e2e8f0;
    border-radius: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: white;
  }

  .option-item:hover {
    border-color: #a0aec0;
    background: #f7fafc;
    transform: translateX(5px);
  }

  .option-selected {
    border-color: #667eea !important;
    background: linear-gradient(135deg, #667eea0f, #764ba20f) !important;
    transform: translateX(10px) !important;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
  }

  .option-radio {
    margin-right: 15px;
    width: 20px;
    height: 20px;
    accent-color: #667eea;
  }

  .option-text {
    color: #2d3748;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .submit-enabled {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .submit-enabled:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }

  .submit-disabled {
    background: #e2e8f0;
    color: #a0aec0;
    cursor: not-allowed;
  }

  /* Result Container */
  .result-container {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 40px;
    max-width: 400px;
    text-align: center;
    animation: slideUp 0.6s ease-out;
  }

  .result-header {
    margin-bottom: 30px;
  }

  .result-icon {
    font-size: 80px;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
  }

  .result-message {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  .result-excellent { color: #38a169; }
  .result-good { color: #3182ce; }
  .result-average { color: #d69e2e; }
  .result-poor { color: #e53e3e; }

  .result-subtitle {
    color: #718096;
    font-size: 1.1rem;
  }

  .result-score {
    margin-bottom: 30px;
  }

  .score-number {
    font-size: 3rem;
    font-weight: 800;
    color: #2d3748;
    margin-bottom: 10px;
  }

  .score-label {
    font-size: 1.1rem;
    color: #718096;
    margin-bottom: 15px;
  }

  .score-percentage {
    font-size: 2rem;
    font-weight: 700;
  }

  .result-actions {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .restart-button {
    width: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .restart-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }

  .share-button {
    width: 100%;
    background: #f7fafc;
    color: #2d3748;
    padding: 15px 30px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .share-button:hover {
    background: #edf2f7;
    border-color: #cbd5e0;
    transform: translateY(-2px);
  }

  /* Animations */
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .app-container {
      padding: 10px;
    }
    
    .question-container,
    .welcome-container,
    .result-container {
      padding: 25px;
    }
    
    .welcome-title {
      font-size: 2rem;
    }
    
    .question-text {
      font-size: 1.1rem;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// Component Question để hiển thị câu hỏi và các lựa chọn
const Question = ({ question, options, selectedAnswer, onAnswerSelect, onSubmit, questionNumber, totalQuestions }) => {
  return (
    <div className="question-container">
      <div className="question-header">
        <div className="question-title-wrapper">
          <h2 className="question-title">Câu hỏi {questionNumber}/{totalQuestions}</h2>
          <div className="question-badge">
            {questionNumber}/{totalQuestions}
          </div>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <h3 className="question-text">{question}</h3>
      
      <div className="options-container">
        {options.map((option, index) => (
          <label
            key={index}
            className={`option-item ${selectedAnswer === index ? 'option-selected' : ''}`}
          >
            <input
              type="radio"
              name="answer"
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
              className="option-radio"
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
      
      <button
        onClick={onSubmit}
        disabled={selectedAnswer === null}
        className={`submit-button ${selectedAnswer !== null ? 'submit-enabled' : 'submit-disabled'}`}
      >
        {questionNumber === totalQuestions ? 'Hoàn thành' : 'Câu tiếp theo'}
      </button>
    </div>
  );
};

// Component Result để hiển thị kết quả
const Result = ({ score, totalQuestions, onRestart, onShare }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 80) return { message: "Xuất sắc!", color: "result-excellent", icon: "🎉" };
    if (percentage >= 60) return { message: "Tốt!", color: "result-good", icon: "👍" };
    if (percentage >= 40) return { message: "Khá!", color: "result-average", icon: "😊" };
    return { message: "Cần cố gắng thêm!", color: "result-poor", icon: "💪" };
  };

  const result = getResultMessage();

  return (
    <div className="result-container">
      <div className="result-header">
        <div className="result-icon">{result.icon}</div>
        <h2 className={`result-message ${result.color}`}>{result.message}</h2>
        <p className="result-subtitle">Bạn đã hoàn thành bài quiz!</p>
      </div>
      
      <div className="result-score">
        <div className="score-number">{score}/{totalQuestions}</div>
        <div className="score-label">Điểm số của bạn</div>
        <div className={`score-percentage ${result.color}`}>{percentage}%</div>
      </div>
      
      <div className="result-actions">
        <button onClick={onRestart} className="restart-button">
          Chơi lại
        </button>
        <button onClick={onShare} className="share-button">
          Chia sẻ kết quả
        </button>
      </div>
    </div>
  );
};

// Component QuizApp chính để quản lý toàn bộ ứng dụng
const QuizApp = () => {
  // Dữ liệu câu hỏi về địa lý và lịch sử
  const [questions] = useState([
    {
      question: "Thủ đô của Việt Nam là thành phố nào?",
      options: ["Thành phố Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Huế"],
      correctAnswer: 1
    },
    {
      question: "Cuộc khởi nghĩa Hai Bà Trưng diễn ra vào năm nào?",
      options: ["Năm 40", "Năm 39", "Năm 41", "Năm 42"],
      correctAnswer: 0
    },
    {
      question: "Dãy núi nào cao nhất Việt Nam?",
      options: ["Dãy Hoàng Liên Sơn", "Dãy Trường Sơn", "Dãy Bạch Mã", "Dãy Tây Nguyên"],
      correctAnswer: 0
    },
    {
      question: "Chiến dịch Điện Biên Phủ kết thúc vào ngày nào?",
      options: ["7/5/1954", "8/5/1954", "6/5/1954", "9/5/1954"],
      correctAnswer: 0
    },
    {
      question: "Con sông nào dài nhất Việt Nam?",
      options: ["Sông Hồng", "Sông Cửu Long", "Sông Mê Kông", "Sông Đồng Nai"],
      correctAnswer: 2
    },
    {
      question: "Vua nào đã thống nhất đất nước và lấy niên hiệu Gia Long?",
      options: ["Nguyễn Ánh", "Lê Lợi", "Lý Thái Tổ", "Trần Thái Tông"],
      correctAnswer: 0
    },
    {
      question: "Việt Nam có bao nhiêu tỉnh thành trực thuộc trung ương?",
      options: ["62", "63", "64", "65"],
      correctAnswer: 1
    },
    {
      question: "Ngày Quốc khánh của Việt Nam là ngày nào?",
      options: ["30/4", "2/9", "19/5", "1/5"],
      correctAnswer: 1
    },
    {
      question: "Đỉnh núi cao nhất Việt Nam tên là gì?",
      options: ["Phan Xi Păng", "Putaleng", "Tà Chì Nhù", "Ngọc Linh"],
      correctAnswer: 0
    },
    {
      question: "Triều đại nào cai trị Việt Nam lâu nhất?",
      options: ["Nhà Lý", "Nhà Trần", "Nhà Lê", "Nhà Nguyễn"],
      correctAnswer: 2
    }
  ]);

  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Xử lý khi user chọn đáp án
  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  // Xử lý khi submit đáp án
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    // Kiểm tra đáp án đúng/sai
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Chuyển câu hỏi tiếp theo hoặc hiển thị kết quả
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  // Share result
  const handleShare = () => {
    const percentage = Math.round((score / questions.length) * 100);
    const shareText = `Tôi vừa hoàn thành bài quiz ReactJS với điểm số ${score}/${questions.length} (${percentage}%)! 🎉`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Kết quả Quiz ReactJS',
        text: shareText,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Đã copy kết quả vào clipboard!');
      });
    }
  };

  // Start quiz
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  // Render welcome screen
  if (!quizStarted && !showResult) {
    return (
      <div className="app-container">
        <div className="welcome-container">
          <div className="welcome-header">
            <div className="welcome-icon">🧠</div>
            <h1 className="welcome-title">Quiz Địa Lý - Lịch Sử</h1>
            <p className="welcome-subtitle">Kiểm tra kiến thức về địa lý và lịch sử Việt Nam!</p>
          </div>
          
          <div className="quiz-info">
            <h3 className="quiz-info-title">Thông tin quiz:</h3>
            <ul className="quiz-info-list">
              <li>• Số câu hỏi: {questions.length}</li>
              <li>• Thời gian: Không giới hạn</li>
              <li>• Loại: Trắc nghiệm</li>
            </ul>
          </div>
          
          <button onClick={handleStartQuiz} className="start-button">
            Bắt đầu Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {showResult ? (
        <Result 
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
          onShare={handleShare}
        />
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onSubmit={handleSubmitAnswer}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
};

export default QuizApp;