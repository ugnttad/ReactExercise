import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetQuiz } from './quizSlice';

export default function QuizResult() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, score } = useSelector(state => state.quiz);

  return (
    <div>
      <h2 style={{
        textAlign: "center",
        background: "#23272f",
        color: "#fff",
        padding: 28,
        borderRadius: 6,
        marginBottom: 20
      }}>
        Quiz Review
      </h2>
      {questions.map((q, idx) => {
        const isCorrect = q.selected === q.correct;
        return (
          <div key={idx} style={{
            background: isCorrect ? "#d1fae5" : "#fee2e2",
            marginBottom: 18,
            padding: 18,
            borderRadius: 12
          }}>
            <div style={{ fontWeight: 700, marginBottom: 6, color: isCorrect ? '#047857' : '#b91c1c' }}>
              Q{idx + 1}. {q.question}
            </div>
            <div>
              {q.options.map((opt, oIdx) => (
                <div key={oIdx} style={{
                  display: 'flex', alignItems: 'center', margin: "2px 0",
                  color:
                    oIdx === q.correct
                      ? "#059669"
                      : (q.selected === oIdx && q.selected !== q.correct
                        ? "#b91c1c"
                        : "#222")
                }}>
                  <input
                    type="radio"
                    disabled
                    checked={q.selected === oIdx}
                    style={{ marginRight: 8 }}
                  />
                  {opt}
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 10,
              background: "#f3f4f6",
              padding: "8px 16px",
              borderRadius: 6,
              fontWeight: 500,
              color: "#333"
            }}>
              Right answer is: <span style={{ color: "#059669", fontWeight: 700 }}>{q.options[q.correct]}</span>
            </div>
          </div>
        )
      })}
      <div style={{ fontWeight: 700, color: "#2563eb", fontSize: 20, margin: "24px 0" }}>
        Your score: {score} / {questions.length}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => navigate('/quiz')} style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Quiz
        </button>
        <button onClick={() => navigate('/quiz/review')} style={{ background: '#00bcd4', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Quiz Review
        </button>
        <button
          onClick={() => {
            dispatch(resetQuiz());
            navigate('/quiz');
          }}
          style={{ background: '#888', color: 'white', borderRadius: 6, padding: "10px 16px" }}>
          Reset Quiz
        </button>
      </div>
    </div>
  );
}
